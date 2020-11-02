(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-category-module"], {
    /***/
    "ADuP":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function ADuP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content #content>\n  <div class=\"mainContent\">\n    <div class=\"restContent\" [style.backgroundImage]=\"'url('+cover+')'\">\n      <div class=\"btnss\">\n        <ion-icon (click)=\"back()\" class=\"backIcon\" color=\"light\" slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n        <ion-label class=\"moreInfo\" (click)=\"openDetails()\">{{'View more' | translate}}</ion-label>\n      </div>\n    </div>\n    <div class=\"foodsContent\">\n      <ion-label class=\"restname\">{{name}}</ion-label>\n      <ion-label class=\"cusine\">{{getCusine(cusine)}}</ion-label>\n      <div class=\"ratting\">\n        <ion-icon [name]=\"totalRatting >= 1 ? 'star-outline':'star'\" [color]=\"totalRatting >= 1 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"totalRatting >= 2 ? 'star-outline':'star'\" [color]=\"totalRatting >= 2 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"totalRatting >= 3 ? 'star-outline':'star'\" [color]=\"totalRatting >= 3 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"totalRatting >= 4 ? 'star-outline':'star'\" [color]=\"totalRatting >= 4 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"totalRatting >= 5 ? 'star-outline':'star'\" [color]=\"totalRatting >= 5 ? 'warning':'medium'\">\n        </ion-icon>\n        ({{ratting}} {{'Rattings' | translate}})\n      </div>\n      <div class=\"deliveryAddress\">\n        <img src=\"assets/pin.png\" alt=\"\" class=\"pin\">\n        <p class=\"address\"> {{getAddress()}}</p>\n\n      </div>\n      <div class=\"vegSection\">\n        <ion-label>{{'Veg Only' | translate}}</ion-label>\n        <ion-toggle color=\"success\" mode=\"ios\" (ionChange)=\"statusChange()\" [(ngModel)]=\"veg\"></ion-toggle>\n      </div>\n      <div *ngFor=\"let item of dummy\">\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail slot=\"start\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-thumbnail>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              </p>\n              <p>\n                <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n      <div *ngFor=\"let cate of categories\">\n        <ion-label class=\"cateTitle\" [id]=\"cate.id\">{{cate.name}}</ion-label>\n        <div class=\"card_div\">\n\n          <div class=\"card\" *ngFor=\"let item of foods;let i = index\">\n            <div *ngIf=\"cate.id == item.cid.id\" class=\"mainCat\">\n              <img [src]=\"item.cover\" alt=\"\" class=\"image_div\">\n              <div class=\"desc_div\">\n                <ion-label class=\"heading_lbl\">{{item.name}}</ion-label>\n                <div class=\"ratting\">\n                  <ion-icon [name]=\"item.ratting >= 1 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 1 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 2 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 2 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 3 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 3 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 4 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 4 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 5 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 5 ? 'warning':'medium'\">\n                  </ion-icon>\n                  ({{item.totalRatting ? item.totalRatting:0}}. {{'Rattings' | translate}})\n                </div>\n                <ion-label class=\"small_lbl\">{{item.desc}}</ion-label>\n                <ion-label class=\"small_lbl\">{{getCurrency()}} {{item.price}}</ion-label>\n              </div>\n              <div class=\"cartBtn\" *ngIf=\"item.quantiy <= 0\">\n                <ion-label class=\"btns\" (click)=\"add(i)\">{{'Add' | translate}}</ion-label>\n                <!-- <ion-button (click)=\"add(i)\" size=\"small\" expand=\"block\" fill=\"outline\" shape=\"round\">\n                  {{'Add' | translate}}\n                </ion-button> -->\n              </div>\n              <div class=\"cartBtn2\" *ngIf=\"item.quantiy > 0\">\n                <ion-button (click)=\"removeQ(i)\" fill=\"clear\" size=\"small\">\n                  <ion-icon name=\"remove\"></ion-icon>\n                </ion-button>\n                <p class=\"qunitity\">{{item.quantiy}}</p>\n                <ion-button (click)=\"addQ(i)\" fill=\"clear\" size=\"small\">\n                  <ion-icon name=\"add\"></ion-icon>\n                </ion-button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- <app-popover></app-popover> -->\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"presentPopover($event)\">\n    <ion-fab-button color=\"light\" mode=\"ios\">\n      <ion-icon name=\"list\" color=\"primary\"></ion-icon>\n      <ion-label color=\"primary\">{{'Menu' | translate}}</ion-label>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n<ion-footer *ngIf=\"totalItem >0\">\n  <ion-toolbar color=\"primary\">\n    <ion-label color=\"light\">{{totalItem}} {{'ITEM' | translate}}</ion-label>\n    <ion-label color=\"light\"> {{getCurrency()}} {{totalPrice}} {{'plus taxes' | translate}}</ion-label>\n    <ion-button (click)=\"viewCart()\" slot=\"end\" fill=\"clear\" color=\"light\">\n      <ion-icon slot=\"end\" name=\"arrow-forward-outline\"></ion-icon>\n      {{'View Cart' | translate}}\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "FTWP":
    /*!*************************************************!*\
      !*** ./src/app/pages/category/category.page.ts ***!
      \*************************************************/

    /*! exports provided: CategoryPage */

    /***/
    function FTWP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryPage", function () {
        return CategoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_category_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./category.page.html */
      "ADuP");
      /* harmony import */


      var _category_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./category.page.scss */
      "cJis");
      /* harmony import */


      var _variations_variations_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../variations/variations.page */
      "blxb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/components/menu/menu.component */
      "0oYm");

      var CategoryPage = /*#__PURE__*/function () {
        function CategoryPage(route, api, util, navCtrl, alertController, router, popoverController, modalCtrl) {
          _classCallCheck(this, CategoryPage);

          this.route = route;
          this.api = api;
          this.util = util;
          this.navCtrl = navCtrl;
          this.alertController = alertController;
          this.router = router;
          this.popoverController = popoverController;
          this.modalCtrl = modalCtrl;
          this.cover = '';
          this.cusine = [];
          this.foods = [];
          this.dummyFoods = [];
          this.categories = [];
          this.dummy = Array(50);
          this.veg = true;
          this.totalItem = 0;
          this.totalPrice = 0;
          this.deliveryAddress = '';
          this.foodIds = [];
          this.cart = [];
        }

        _createClass(CategoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (data) {
              console.log('data=>', data);

              if (data.hasOwnProperty('id')) {
                _this.id = data.id;

                _this.getVenueDetails();
              }
            });
          }
        }, {
          key: "getAddress",
          value: function getAddress() {
            var address = JSON.parse(localStorage.getItem('deliveryAddress'));

            if (address && address.address) {
              this.deliveryAddress = address.address;
            }

            return this.deliveryAddress;
          }
        }, {
          key: "getVenueDetails",
          value: function getVenueDetails() {
            var _this2 = this;

            // Venue Details
            this.api.getVenueDetails(this.id).then(function (data) {
              console.log(data);

              if (data) {
                _this2.name = data.name;
                _this2.descritions = data.descritions;
                _this2.cover = data.cover;
                _this2.address = data.address;
                _this2.ratting = data.ratting ? data.ratting : 0;
                _this2.totalRatting = data.totalRatting ? data.totalRatting : 2;
                _this2.dishPrice = data.dishPrice;
                _this2.time = data.time;
                _this2.cusine = data.cusine;
                var vid = localStorage.getItem('vid');
                console.log('id', vid, _this2.id);

                if (vid && vid !== _this2.id) {
                  _this2.dummy = [];

                  _this2.presentAlertConfirm();

                  return false;
                }

                _this2.getCates();

                _this2.getFoods();
              }
            }, function (error) {
              console.log(error);

              _this2.util.errorToast(_this2.util.translate('Something went wrong'));
            })["catch"](function (error) {
              console.log(error);

              _this2.util.errorToast(_this2.util.translate('Something went wrong'));
            });
          }
        }, {
          key: "getCates",
          value: function getCates() {
            var _this3 = this;

            this.api.getVenueCategories(this.id).then(function (cate) {
              console.log(cate);

              if (cate) {
                _this3.categories = cate;
              }
            }, function (error) {
              console.log(error);
              _this3.dummy = [];

              _this3.util.errorToast(_this3.util.translate('Something went wrong'));
            })["catch"](function (error) {
              console.log(error);
              _this3.dummy = [];

              _this3.util.errorToast(_this3.util.translate('Something went wrong'));
            });
          }
        }, {
          key: "getFoods",
          value: function getFoods() {
            var _this4 = this;

            this.api.getFoods(this.id).then(function (foods) {
              console.log(foods);

              if (foods) {
                // if()
                _this4.dummy = [];
                _this4.foods = [];
                _this4.dummyFoods = [];
                foods.forEach(function (element) {
                  if (element && element.status === true) {
                    var info = {
                      cid: {
                        id: element.cid.id
                      },
                      cover: element.cover,
                      desc: element.desc,
                      id: element.id,
                      name: element.name,
                      price: element.price,
                      ratting: element.ratting,
                      uid: element.uid,
                      veg: element.veg,
                      quantiy: 0,
                      size: element.size,
                      variations: element.variations,
                      totalRatting: element.totalRatting ? element.totalRatting : 0,
                      selectedItem: []
                    };

                    _this4.foods.push(info);

                    _this4.dummyFoods.push(info);

                    _this4.foodIds.push(element.id);
                  }
                });
                console.log('myfoods', _this4.foods);

                if (!_this4.foods.length || _this4.foods.length === 0) {
                  _this4.util.errorToast(_this4.util.translate('No Foods found'));

                  _this4.navCtrl.back();

                  return false;
                }

                _this4.changeStatus();

                _this4.checkCart();
              }
            }, function (error) {
              console.log(error);
              _this4.dummy = [];

              _this4.util.errorToast(_this4.util.translate('Something went wrong'));
            })["catch"](function (error) {
              console.log(error);
              _this4.dummy = [];

              _this4.util.errorToast(_this4.util.translate('Something went wrong'));
            });
          }
        }, {
          key: "checkCart",
          value: function checkCart() {
            var _this5 = this;

            var userCart = localStorage.getItem('userCart');

            if (userCart && userCart !== 'null' && userCart !== undefined && userCart !== 'undefined') {
              var cart = JSON.parse(userCart);
              console.log('carrt', cart);
              console.log(this.foodIds);
              cart.forEach(function (element) {
                if (_this5.foodIds.includes(element.id)) {
                  var index = _this5.foods.findIndex(function (x) {
                    return x.id === element.id;
                  });

                  console.log('index---<', index);
                  _this5.foods[index].quantiy = element.quantiy;
                  _this5.foods[index].selectedItem = element.selectedItem;
                }
              });
              this.calculate();
            }
          }
        }, {
          key: "back",
          value: function back() {
            this.navCtrl.navigateRoot(['tabs']);
          }
        }, {
          key: "getCusine",
          value: function getCusine(cusine) {
            return cusine.join('-');
          }
        }, {
          key: "add",
          value: function add(index) {
            var _this6 = this;

            this.api.checkAuth().then(function (user) {
              if (user) {
                var vid = localStorage.getItem('vid');

                if (vid && vid !== _this6.id) {
                  _this6.presentAlertConfirm();

                  return false;
                }

                if (_this6.foods[index].variations && _this6.foods[index].variations.length) {
                  console.log('open modal');

                  _this6.openVariations(index);
                } else {
                  _this6.foods[index].quantiy = 1;

                  _this6.calculate();
                }
              } else {
                _this6.router.navigate(['login']);
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "statusChange",
          value: function statusChange() {
            console.log('status', this.veg);
            this.changeStatus();
          }
        }, {
          key: "calculate",
          value: function calculate() {
            var _this7 = this;

            // this.dummy = [];
            // console.log('khaliiii', this.dummy);
            // console.log(this.foods);
            // let item = this.foods.filter(x => x.quantiy > 0);
            // console.log(item);
            // this.totalPrice = 0;
            // this.totalItem = 0;
            // item.forEach(element => {
            //   this.totalItem = this.totalItem + element.quantiy;
            //   this.totalPrice = this.totalPrice + (parseFloat(element.price) * parseInt(element.quantiy));
            // });
            // this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
            // console.log('total item', this.totalItem);
            // if (this.totalItem === 0) {
            //   this.totalItem = 0;
            //   this.totalPrice = 0;
            // }
            this.dummy = [];
            console.log('khaliiii', this.dummy);
            console.log(this.foods);
            var item = this.foods.filter(function (x) {
              return x.quantiy > 0;
            });
            this.foods.forEach(function (element) {
              if (element.quantiy === 0) {
                element.selectedItem = [];
              }
            });
            console.log('item=====>>', item);
            this.totalPrice = 0;
            this.totalItem = 0;
            this.cart = [];
            console.log('cart emplth', this.cart, item);
            item.forEach(function (element) {
              _this7.totalItem = _this7.totalItem + element.quantiy;
              console.log('itemsss----->>>', element);

              if (element && element.selectedItem && element.selectedItem.length > 0) {
                var subPrice = 0;
                element.selectedItem.forEach(function (subItems) {
                  subItems.item.forEach(function (realsItems) {
                    subPrice = subPrice + realsItems.value;
                  });
                  subPrice = subPrice * subItems.total;
                });
                _this7.totalPrice = _this7.totalPrice + subPrice; // this.totalPrice = this.totalPrice + (subPrice * parseInt(element.quantiy));
              } else {
                _this7.totalPrice = _this7.totalPrice + parseFloat(element.price) * parseInt(element.quantiy);
              }

              _this7.cart.push(element);
            });
            localStorage.removeItem('userCart');
            console.log('carrrrrrr---->>>', this.cart);
            localStorage.setItem('userCart', JSON.stringify(this.cart));
            this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
            console.log('total item', this.totalItem);

            if (this.totalItem === 0) {
              this.totalItem = 0;
              this.totalPrice = 0;
            }
          }
        }, {
          key: "setData",
          value: function setData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var vid;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      vid = localStorage.getItem('vid');
                      console.log('leaving the planet', vid, this.id);
                      console.log('total item', this.totalItem);

                      if (!(vid && vid === this.id && this.totalPrice > 0)) {
                        _context.next = 13;
                        break;
                      }

                      localStorage.setItem('vid', this.id);
                      _context.next = 7;
                      return localStorage.setItem('foods', JSON.stringify(this.foods));

                    case 7:
                      localStorage.setItem('categories', JSON.stringify(this.categories));
                      localStorage.setItem('dummyItem', JSON.stringify(this.dummyFoods));
                      localStorage.setItem('totalItem', this.totalItem);
                      localStorage.setItem('totalPrice', this.totalPrice);
                      _context.next = 24;
                      break;

                    case 13:
                      if (!(!vid && this.totalItem > 0)) {
                        _context.next = 23;
                        break;
                      }

                      localStorage.setItem('vid', this.id);
                      _context.next = 17;
                      return localStorage.setItem('foods', JSON.stringify(this.foods));

                    case 17:
                      localStorage.setItem('categories', JSON.stringify(this.categories));
                      localStorage.setItem('dummyItem', JSON.stringify(this.dummyFoods));
                      localStorage.setItem('totalItem', this.totalItem);
                      localStorage.setItem('totalPrice', this.totalPrice);
                      _context.next = 24;
                      break;

                    case 23:
                      if (this.totalItem == 0) {
                        this.totalItem = 0;
                        this.totalPrice = 0;
                      }

                    case 24:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.setData();

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "changeStatus",
          value: function changeStatus() {
            var _this8 = this;

            this.foods = this.dummyFoods.filter(function (x) {
              return x.veg === _this8.veg;
            });
          } // addQ(index) {
          //   this.foods[index].quantiy = this.foods[index].quantiy + 1;
          //   this.calculate();
          // }
          // removeQ(index) {
          //   if (this.foods[index].quantiy !== 0) {
          //     this.foods[index].quantiy = this.foods[index].quantiy - 1;
          //   } else {
          //     this.foods[index].quantiy = 0;
          //   }
          //   this.calculate();
          // }

        }, {
          key: "openVariations",
          value: function openVariations(index) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this9 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalCtrl.create({
                        component: _variations_variations_page__WEBPACK_IMPORTED_MODULE_3__["VariationsPage"],
                        cssClass: 'custom_modal2',
                        componentProps: {
                          name: this.name,
                          food: this.foods[index]
                        }
                      });

                    case 2:
                      modal = _context3.sent;
                      modal.onDidDismiss().then(function (data) {
                        console.log('from variations', data.data);
                        console.log('data.data', data.role);
                        var isValid = false;

                        if (data.role === 'new') {
                          _this9.foods[index].quantiy = 1;
                          var carts = {
                            item: data.data,
                            total: 1
                          };

                          _this9.foods[index].selectedItem.push(carts);

                          isValid = true;
                        } else if (data.role === 'sameChoice') {
                          _this9.foods[index].selectedItem = data.data;
                          _this9.foods[index].quantiy = _this9.foods[index].selectedItem.length;
                          isValid = true;
                        } else if (data.role === 'newCustom') {
                          var _carts = {
                            item: data.data,
                            total: 1
                          };

                          _this9.foods[index].selectedItem.push(_carts);

                          _this9.foods[index].quantiy = _this9.foods[index].quantiy + 1;
                          isValid = true;
                        } else if (data.role === 'remove') {
                          console.log('number', data.data);
                          _this9.foods[index].quantiy = 0;
                          _this9.foods[index].selectedItem = [];
                          isValid = true;
                        } else {
                          console.log('empy');
                        }

                        if (isValid) {
                          console.log('isValid', isValid);

                          _this9.calculate();
                        }
                      });
                      _context3.next = 6;
                      return modal.present();

                    case 6:
                      return _context3.abrupt("return", _context3.sent);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "addQ",
          value: function addQ(index) {
            console.log('foooduieeeee===========>>', this.foods[index]);

            if (this.foods[index].variations && this.foods[index].variations.length) {
              this.openVariations(index);
            } else {
              this.foods[index].quantiy = this.foods[index].quantiy + 1;
              this.calculate();
            }
          }
        }, {
          key: "removeQ",
          value: function removeQ(index) {
            if (this.foods[index].quantiy !== 0) {
              if (this.foods[index].quantiy >= 1 && !this.foods[index].size) {
                this.foods[index].quantiy = this.foods[index].quantiy - 1;
              } else {
                this.openVariations(index);
              }
            } else {
              this.foods[index].quantiy = 0;
            }

            this.calculate();
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this10 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        header: this.util.translate('Warning'),
                        message: this.util.translate("you already have item's in cart with different restaurant"),
                        buttons: [{
                          text: this.util.translate('Cancel'),
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: this.util.translate('Clear cart'),
                          handler: function handler() {
                            console.log('Confirm Okay');
                            localStorage.removeItem('vid');
                            _this10.dummy = Array(10);
                            localStorage.removeItem('categories');
                            localStorage.removeItem('dummyItem');
                            localStorage.removeItem('foods');
                            _this10.totalItem = 0;
                            _this10.totalPrice = 0;

                            _this10.getCates();

                            _this10.getFoods();
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "viewCart",
          value: function viewCart() {
            console.log('viewCart');
            this.setData();
            this.navCtrl.navigateRoot(['tabs/tab3']);
          }
        }, {
          key: "presentPopover",
          value: function presentPopover(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this11 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!(this.categories.length <= 0)) {
                        _context5.next = 2;
                        break;
                      }

                      return _context5.abrupt("return", false);

                    case 2:
                      _context5.next = 4;
                      return this.popoverController.create({
                        component: src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
                        event: ev,
                        componentProps: {
                          data: this.categories
                        },
                        mode: 'ios'
                      });

                    case 4:
                      popover = _context5.sent;
                      popover.onDidDismiss().then(function (data) {
                        console.log(data.data);

                        if (data && data.data) {
                          var yOffset = document.getElementById(data.data.id).offsetTop;
                          var yHOffset = document.getElementById(data.data.id).offsetHeight;
                          console.log(yOffset + ' : ' + yHOffset);

                          _this11.content.scrollToPoint(0, yOffset, 1000);
                        }
                      });
                      _context5.next = 8;
                      return popover.present();

                    case 8:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "openDetails",
          value: function openDetails() {
            var navData = {
              queryParams: {
                id: this.id
              }
            };
            this.router.navigate(['rest-details'], navData);
          }
        }, {
          key: "getCurrency",
          value: function getCurrency() {
            return this.util.getCurrecySymbol();
          }
        }]);

        return CategoryPage;
      }();

      CategoryPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_7__["ApisService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }];
      };

      CategoryPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['content']
        }]
      };
      CategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-category',
        template: _raw_loader_category_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_7__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])], CategoryPage);
      /***/
    },

    /***/
    "GxF5":
    /*!***********************************************************!*\
      !*** ./src/app/pages/category/category-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: CategoryPageRoutingModule */

    /***/
    function GxF5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryPageRoutingModule", function () {
        return CategoryPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./category.page */
      "FTWP");

      var routes = [{
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_3__["CategoryPage"]
      }];

      var CategoryPageRoutingModule = function CategoryPageRoutingModule() {
        _classCallCheck(this, CategoryPageRoutingModule);
      };

      CategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CategoryPageRoutingModule);
      /***/
    },

    /***/
    "cJis":
    /*!***************************************************!*\
      !*** ./src/app/pages/category/category.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function cJis(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-fab-button {\n  --border-radius:10px;\n  --padding:10px;\n  width: 80px;\n}\n\nion-label {\n  display: block;\n}\n\nion-toolbar {\n  padding: 0px 10px;\n  font-weight: bold;\n}\n\nion-toolbar ion-button {\n  font-weight: bold;\n}\n\n.mainContent .restContent {\n  width: 100%;\n  height: 200px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.mainContent .restContent .btnss {\n  background-image: linear-gradient(-230deg, #17181a63, #827777) !important;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  padding: 10px;\n  height: 150px;\n}\n\n.mainContent .restContent .btnss .backIcon {\n  font-size: 2rem;\n}\n\n.mainContent .restContent .btnss .moreInfo {\n  color: white;\n  font-weight: bold;\n}\n\n.mainContent .foodsContent {\n  position: absolute;\n  background: white;\n  height: 100%;\n  top: 100px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  width: 100%;\n  padding: 10px;\n}\n\n.mainContent .foodsContent .restname {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: black;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .cusine {\n  font-size: 1rem;\n  color: lightgray;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .ratting {\n  font-size: 1rem;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .deliveryAddress {\n  display: flex;\n  padding: 20px 10px 0px 10px;\n}\n\n.mainContent .foodsContent .deliveryAddress .pin {\n  width: 25px;\n  height: 25px;\n}\n\n.mainContent .foodsContent .deliveryAddress .address {\n  font-size: 1rem;\n  margin: 0px;\n}\n\n.mainContent .foodsContent .vegSection {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n\n.mainContent .foodsContent .cateTitle {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: black;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .card_div .card {\n  display: flex;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat {\n  width: 100%;\n  flex-direction: row;\n  padding: 5px 10px;\n  display: flex;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 80px !important;\n  height: 80px !important;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div {\n  margin-left: 20px;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div .heading_lbl {\n  font-size: 14px;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div .ratting {\n  font-size: 10px;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div .small_lbl {\n  font-size: 8px;\n  color: lightgray;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn {\n  position: absolute;\n  right: 15px;\n  width: 60px;\n  background: white;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn .btns {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 10px;\n  padding: 2px;\n  font-size: 12px;\n  text-align: center;\n  color: var(--ion-color-primary);\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn2 {\n  position: absolute;\n  right: 15px;\n  width: 80px;\n  display: flex;\n  background: white;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn2 .qunitity {\n  font-weight: bold;\n  margin-top: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQWlCO0VBQ2pCLGNBQVU7RUFDVixXQUFXO0FBQ2Y7O0FBQ0E7RUFDSSxjQUFjO0FBRWxCOztBQUFBO0VBQ0csaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUdwQjs7QUFMQTtFQUlPLGlCQUFpQjtBQUt4Qjs7QUFGQTtFQUdRLFdBQVc7RUFDWCxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFHOUI7O0FBVkE7RUFTWSx5RUFBeUU7RUFDekUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7QUFLekI7O0FBdEJBO0VBc0JnQixlQUFlO0FBSS9COztBQTFCQTtFQTRCZ0IsWUFBWTtFQUNaLGlCQUFpQjtBQUVqQzs7QUEvQkE7RUFtQ1Esa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBRVosVUFBVTtFQUNWLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGFBQWE7QUFEckI7O0FBMUNBO0VBNkNZLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtBQUM5Qjs7QUFqREE7RUFtRFksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFFOUI7O0FBdkRBO0VBd0RZLGVBQWU7RUFDZixrQkFBa0I7QUFHOUI7O0FBNURBO0VBNERZLGFBQWE7RUFDYiwyQkFBMkI7QUFJdkM7O0FBakVBO0VBK0RnQixXQUFXO0VBQ1gsWUFBWTtBQU01Qjs7QUF0RUE7RUFtRWdCLGVBQWU7RUFDZixXQUFXO0FBTzNCOztBQTNFQTtFQXdFWSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7QUFPekI7O0FBakZBO0VBNkVZLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtBQVE5Qjs7QUF4RkE7RUFvRmdCLGFBQWE7QUFRN0I7O0FBNUZBO0VBc0ZvQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlCQUFnQjtFQUNoQixhQUFhO0FBVWpDOztBQW5HQTtFQTJGd0IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFZL0M7O0FBNUdBO0VBbUd3QixpQkFBaUI7QUFhekM7O0FBaEhBO0VBc0c0QixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQWM1Qzs7QUF0SEE7RUE0RzRCLGVBQWU7QUFjM0M7O0FBMUhBO0VBK0c0QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7QUFlNUM7O0FBaklBO0VBdUh3QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7QUFjekM7O0FBeElBO0VBNEg0QiwwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLCtCQUErQjtBQWdCM0Q7O0FBakpBO0VBcUl3QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0FBZ0J6Qzs7QUF6SkE7RUEySTRCLGlCQUFpQjtFQUNqQixlQUFlO0FBa0IzQyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mYWItYnV0dG9ue1xuICAgIC0tYm9yZGVyLXJhZGl1c1x0OjEwcHg7XG4gICAgLS1wYWRkaW5nOjEwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG59XG5pb24tbGFiZWx7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5pb24tdG9vbGJhciB7XG4gICBwYWRkaW5nOiAwcHggMTBweDtcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICB9XG59XG4ubWFpbkNvbnRlbnR7XG4gICAgXG4gICAgLnJlc3RDb250ZW50e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAuYnRuc3N7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTIzMGRlZywgIzE3MTgxYTYzLCAjODI3Nzc3KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIC5iYWNrSWNvbntcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgLy8gbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAvLyB0b3A6IDQwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vcmVJbmZve1xuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAvLyByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAvLyB0b3A6IDQwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICAuZm9vZHNDb250ZW50e1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC8vIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgLnJlc3RuYW1le1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuY3VzaW5le1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAucmF0dGluZ3tcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZGVsaXZlcnlBZGRyZXNze1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTBweCAwcHggMTBweDtcbiAgICAgICAgICAgIC5waW57XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFkZHJlc3N7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICAudmVnU2VjdGlvbntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9IFxuICAgICAgICAuY2F0ZVRpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZF9kaXZ7XG4gICAgICAgICAgICAuY2FyZHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIC5tYWluQ2F0e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo1cHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgLmltYWdlX2RpdntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZGVzY19kaXZ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkaW5nX2xibHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAucmF0dGluZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jYXJ0QnRue1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLmJ0bnN7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2FydEJ0bjJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLnF1bml0aXR5e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbiJdfQ== */";
      /***/
    },

    /***/
    "iCz4":
    /*!***************************************************!*\
      !*** ./src/app/pages/category/category.module.ts ***!
      \***************************************************/

    /*! exports provided: CategoryPageModule */

    /***/
    function iCz4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function () {
        return CategoryPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./category-routing.module */
      "GxF5");
      /* harmony import */


      var _category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./category.page */
      "FTWP");
      /* harmony import */


      var src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/menu/menu.component */
      "0oYm");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/components/components.module */
      "j1ZV");
      /* harmony import */


      var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/directives/shared.module */
      "dVnR");

      var CategoryPageModule = function CategoryPageModule() {
        _classCallCheck(this, CategoryPageModule);
      };

      CategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _category_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]],
        declarations: [_category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]]
      })], CategoryPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-category-category-module-es5.js.map