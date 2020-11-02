(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-card-add-card-module"],{

/***/ "2bq6":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-card/add-card.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Add New Card' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div_content\">\n    <ion-label class=\"lbl_card\">{{'Your Credit / Debit Card' | translate}}</ion-label>\n\n    <div class=\"div_card\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-input type=\"email\" placeholder=\"demo@gmail.com\" [(ngModel)]=\"email\" class=\"input_all\">\n          </ion-input>\n          <ion-label class=\"card_number\">{{'Email Address' | translate}}</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top : 20px;\">\n        <ion-col size=\"6\">\n          <ion-input type=\"number\" placeholder=\"424242*********4242\" [(ngModel)]=\"cnumber\" class=\"input_all\">\n          </ion-input>\n          <ion-label class=\"card_number\">{{'Card Number' | translate}}</ion-label>\n        </ion-col>\n        <ion-col size=\"6\">\n          <img src=\"assets/visa.png\" class=\"img_visa\" />\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row style=\"margin-top : 20px;\">\n        <ion-col size=\"6\">\n          <ion-input type=\"text\" placeholder=\"Joe\" [(ngModel)]=\"cname\" class=\"input_all\"></ion-input>\n          <ion-label class=\"card_number\">{{'Card Holder Name' | translate}}</ion-label>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-datetime min=\"2020\" max=\"2030\" display-format=\"MMM, YYYY\" [(ngModel)]=\"date\" class=\"input_date\"\n            placeholder=\"Jan, 2019\">\n          </ion-datetime>\n          <ion-label class=\"card_number\">{{'Expiration Date' | translate}}</ion-label>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-label class=\"lbl_card\">CVC</ion-label>\n    <ion-input type=\"text\" maxlength=\"3\" [(ngModel)]=\"cvc\" class=\"in_cvc\"></ion-input>\n\n    <ion-button expand=\"full\" color=\"primary\" class=\"btn_addcard\" (click)=\"addcard()\">{{'ADD CARD' | translate}}\n    </ion-button>\n  </div>\n  <p class=\"title\">NOTE : For DEMO USE </p>\n  <p class=\"sub\">CN : 4242 4242 4242 4242</p>\n  <p class=\"sub\">EXP : 12/2022</p>\n  <p class=\"sub\">CVC : 220</p>\n</ion-content>");

/***/ }),

/***/ "3ONh":
/*!***************************************************!*\
  !*** ./src/app/pages/add-card/add-card.module.ts ***!
  \***************************************************/
/*! exports provided: AddCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPageModule", function() { return AddCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-card-routing.module */ "tF5+");
/* harmony import */ var _add_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-card.page */ "kgbJ");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "dVnR");








let AddCardPageModule = class AddCardPageModule {
};
AddCardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddCardPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_add_card_page__WEBPACK_IMPORTED_MODULE_6__["AddCardPage"]]
    })
], AddCardPageModule);



/***/ }),

/***/ "T2SW":
/*!***************************************************!*\
  !*** ./src/app/pages/add-card/add-card.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div_content {\n  width: 100%;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n\n.div_content .lbl_card {\n  font-size: 16px;\n  display: block;\n  color: gray;\n  margin-top: 15px;\n}\n\n.div_content .div_card {\n  margin-top: 20px;\n  width: 100%;\n  border: 1px solid gray;\n  border-radius: 5px;\n  padding: 20px;\n}\n\n.div_content .div_card .input_all {\n  font-size: 10px;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  --padding-start: 10px;\n}\n\n.div_content .div_card .input_date {\n  font-size: 10px;\n  padding: 0px !important;\n  color: black;\n}\n\n.div_content .div_card .card_number {\n  font-size: 10px;\n  color: gray;\n}\n\n.div_content .div_card .img_visa {\n  float: right;\n  height: 30px;\n  width: 30px;\n}\n\n.div_content .in_cvc {\n  border: 1px solid gray;\n  margin-top: 15px;\n  border-radius: 5px;\n  width: 135px;\n  text-align: center;\n  font-size: 10px;\n}\n\n.div_content .btn_addcard {\n  margin-top: 30px;\n  --box-shadow: none !important;\n}\n\n.title {\n  margin: 0px;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: var(--ion-color-primary);\n}\n\n.sub {\n  padding: 10px;\n  margin: 0px;\n  font-size: 1rem;\n  color: black;\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLWNhcmQvYWRkLWNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDdkI7O0FBSkE7RUFNUSxlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7QUFFeEI7O0FBWEE7RUFZUSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtBQUdyQjs7QUFuQkE7RUFtQlksZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIscUJBQWdCO0FBSTVCOztBQTFCQTtFQXlCWSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFLeEI7O0FBaENBO0VBeUNZLGVBQWU7RUFDZixXQUFXO0FBTHZCOztBQXJDQTtFQTZDWSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7QUFKdkI7O0FBM0NBO0VBb0RRLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUx2Qjs7QUFwREE7RUE2RFEsZ0JBQWdCO0VBQ2hCLDZCQUFhO0FBTHJCOztBQVFBO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLCtCQUErQjtBQUxuQzs7QUFPQTtFQUNJLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7QUFKckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGQtY2FyZC9hZGQtY2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2X2NvbnRlbnR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG5cbiAgICAubGJsX2NhcmR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IFxuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG4gICAgLmRpdl9jYXJke1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICAgIC5pbnB1dF9hbGx7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmlucHV0X2RhdGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiAzcHggIWltcG9ydGFudDsgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC8vIC9kZWVwLyAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZHtcbiAgICAgICAgLy8gICAgIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbiAgICAgICAgLy8gICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC8vICAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnRcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyAvZGVlcC8gLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtaW9ze1xuICAgICAgICAvLyAgICAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICAgICAgICAvLyAgICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgLy8gICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudFxuICAgICAgICAvLyB9XG4gICAgICAgIC5jYXJkX251bWJlcntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5OyAgXG4gICAgICAgIH1cbiAgICAgICAgLmltZ192aXNhe1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5fY3Zje1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHdpZHRoOiAxMzVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuXG4gICAgLmJ0bl9hZGRjYXJke1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59XG4udGl0bGV7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLnN1YntcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */");

/***/ }),

/***/ "kgbJ":
/*!*************************************************!*\
  !*** ./src/app/pages/add-card/add-card.page.ts ***!
  \*************************************************/
/*! exports provided: AddCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPage", function() { return AddCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_card_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-card.page.html */ "2bq6");
/* harmony import */ var _add_card_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-card.page.scss */ "T2SW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let AddCardPage = class AddCardPage {
    constructor(util, api, navCtrl) {
        this.util = util;
        this.api = api;
        this.navCtrl = navCtrl;
        this.cnumber = '';
        this.cname = '';
        this.cvc = '';
        this.date = '';
        this.email = '';
    }
    ngOnInit() {
    }
    updateRest(body) {
        this.api.updateProfile(body.uid, body).then((data) => {
            console.log(data);
        });
        this.navCtrl.back();
    }
    addcard() {
        if (this.email === '' || this.cname === '' || this.cnumber === '' ||
            this.cvc === '' || this.date === '') {
            this.util.errorToast(this.util.translate('All Fields are required'));
            return false;
        }
        const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
        if (!(emailfilter.test(this.email))) {
            this.util.errorToast(this.util.translate('Please enter valid email'));
            return false;
        }
        const year = this.date.split('-')[0];
        const month = this.date.split('-')[1];
        const param = {
            'card[number]': this.cnumber,
            'card[exp_month]': month,
            'card[exp_year]': year,
            'card[cvc]': this.cvc
        };
        this.util.show();
        this.api.httpPost('https://api.stripe.com/v1/tokens', param).subscribe((data) => {
            console.log(data);
            if (data && data.id) {
                // this.token = data.id;
                const customer = {
                    description: 'Customer for food app',
                    source: data.id,
                    email: this.email
                };
                this.api.httpPost('https://api.stripe.com/v1/customers', customer).subscribe((customer) => {
                    console.log(customer);
                    this.util.hide();
                    if (customer && customer.id) {
                        // this.cid = customer.id;
                        const cid = {
                            uid: localStorage.getItem('uid'),
                            cid: customer.id
                        };
                        this.updateRest(cid);
                    }
                }, error => {
                    this.util.hide();
                    console.log();
                    if (error && error.error && error.error.error && error.error.error.message) {
                        this.util.showErrorAlert(error.error.error.message);
                        return false;
                    }
                    this.util.errorToast(this.util.translate('Something went wrong'));
                });
            }
            else {
                this.util.hide();
            }
        }, (error) => {
            console.log(error);
            this.util.hide();
            console.log();
            if (error && error.error && error.error.error && error.error.error.message) {
                this.util.showErrorAlert(error.error.error.message);
                return false;
            }
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
};
AddCardPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
AddCardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-card',
        template: _raw_loader_add_card_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_card_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
], AddCardPage);



/***/ }),

/***/ "tF5+":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-card/add-card-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddCardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPageRoutingModule", function() { return AddCardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-card.page */ "kgbJ");




const routes = [
    {
        path: '',
        component: _add_card_page__WEBPACK_IMPORTED_MODULE_3__["AddCardPage"]
    }
];
let AddCardPageRoutingModule = class AddCardPageRoutingModule {
};
AddCardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddCardPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-add-card-add-card-module-es2015.js.map