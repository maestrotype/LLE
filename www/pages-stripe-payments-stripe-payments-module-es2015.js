(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-stripe-payments-stripe-payments-module"],{

/***/ "Bacn":
/*!***************************************************************!*\
  !*** ./src/app/pages/stripe-payments/stripe-payments.page.ts ***!
  \***************************************************************/
/*! exports provided: StripePaymentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePaymentsPage", function() { return StripePaymentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_stripe_payments_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./stripe-payments.page.html */ "CgU1");
/* harmony import */ var _stripe_payments_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stripe-payments.page.scss */ "Ko7l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");










let StripePaymentsPage = class StripePaymentsPage {
    constructor(router, api, util, navCtrl) {
        this.router = router;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.cards = [];
        this.totalPrice = 0;
        this.totalItem = 0;
        this.serviceTax = 0;
        this.deliveryCharge = 5;
        this.grandTotal = 0;
        this.venueFCM = '';
        this.vid = '';
        this.payKey = '';
        this.cart = [];
    }
    getCards() {
        this.api.httpGet('https://api.stripe.com/v1/customers/' + this.cid + '/sources?object=card').subscribe((cards) => {
            this.util.hide();
            console.log(cards);
            if (cards && cards.data) {
                this.cards = cards.data;
                this.card_token = this.cards[0].id;
            }
        }, (error) => {
            this.util.hide();
            console.log(error);
            this.util.hide();
            if (error && error.error && error.error.error && error.error.error.message) {
                this.util.showErrorAlert(error.error.error.message);
                return false;
            }
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    getProfile() {
        this.util.show();
        console.log('loca', localStorage.getItem('uid'));
        this.api.getProfile(localStorage.getItem('uid')).then((data) => {
            console.log('data', data);
            if (data && data.cid) {
                this.cid = data.cid;
                this.getCards();
            }
            else {
                this.util.hide();
            }
        }, error => {
            console.log(error);
            this.util.hide();
            this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch(error => {
            console.log(error);
            this.util.hide();
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const foods = yield JSON.parse(localStorage.getItem('foods'));
            let recheck = yield foods.filter(x => x.quantiy > 0);
            console.log(recheck);
            const add = JSON.parse(localStorage.getItem('deliveryAddress'));
            this.vid = localStorage.getItem('vid');
            this.api.getVenueUser(this.vid).then((data) => {
                console.log('venue', data);
                if (data && data.fcm_token) {
                    this.venueFCM = data.fcm_token;
                }
            }, error => {
                this.util.errorToast(this.util.translate('Something went wrong'));
                this.router.navigate(['tabs']);
            }).catch(error => {
                this.util.errorToast(this.util.translate('Something went wrong'));
                this.router.navigate(['tabs']);
                console.log(error);
            });
            if (add && add.address) {
                this.deliveryAddress = add;
            }
            this.coupon = JSON.parse(localStorage.getItem('coupon'));
            const cart = localStorage.getItem('userCart');
            try {
                if (cart && cart !== 'null' && cart !== undefined && cart !== 'undefined') {
                    this.cart = JSON.parse(localStorage.getItem('userCart'));
                    this.calculate();
                }
                else {
                    this.cart = [];
                }
            }
            catch (error) {
                console.log(error);
                this.cart = [];
            }
        });
    }
    calculate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('cart--->,', this.cart);
            // new
            let item = this.cart.filter(x => x.quantiy > 0);
            this.cart.forEach(element => {
                if (element.quantiy === 0) {
                    element.selectedItem = [];
                }
            });
            console.log('item=====>>', item);
            this.totalPrice = 0;
            this.totalItem = 0;
            this.cart = [];
            console.log('cart emplth', this.cart, item);
            item.forEach(element => {
                this.totalItem = this.totalItem + element.quantiy;
                console.log('itemsss----->>>', element);
                if (element && element.selectedItem && element.selectedItem.length > 0) {
                    let subPrice = 0;
                    element.selectedItem.forEach(subItems => {
                        subItems.item.forEach(realsItems => {
                            subPrice = subPrice + (realsItems.value);
                        });
                        subPrice = subPrice * subItems.total;
                    });
                    this.totalPrice = this.totalPrice + subPrice;
                    // this.totalPrice = this.totalPrice + (subPrice * parseInt(element.quantiy));
                }
                else {
                    this.totalPrice = this.totalPrice + (parseFloat(element.price) * parseInt(element.quantiy));
                }
                this.cart.push(element);
            });
            localStorage.removeItem('userCart');
            console.log('carrrrrrr---->>>', this.cart);
            localStorage.setItem('userCart', JSON.stringify(this.cart));
            this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
            // new
            console.log('total item', this.totalItem);
            console.log('=====>', this.totalPrice);
            const tax = (parseFloat(this.totalPrice) * 21) / 100;
            this.serviceTax = tax.toFixed(2);
            console.log('tax->', this.serviceTax);
            this.deliveryCharge = 5;
            this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
            this.grandTotal = this.grandTotal.toFixed(2);
            if (this.coupon && this.coupon.code && this.totalPrice >= this.coupon.min) {
                if (this.coupon.type === '%') {
                    console.log('per');
                    function percentage(num, per) {
                        return (num / 100) * per;
                    }
                    const totalPrice = percentage(parseFloat(this.totalPrice).toFixed(2), this.coupon.discout);
                    console.log('============>>>>>>>>>>>>>>>', totalPrice);
                    this.dicount = totalPrice.toFixed(2);
                    this.totalPrice = parseFloat(this.totalPrice) - totalPrice;
                    console.log('------------>>>>', this.totalPrice);
                    this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
                    const tax = (parseFloat(this.totalPrice) * 21) / 100;
                    this.serviceTax = tax.toFixed(2);
                    console.log('tax->', this.serviceTax);
                    this.deliveryCharge = 5;
                    this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
                    this.grandTotal = this.grandTotal.toFixed(2);
                }
                else {
                    console.log('$');
                    const totalPrice = parseFloat(this.totalPrice) - this.coupon.discout;
                    console.log('============>>>>>>>>>>>>>>>', totalPrice);
                    this.dicount = this.coupon.discout;
                    this.totalPrice = totalPrice;
                    console.log('------------>>>>', this.totalPrice);
                    this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
                    const tax = (parseFloat(this.totalPrice) * 21) / 100;
                    this.serviceTax = tax.toFixed(2);
                    console.log('tax->', this.serviceTax);
                    this.deliveryCharge = 5;
                    this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
                    this.grandTotal = this.grandTotal.toFixed(2);
                }
            }
            else {
                console.log('not satisfied');
                this.coupon = null;
                localStorage.removeItem('coupon');
            }
            console.log('grand totla', this.grandTotal);
            if (this.totalItem === 0) {
                const lng = localStorage.getItem('language');
                const selectedCity = localStorage.getItem('selectedCity');
                yield localStorage.clear();
                localStorage.setItem('language', lng);
                localStorage.setItem('selectedCity', selectedCity);
                this.totalItem = 0;
                this.totalPrice = 0;
            }
        });
    }
    /// OLD calc
    // async calculate(foods) {
    //   console.log(foods);
    //   let item = foods.filter(x => x.quantiy > 0);
    //   console.log(item);
    //   this.totalPrice = 0;
    //   this.totalItem = 0;
    //   await item.forEach(element => {
    //     this.totalItem = this.totalItem + element.quantiy;
    //     this.totalPrice = this.totalPrice + (parseFloat(element.price) * parseInt(element.quantiy));
    //   });
    //   this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
    //   console.log('total item', this.totalItem);
    //   console.log('=====>', this.totalPrice);
    //   const tax = (parseFloat(this.totalPrice) * 21) / 100;
    //   this.serviceTax = tax.toFixed(2);
    //   console.log('tax->', this.serviceTax);
    //   this.deliveryCharge = 5;
    //   this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
    //   this.grandTotal = this.grandTotal.toFixed(2);
    //   console.log('grand totla', this.grandTotal);
    //   if (this.coupon && this.coupon.code && this.totalPrice >= this.coupon.min) {
    //     if (this.coupon.type === '%') {
    //       console.log('per');
    //       function percentage(totalValue, partialValue) {
    //         return (100 * partialValue) / totalValue;
    //       }
    //       const totalPrice = percentage(parseFloat(this.totalPrice).toFixed(2), this.coupon.discout);
    //       console.log('============>>>>>>>>>>>>>>>', totalPrice);
    //       this.dicount = totalPrice.toFixed(2);
    //       this.totalPrice = parseFloat(this.totalPrice) - totalPrice;
    //       console.log('------------>>>>', this.totalPrice);
    //       this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
    //       const tax = (parseFloat(this.totalPrice) * 21) / 100;
    //       this.serviceTax = tax.toFixed(2);
    //       console.log('tax->', this.serviceTax);
    //       this.deliveryCharge = 5;
    //       this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
    //       this.grandTotal = this.grandTotal.toFixed(2);
    //     } else {
    //       console.log('$');
    //       console.log('per');
    //       const totalPrice = parseFloat(this.totalPrice) - this.coupon.discout;
    //       console.log('============>>>>>>>>>>>>>>>', totalPrice);
    //       this.dicount = this.coupon.discout;
    //       this.totalPrice = parseFloat(this.totalPrice) - totalPrice;
    //       console.log('------------>>>>', this.totalPrice);
    //       this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
    //       const tax = (parseFloat(this.totalPrice) * 21) / 100;
    //       this.serviceTax = tax.toFixed(2);
    //       console.log('tax->', this.serviceTax);
    //       this.deliveryCharge = 5;
    //       this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
    //       this.grandTotal = this.grandTotal.toFixed(2);
    //     }
    //   } else {
    //     console.log('not satisfied');
    //     this.coupon = null;
    //     localStorage.removeItem('coupon');
    //   }
    // }
    // OLD calc
    payment() {
        console.log('place order');
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: this.util.translate('Are you sure?'),
            text: this.util.translate('Orders once placed cannot be cancelled and are non-refundable'),
            icon: 'question',
            confirmButtonText: this.util.translate('Yes'),
            cancelButtonText: this.util.translate('cancel'),
            showCancelButton: true,
            backdrop: false,
            background: 'white'
        }).then((data) => {
            console.log(data);
            if (data && data.value) {
                console.log('go to procesed');
                const options = {
                    amount: parseInt(this.grandTotal) * 100,
                    currency: 'inr',
                    customer: this.cid,
                    card: this.card_token,
                };
                console.log('options', options);
                const url = 'https://api.stripe.com/v1/charges';
                this.util.show();
                this.api.httpPost(url, options).subscribe((data) => {
                    console.log('------------------------->', data);
                    this.payKey = data.id;
                    this.util.hide();
                    this.util.showToast(this.util.translate('Payment Success'), 'success', 'bottom');
                    this.createOrder();
                }, (error) => {
                    this.util.hide();
                    console.log(error);
                    this.util.hide();
                    if (error && error.error && error.error.error && error.error.error.message) {
                        this.util.showErrorAlert(error.error.error.message);
                        return false;
                    }
                    this.util.errorToast('Something went wrong');
                });
            }
        });
    }
    degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
    }
    distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
        console.log(lat1, lon1, lat2, lon2);
        const earthRadiusKm = 6371;
        const dLat = this.degreesToRadians(lat2 - lat1);
        const dLon = this.degreesToRadians(lon2 - lon1);
        lat1 = this.degreesToRadians(lat1);
        lat2 = this.degreesToRadians(lat2);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return earthRadiusKm * c;
    }
    createOrder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.util.show('creating order');
            this.api.checkAuth().then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(data);
                if (data) {
                    // not from saved address then create new and save
                    if (!this.deliveryAddress.id || this.deliveryAddress.id === '') {
                        const addressId = this.util.makeid(10);
                        const newAddress = {
                            id: addressId,
                            uid: data.uid,
                            address: this.deliveryAddress.address,
                            lat: this.deliveryAddress.lat,
                            lng: this.deliveryAddress.lng,
                            title: 'home',
                            house: '',
                            landmark: ''
                        };
                        yield this.api.addNewAddress(data.uid, addressId, newAddress).then((data) => {
                            this.deliveryAddress.id = addressId;
                        }, error => {
                            console.log(error);
                        }).catch(error => {
                            console.log(error);
                        });
                    }
                    // const foods = await JSON.parse(localStorage.getItem('foods'));
                    // let recheck = await foods.filter(x => x.quantiy > 0);
                    // console.log('ordered food', recheck);
                    let id = this.util.makeid(10);
                    yield localStorage.removeItem('foods');
                    yield localStorage.removeItem('vid');
                    yield localStorage.removeItem('totalItem');
                    const uid = localStorage.getItem('uid');
                    const lng = localStorage.getItem('language');
                    const selectedCity = localStorage.getItem('selectedCity');
                    yield localStorage.clear();
                    localStorage.setItem('uid', uid);
                    localStorage.setItem('language', lng);
                    localStorage.setItem('selectedCity', selectedCity);
                    const param = {
                        uid: data.uid,
                        userId: data.uid,
                        orderId: id,
                        vid: this.vid,
                        order: JSON.stringify(this.cart),
                        time: moment__WEBPACK_IMPORTED_MODULE_7__().format('llll'),
                        address: this.deliveryAddress,
                        total: this.totalPrice,
                        grandTotal: this.grandTotal,
                        serviceTax: this.serviceTax,
                        deliveryCharge: 5,
                        status: 'created',
                        restId: this.vid,
                        paid: 'stripe',
                        paykey: this.payKey,
                        appliedCoupon: this.coupon ? true : false,
                        couponId: this.coupon ? this.coupon.id : 'NA',
                        coupon: this.coupon ? JSON.stringify(this.coupon) : 'NA',
                        dicount: this.coupon ? this.dicount : 0
                    };
                    console.log('sent', param);
                    this.api.createOrder(id, param).then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.util.hide();
                        if (this.venueFCM && this.venueFCM !== '') {
                            this.api.sendNotification(this.util.translate('New Order Received'), this.util.translate('New Order'), this.venueFCM).subscribe((data) => {
                                console.log('send notifications', data);
                            }, error => {
                                console.log(error);
                            });
                        }
                        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                            title: this.util.translate('Success'),
                            text: this.util.translate('Your is created succesfully'),
                            icon: 'success',
                            backdrop: false,
                        });
                        this.navCtrl.navigateRoot(['tabs/tab2']);
                        console.log(data);
                    }), error => {
                        this.util.hide();
                        this.util.errorToast(this.util.translate('Something went wrong'));
                        this.router.navigate(['tabs']);
                    }).catch(error => {
                        this.util.hide();
                        this.util.errorToast(this.util.translate('Something went wrong'));
                        this.router.navigate(['tabs']);
                        console.log(error);
                    });
                }
                else {
                    this.util.hide();
                    this.util.errorToast(this.util.translate('Session expired'));
                    this.router.navigate(['login']);
                }
            }), error => {
                this.util.hide();
                this.util.errorToast(this.util.translate('Session expired'));
                this.router.navigate(['login']);
            }).catch(error => {
                this.util.hide();
                this.util.errorToast(this.util.translate('Session expired'));
                this.router.navigate(['login']);
                console.log(error);
            });
        });
    }
    ionViewWillEnter() {
        this.getProfile();
    }
    onAdd() {
        this.router.navigate(['add-card']);
    }
    changeMethod(id) {
        this.card_token = id;
    }
    getCurrency() {
        return this.util.getCurrecySymbol();
    }
};
StripePaymentsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"] }
];
StripePaymentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-stripe-payments',
        template: _raw_loader_stripe_payments_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_stripe_payments_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"]])
], StripePaymentsPage);



/***/ }),

/***/ "CgU1":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stripe-payments/stripe-payments.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Pay with' | translate}} Stripe</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onAdd()\">\n        <ion-icon slot=\"end\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div_content\">\n    <div *ngIf=\"!cards?.length\">\n      <p class=\"ion-text-center\">{{'No Card Found Please Add Card' | translate}}</p>\n    </div>\n    <ion-radio-group [(ngModel)]=\"card_token\">\n      <ion-item class=\"div_inner\" lines=\"none\" *ngFor=\"let card of cards;let i = index\">\n        <ion-thumbnail slot=\"end\">\n          <img src=\"assets/visa.png\" class=\"img_visa\" />\n        </ion-thumbnail>\n        <ion-radio (ionSelect)=\"changeMethod(card.id)\" [value]=\"card.id\" slot=\"start\"></ion-radio>\n        <ion-label>XXXX{{card.last4}} <br> Expiry {{card.exp_month}} / {{card.exp_year}}</ion-label>\n      </ion-item>\n    </ion-radio-group>\n    <ion-button expand=\"block\" *ngIf=\"cards?.length\" class=\"btn_addcard\" (click)=\"payment()\">{{'Payment' | translate}}\n      {{getCurrency()}}\n      {{grandTotal}}\n    </ion-button>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "Ko7l":
/*!*****************************************************************!*\
  !*** ./src/app/pages/stripe-payments/stripe-payments.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn_right {\n  position: relative;\n  z-index: 999999;\n}\n\n.img_menu {\n  width: 17px;\n  position: absolute;\n  right: 20px;\n}\n\n.div_content {\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.div_content .div_inner {\n  width: 100%;\n  margin-top: 15px;\n  padding-bottom: 15px;\n}\n\n.div_content .div_inner .r {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.div_content .div_inner .lbl_number {\n  display: block;\n  font-size: 17px;\n  color: gray;\n  margin-left: 10px;\n}\n\n.div_content .div_inner .img_visa {\n  float: right;\n  position: absolute;\n  top: 50%;\n  display: block;\n  font-size: 17px;\n  color: gray;\n  margin-left: 10px;\n  transform: translateY(-50%);\n  height: 15px !important;\n  width: 50px !important;\n}\n\n.btn_addcard {\n  margin-top: 30px;\n  --box-shadow: none !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RyaXBlLXBheW1lbnRzL3N0cmlwZS1wYXltZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNuQjs7QUFDQTtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztBQUVmOztBQUFBO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFHdkI7O0FBTkE7RUFNUSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUk1Qjs7QUFaQTtFQVdZLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsMkJBQTJCO0FBS3ZDOztBQWxCQTtFQWdCWSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7QUFNN0I7O0FBekJBO0VBc0JZLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQU9sQzs7QUFIQTtFQUNJLGdCQUFnQjtFQUNoQiw2QkFBYTtBQU1qQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0cmlwZS1wYXltZW50cy9zdHJpcGUtcGF5bWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bl9yaWdodHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogOTk5OTk5O1xufVxuLmltZ19tZW51e1xuICAgIHdpZHRoOiAxN3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbn1cbi5kaXZfY29udGVudHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcblxuICAgIC5kaXZfaW5uZXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcblxuICAgICAgICAucntcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG4gICAgICAgIC5sYmxfbnVtYmVye1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbWdfdmlzYXtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuLmJ0bl9hZGRjYXJke1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "usTK":
/*!*************************************************************************!*\
  !*** ./src/app/pages/stripe-payments/stripe-payments-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: StripePaymentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePaymentsPageRoutingModule", function() { return StripePaymentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _stripe_payments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stripe-payments.page */ "Bacn");




const routes = [
    {
        path: '',
        component: _stripe_payments_page__WEBPACK_IMPORTED_MODULE_3__["StripePaymentsPage"]
    }
];
let StripePaymentsPageRoutingModule = class StripePaymentsPageRoutingModule {
};
StripePaymentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StripePaymentsPageRoutingModule);



/***/ }),

/***/ "xKnB":
/*!*****************************************************************!*\
  !*** ./src/app/pages/stripe-payments/stripe-payments.module.ts ***!
  \*****************************************************************/
/*! exports provided: StripePaymentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePaymentsPageModule", function() { return StripePaymentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _stripe_payments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stripe-payments-routing.module */ "usTK");
/* harmony import */ var _stripe_payments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stripe-payments.page */ "Bacn");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "dVnR");








let StripePaymentsPageModule = class StripePaymentsPageModule {
};
StripePaymentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _stripe_payments_routing_module__WEBPACK_IMPORTED_MODULE_5__["StripePaymentsPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_stripe_payments_page__WEBPACK_IMPORTED_MODULE_6__["StripePaymentsPage"]]
    })
], StripePaymentsPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-stripe-payments-stripe-payments-module-es2015.js.map