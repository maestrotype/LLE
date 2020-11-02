(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\admin\Downloads\codecanyon-SxgIRxMq-ionic-5-food-delivery-full-android-ios-admin-panel-pwa-app-with-firebase\ionic5FoodAppFull\App_code\UserApp\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0oYm":
    /*!***************************************************!*\
      !*** ./src/app/components/menu/menu.component.ts ***!
      \***************************************************/

    /*! exports provided: MenuComponent */

    /***/
    function oYm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
        return MenuComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./menu.component.html */
      "AabN");
      /* harmony import */


      var _menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./menu.component.scss */
      "nfPh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var MenuComponent = /*#__PURE__*/function () {
        function MenuComponent(navParam, popoverController) {
          _classCallCheck(this, MenuComponent);

          this.navParam = navParam;
          this.popoverController = popoverController;
          this.cates = this.navParam.get('data');
        }

        _createClass(MenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "selected",
          value: function selected(item) {
            this.popoverController.dismiss(item, 'selected');
          }
        }]);

        return MenuComponent;
      }();

      MenuComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }];
      };

      MenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu',
        template: _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]])], MenuComponent);
      /***/
    },

    /***/
    "2Rin":
    /*!******************************************!*\
      !*** ./src/app/services/util.service.ts ***!
      \******************************************/

    /*! exports provided: UtilService */

    /***/
    function Rin(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilService", function () {
        return UtilService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var UtilService = /*#__PURE__*/function () {
        function UtilService(loadingCtrl, alertCtrl, toastCtrl, router, navCtrl, translateService) {
          _classCallCheck(this, UtilService);

          this.loadingCtrl = loadingCtrl;
          this.alertCtrl = alertCtrl;
          this.toastCtrl = toastCtrl;
          this.router = router;
          this.navCtrl = navCtrl;
          this.translateService = translateService;
          this.isLoading = false;
          this.address = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.coupon = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.review = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.changeLocation = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.profile = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        }
        /*
        Start Loader
        Call this method to Start your Loader
        */


        _createClass(UtilService, [{
          key: "publishAddress",
          value: function publishAddress(data) {
            this.address.next(data);
          }
        }, {
          key: "publishReview",
          value: function publishReview(data) {
            this.review.next(data);
          }
        }, {
          key: "publishProfile",
          value: function publishProfile(data) {
            this.profile.next(data);
          }
        }, {
          key: "observProfile",
          value: function observProfile() {
            return this.profile;
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return this.translateService.currentLang;
          }
        }, {
          key: "getReviewObservable",
          value: function getReviewObservable() {
            return this.review;
          }
        }, {
          key: "publishLocation",
          value: function publishLocation(data) {
            this.changeLocation.next(data);
          }
        }, {
          key: "subscribeLocation",
          value: function subscribeLocation() {
            return this.changeLocation;
          }
        }, {
          key: "publishLoggedIn",
          value: function publishLoggedIn(data) {
            this.loggedIn.next(data);
          }
        }, {
          key: "subscribeLoggedIn",
          value: function subscribeLoggedIn() {
            return this.loggedIn;
          }
        }, {
          key: "translate",
          value: function translate(str) {
            var currentLang = this.translateService.currentLang;
            var returnValue = this.translateService.translations[currentLang][str];

            if (returnValue === undefined) {
              return this.translateService.translations.en_merch[str];
            } else {
              return returnValue;
            }
          }
        }, {
          key: "translateInEN",
          value: function translateInEN(str) {
            var currentLang = 'en';
            var returnValue = this.translateService.translations[currentLang][str];

            if (returnValue === undefined) {
              return this.translateService.translations.en_merch[str];
            } else {
              return returnValue;
            }
          }
        }, {
          key: "getCurrencyCode",
          value: function getCurrencyCode() {
            return src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].general.code;
          }
        }, {
          key: "getCurrecySymbol",
          value: function getCurrecySymbol() {
            return src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].general.symbol;
          }
        }, {
          key: "getObservable",
          value: function getObservable() {
            return this.address;
          }
        }, {
          key: "publishCoupon",
          value: function publishCoupon(data) {
            this.coupon.next(data);
          }
        }, {
          key: "getCouponObservable",
          value: function getCouponObservable() {
            return this.coupon;
          }
        }, {
          key: "setOrders",
          value: function setOrders(data) {
            this.orders = null;
            this.orders = data;
          }
        }, {
          key: "gerOrder",
          value: function gerOrder() {
            return this.orders;
          }
        }, {
          key: "show",
          value: function show(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.isLoading = true;
                      _context.next = 3;
                      return this.loadingCtrl.create({
                        message: msg,
                        spinner: 'bubbles'
                      }).then(function (a) {
                        a.present().then(function () {
                          //console.log('presented');
                          if (!_this.isLoading) {
                            a.dismiss().then(function () {
                              return console.log('abort presenting');
                            });
                          }
                        });
                      });

                    case 3:
                      return _context.abrupt("return", _context.sent);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "hide",
          value: function hide() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.isLoading = false;
                      _context2.next = 3;
                      return this.loadingCtrl.dismiss().then(function () {
                        return console.log('dismissed');
                      });

                    case 3:
                      return _context2.abrupt("return", _context2.sent);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
          /*
            Show Warning Alert Message
            param : msg = message to display
            Call this method to show Warning Alert,
            */

        }, {
          key: "showWarningAlert",
          value: function showWarningAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertCtrl.create({
                        header: 'Warning',
                        message: msg,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "showSimpleAlert",
          value: function showSimpleAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertCtrl.create({
                        header: '',
                        message: msg,
                        buttons: ['OK']
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
          /*
           Show Error Alert Message
           param : msg = message to display
           Call this method to show Error Alert,
           */

        }, {
          key: "showErrorAlert",
          value: function showErrorAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertCtrl.create({
                        header: 'Error',
                        message: msg,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
          /*
             param : email = email to verify
             Call this method to get verify email
             */

        }, {
          key: "getEmailFilter",
          value: function getEmailFilter(email) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var emailfilter, alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

                      if (emailfilter.test(email)) {
                        _context6.next = 10;
                        break;
                      }

                      _context6.next = 4;
                      return this.alertCtrl.create({
                        header: 'Warning',
                        message: 'Please enter valid email',
                        buttons: ['OK']
                      });

                    case 4:
                      alert = _context6.sent;
                      _context6.next = 7;
                      return alert.present();

                    case 7:
                      return _context6.abrupt("return", false);

                    case 10:
                      return _context6.abrupt("return", true);

                    case 11:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
          /*
            Show Toast Message on Screen
             param : msg = message to display, color= background
             color of toast example dark,danger,light. position  = position of message example top,bottom
             Call this method to show toast message
             */

        }, {
          key: "showToast",
          value: function showToast(msg, colors, positon) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var toast;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.toastCtrl.create({
                        message: msg,
                        duration: 2000,
                        color: colors,
                        position: positon
                      });

                    case 2:
                      toast = _context7.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "shoNotification",
          value: function shoNotification(msg, colors, positon) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var toast;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.toastCtrl.create({
                        message: msg,
                        duration: 4000,
                        color: colors,
                        position: positon,
                        buttons: [{
                          text: 'Ok',
                          role: 'cancel',
                          handler: function handler() {// console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      toast = _context8.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "errorToast",
          value: function errorToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var toast;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.toastCtrl.create({
                        message: msg,
                        duration: 2000
                      });

                    case 2:
                      toast = _context9.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "apiErrorHandler",
          value: function apiErrorHandler(err) {
            // console.log('Error got in service =>', err)
            if (err.status === -1) {
              this.showErrorAlert('Failed To Connect With Server');
            } else if (err.status === 401) {
              this.showErrorAlert('Unauthorized Request!');
              this.navCtrl.navigateRoot('/login');
            } else if (err.status === 500) {
              this.showErrorAlert('Somethimg Went Wrong..');
            }
          } // setDetails(data) {
          //   this.details = null;
          //   this.details = data;
          // }
          // getDetails() {
          //   return this.details;
          // }

        }, {
          key: "makeid",
          value: function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;

            for (var i = 0; i < length; i++) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            return result;
          }
        }]);

        return UtilService;
      }();

      UtilService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      };

      UtilService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])], UtilService);
      /***/
    },

    /***/
    "4Mq/":
    /*!***************************************************************!*\
      !*** ./src/app/pages/select-drivers/select-drivers.module.ts ***!
      \***************************************************************/

    /*! exports provided: SelectDriversPageModule */

    /***/
    function Mq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectDriversPageModule", function () {
        return SelectDriversPageModule;
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


      var _select_drivers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./select-drivers-routing.module */
      "gKjt");
      /* harmony import */


      var _select_drivers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./select-drivers.page */
      "ERed");

      var SelectDriversPageModule = function SelectDriversPageModule() {
        _classCallCheck(this, SelectDriversPageModule);
      };

      SelectDriversPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _select_drivers_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectDriversPageRoutingModule"]],
        declarations: [_select_drivers_page__WEBPACK_IMPORTED_MODULE_6__["SelectDriversPage"]]
      })], SelectDriversPageModule);
      /***/
    },

    /***/
    "8RPc":
    /*!******************************************!*\
      !*** ./src/app/services/apis.service.ts ***!
      \******************************************/

    /*! exports provided: AuthInfo, ApisService */

    /***/
    function RPc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInfo", function () {
        return AuthInfo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApisService", function () {
        return ApisService;
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


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "KDZV");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "mrps");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ApisService_1;

      var AuthInfo = /*#__PURE__*/function () {
        function AuthInfo($uid) {
          _classCallCheck(this, AuthInfo);

          this.$uid = $uid;
        }

        _createClass(AuthInfo, [{
          key: "isLoggedIn",
          value: function isLoggedIn() {
            return !!this.$uid;
          }
        }]);

        return AuthInfo;
      }();

      var ApisService = ApisService_1 = /*#__PURE__*/function () {
        function ApisService(fireAuth, adb, http) {
          _classCallCheck(this, ApisService);

          this.fireAuth = fireAuth;
          this.adb = adb;
          this.http = http;
          this.db = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]();
          this.authInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](ApisService_1.UNKNOWN_USER);
        }

        _createClass(ApisService, [{
          key: "checkAuth",
          value: function checkAuth() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              _this2.fireAuth.auth.onAuthStateChanged(function (user) {
                console.log(user);

                if (user) {
                  localStorage.setItem('uid', user.uid);
                  resolve(user);
                } else {
                  _this2.logout();

                  var lng = localStorage.getItem('language');
                  var selectedCity = localStorage.getItem('selectedCity');
                  localStorage.clear();
                  localStorage.setItem('language', lng);
                  localStorage.setItem('selectedCity', selectedCity);
                  resolve(false);
                }
              });
            });
          }
        }, {
          key: "login",
          value: function login(email, password) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              _this3.fireAuth.auth.signInWithEmailAndPassword(email, password).then(function (res) {
                if (res.user) {
                  _this3.db.collection('users').doc(res.user.uid).update({
                    fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
                  });

                  _this3.authInfo$.next(new AuthInfo(res.user.uid));

                  resolve(res.user);
                }
              })["catch"](function (err) {
                _this3.authInfo$.next(ApisService_1.UNKNOWN_USER);

                reject("login failed ".concat(err));
              });
            });
          }
        }, {
          key: "getCities",
          value: function getCities() {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              _this4.adb.collection('cities').get().subscribe(function (venue) {
                var data = venue.docs.map(function (element) {
                  var item = element.data();
                  item.id = element.id;
                  return item;
                });
                resolve(data);
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "register",
          value: function register(email, password, fullname) {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              _this5.fireAuth.auth.createUserWithEmailAndPassword(email, password).then(function (res) {
                if (res.user) {
                  _this5.db.collection('users').doc(res.user.uid).set({
                    uid: res.user.uid,
                    email: email,
                    fullname: fullname,
                    type: 'user',
                    status: 'active',
                    fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
                  });

                  _this5.authInfo$.next(new AuthInfo(res.user.uid));

                  resolve(res.user);
                }
              })["catch"](function (err) {
                _this5.authInfo$.next(ApisService_1.UNKNOWN_USER);

                reject("login failed ".concat(err));
              });
            });
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(email) {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
              _this6.fireAuth.auth.sendPasswordResetEmail(email).then(function (res) {
                resolve(res);
              })["catch"](function (err) {
                reject("reset failed ".concat(err));
              });
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authInfo$.next(ApisService_1.UNKNOWN_USER); // this.db.collection('users').doc(localStorage.getItem('uid')).update({ "fcm_token": firebase.firestore.FieldValue.delete() })

            return this.fireAuth.auth.signOut();
          }
        }, {
          key: "getProfile",
          value: function getProfile(id) {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              _this7.adb.collection('users').doc(id).get().subscribe(function (profile) {
                resolve(profile.data());
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "getVenues",
          value: function getVenues() {
            var _this8 = this;

            return new Promise(function (resolve, reject) {
              _this8.adb.collection('venue').get().subscribe(function (venue) {
                var data = venue.docs.map(function (element) {
                  var item = element.data();
                  item.id = element.id;
                  return item;
                });
                resolve(data);
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "getVenueDetails",
          value: function getVenueDetails(id) {
            var _this9 = this;

            return new Promise(function (resolve, reject) {
              _this9.adb.collection('venue').doc(id).get().subscribe(function (venue) {
                resolve(venue.data());
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "getMyProfile",
          value: function getMyProfile(id) {
            var _this10 = this;

            return new Promise(function (resolve, reject) {
              _this10.adb.collection('users').doc(id).get().subscribe(function (users) {
                resolve(users.data());
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "getVenueUser",
          value: function getVenueUser(id) {
            var _this11 = this;

            return new Promise(function (resolve, reject) {
              _this11.adb.collection('users').doc(id).get().subscribe(function (venue) {
                resolve(venue.data());
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "getVenueCategories",
          value: function getVenueCategories(id) {
            var _this12 = this;

            return new Promise(function (resolve, reject) {
              _this12.adb.collection('categories', function (ref) {
                return ref.where('uid', '==', id);
              }).get().subscribe(function (venue) {
                var data = venue.docs.map(function (element) {
                  var item = element.data();
                  item.id = element.id;
                  return item;
                });
                resolve(data);
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "getFoods",
          value: function getFoods(uid) {
            var _this13 = this;

            return new Promise(function (resolve, reject) {
              _this13.db.collection('foods').doc(uid).collection('all').get().then(function (data) {
                var users = data.docs.map(function (doc) {
                  var item = doc.data();
                  item.cid.get().then(function (doc) {
                    item.cid = doc.data();
                    item.cid.id = doc.id;
                  });
                  item.id = doc.id;
                  return item;
                });
                resolve(users);
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "getMessages",
          value: function getMessages(id) {
            var _this14 = this;

            return new Promise(function (resolve, reject) {
              _this14.adb.collection('messages').doc(id).collection('chats').get().subscribe(function (messages) {
                console.log(messages);
                var data = messages.docs.map(function (element) {
                  var item = element.data();
                  item.id = element.id;
                  return item;
                });
                resolve(data);
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "getOffers",
          value: function getOffers() {
            var _this15 = this;

            return new Promise(function (resolve, reject) {
              _this15.adb.collection('offers').get().subscribe(function (venue) {
                // resolve(venue.data());
                var data = venue.docs.map(function (element) {
                  var item = element.data();
                  item.id = element.id;
                  return item;
                });
                resolve(data);
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "addNewAddress",
          value: function addNewAddress(uid, id, param) {
            var _this16 = this;

            return new Promise(function (resolve, reject) {
              _this16.adb.collection('address').doc(uid).collection('all').doc(id).set(param).then(function (data) {
                resolve(data);
              }, function (error) {
                reject(error);
              })["catch"](function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "updateAddress",
          value: function updateAddress(uid, id, param) {
            var _this17 = this;

            return new Promise(function (resolve, reject) {
              _this17.adb.collection('address').doc(uid).collection('all').doc(id).update(param).then(function (data) {
                resolve(data);
              }, function (error) {
                reject(error);
              })["catch"](function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "deleteAddress",
          value: function deleteAddress(uid, id) {
            var _this18 = this;

            return new Promise(function (resolve, reject) {
              _this18.adb.collection('address').doc(uid).collection('all').doc(id)["delete"]().then(function (data) {
                resolve(data);
              }, function (error) {
                reject(error);
              })["catch"](function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "getMyAddress",
          value: function getMyAddress(uid) {
            var _this19 = this;

            return new Promise(function (resolve, reject) {
              _this19.db.collection('address').doc(uid).collection('all').get().then(function (data) {
                var users = data.docs.map(function (doc) {
                  var item = doc.data();
                  item.id = doc.id;
                  return item;
                });
                resolve(users);
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "createOrder",
          value: function createOrder(id, param) {
            var _this20 = this;

            param.vid = this.db.collection('venue').doc(param.vid);
            param.uid = this.db.collection('users').doc(param.uid); // param.dId = this.db.collection('users').doc(param.dId);

            return new Promise(function (resolve, reject) {
              _this20.adb.collection('orders').doc(id).set(param).then(function (data) {
                resolve(data);
              }, function (error) {
                reject(error);
              })["catch"](function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "sendNotification",
          value: function sendNotification(msg, title, id) {
            var body = {
              app_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].onesignal.appId,
              include_player_ids: [id],
              headings: {
                en: title
              },
              contents: {
                en: msg
              },
              data: {
                task: msg
              }
            };
            var header = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', "Basic ".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].onesignal.restKey))
            };
            return this.http.post('https://onesignal.com/api/v1/notifications', body, header);
          }
        }, {
          key: "getMyOrders",
          value: function getMyOrders(id) {
            var _this21 = this;

            return new Promise(function (resolve, reject) {
              _this21.adb.collection('orders', function (ref) {
                return ref.where('userId', '==', id);
              }).get().subscribe(function (venue) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this21, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                  var data;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          data = venue.docs.map(function (element) {
                            var item = element.data();
                            item.vid.get().then(function (doc) {
                              item.vid = doc.data();
                              item.vid.id = doc.id;
                            });
                            item.id = element.id;
                            return item;
                          });
                          resolve(data);

                        case 2:
                        case "end":
                          return _context10.stop();
                      }
                    }
                  }, _callee10);
                }));
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "getOrderById",
          value: function getOrderById(id) {
            var _this22 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this22, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                var _this23 = this;

                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        this.adb.collection('orders').doc(id).get().subscribe(function (order) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this23, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                            var data;
                            return regeneratorRuntime.wrap(function _callee11$(_context11) {
                              while (1) {
                                switch (_context11.prev = _context11.next) {
                                  case 0:
                                    _context11.next = 2;
                                    return order.data();

                                  case 2:
                                    data = _context11.sent;
                                    _context11.next = 5;
                                    return data.vid.get().then(function (doc) {
                                      data.vid = doc.data();
                                      data.vid.id = doc.id;
                                    });

                                  case 5:
                                    if (!(data && data.dId)) {
                                      _context11.next = 8;
                                      break;
                                    }

                                    _context11.next = 8;
                                    return data.dId.get().then(function (doc) {
                                      data.dId = doc.id;
                                      data.dId = doc.data();
                                    });

                                  case 8:
                                    resolve(data);

                                  case 9:
                                  case "end":
                                    return _context11.stop();
                                }
                              }
                            }, _callee11);
                          }));
                        }, function (error) {
                          reject(error);
                        });

                      case 1:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, this);
              }));
            });
          }
        }, {
          key: "getDriverInfo",
          value: function getDriverInfo(id) {
            var _this24 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this24, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        this.adb.collection('users').doc(id).snapshotChanges().subscribe(function (data) {
                          console.log(data);
                          resolve(data.payload.data());
                        }, function (error) {
                          reject(error);
                        });

                      case 1:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13, this);
              }));
            });
          }
        }, {
          key: "updateOrderStatus",
          value: function updateOrderStatus(id, value) {
            var _this25 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this25, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                var _this26 = this;

                return regeneratorRuntime.wrap(function _callee15$(_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        this.adb.collection('orders').doc(id).update({
                          status: value
                        }).then(function (order) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this26, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                            return regeneratorRuntime.wrap(function _callee14$(_context14) {
                              while (1) {
                                switch (_context14.prev = _context14.next) {
                                  case 0:
                                    resolve(order);

                                  case 1:
                                  case "end":
                                    return _context14.stop();
                                }
                              }
                            }, _callee14);
                          }));
                        })["catch"](function (error) {
                          reject(error);
                        });

                      case 1:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee15, this);
              }));
            });
          }
        }, {
          key: "getDrivers",
          value: function getDrivers() {
            var _this27 = this;

            return new Promise(function (resolve, reject) {
              _this27.adb.collection('users', function (ref) {
                return ref.where('type', '==', 'delivery');
              }).get().subscribe(function (venue) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this27, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
                  var data;
                  return regeneratorRuntime.wrap(function _callee16$(_context16) {
                    while (1) {
                      switch (_context16.prev = _context16.next) {
                        case 0:
                          data = venue.docs.map(function (element) {
                            var item = element.data();
                            item.id = element.id;
                            return item;
                          });
                          resolve(data);

                        case 2:
                        case "end":
                          return _context16.stop();
                      }
                    }
                  }, _callee16);
                }));
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "sendOrderToDriver",
          value: function sendOrderToDriver(id, param) {
            var _this28 = this;

            return new Promise(function (resolve, reject) {
              _this28.adb.collection('driverOrders').doc(id).set(param).then(function (data) {
                resolve(data);
              }, function (error) {
                reject(error);
              })["catch"](function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "addReview",
          value: function addReview(param) {
            var _this29 = this;

            param.vid = this.db.collection('venue').doc(param.vid);
            param.uid = this.db.collection('users').doc(param.uid);
            return new Promise(function (resolve, reject) {
              _this29.adb.collection('reviews').doc(Math.random().toString()).set(param).then(function (data) {
                resolve(data);
              })["catch"](function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "addDriverReview",
          value: function addDriverReview(param) {
            var _this30 = this;

            param.uid = this.db.collection('users').doc(param.uid);
            return new Promise(function (resolve, reject) {
              _this30.adb.collection('driverreviews').doc(Math.random().toString()).set(param).then(function (data) {
                resolve(data);
              })["catch"](function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "updateVenue",
          value: function updateVenue(informations) {
            var _this31 = this;

            return new Promise(function (resolve, reject) {
              _this31.adb.collection('venue').doc(informations.uid).update(informations).then(function (data) {
                resolve(data);
              }, function (error) {
                reject(error);
              })["catch"](function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "updateProfile",
          value: function updateProfile(uid, param) {
            var _this32 = this;

            return new Promise(function (resolve, reject) {
              _this32.db.collection('users').doc(uid).update(param).then(function (data) {
                resolve(data);
              })["catch"](function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "getMyReviews",
          value: function getMyReviews(id) {
            var _this33 = this;

            return new Promise(function (resolve, reject) {
              _this33.adb.collection('reviews', function (ref) {
                return ref.where('id', '==', id);
              }).get().subscribe(function (review) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this33, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
                  var data;
                  return regeneratorRuntime.wrap(function _callee17$(_context17) {
                    while (1) {
                      switch (_context17.prev = _context17.next) {
                        case 0:
                          data = review.docs.map(function (element) {
                            var item = element.data();
                            item.id = element.id;

                            if (item && item.vid) {
                              item.vid.get().then(function (doc) {
                                item.vid = doc.data();
                              });
                            }

                            return item;
                          });
                          resolve(data);

                        case 2:
                        case "end":
                          return _context17.stop();
                      }
                    }
                  }, _callee17);
                }));
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "getBanners",
          value: function getBanners() {
            var _this34 = this;

            return new Promise(function (resolve, reject) {
              _this34.adb.collection('banners').get().subscribe(function (venue) {
                // resolve(venue.data());
                var data = venue.docs.map(function (element) {
                  var item = element.data();
                  item.id = element.id;
                  return item;
                });
                resolve(data);
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "httpPost",
          value: function httpPost(url, body) {
            var header = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', "Bearer ".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].stripe.sk))
            };
            var order = this.JSON_to_URLEncoded(body);
            console.log(order);
            return this.http.post(url, order, header);
          }
        }, {
          key: "httpGet",
          value: function httpGet(url) {
            var header = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', "Bearer ".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].stripe.sk))
            };
            return this.http.get(url, header);
          }
        }, {
          key: "JSON_to_URLEncoded",
          value: function JSON_to_URLEncoded(element, key, list) {
            var new_list = list || [];

            if (typeof element == "object") {
              for (var idx in element) {
                this.JSON_to_URLEncoded(element[idx], key ? key + "[" + idx + "]" : idx, new_list);
              }
            } else {
              new_list.push(key + "=" + encodeURIComponent(element));
            }

            return new_list.join("&");
          }
        }]);

        return ApisService;
      }();

      ApisService.UNKNOWN_USER = new AuthInfo(null);

      ApisService.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }];
      };

      ApisService = ApisService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])], ApisService);
      /***/
    },

    /***/
    "AabN":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function AabN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item *ngFor=\"let item of cates\" lines=\"none\" (click)=\"selected(item)\">\n  <ion-label>{{item.name}}</ion-label>\n</ion-item>";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebase: {
          apiKey: "AIzaSyDABrGTVfO__ziK7q2lvdRZsnQjg12fEI0",
          authDomain: "foodies5-f410c.firebaseapp.com",
          databaseURL: "https://foodies5-f410c.firebaseio.com",
          projectId: "foodies5-f410c",
          storageBucket: "foodies5-f410c.appspot.com",
          messagingSenderId: "485660849587",
          appId: "1:485660849587:web:cd04bf5e095b204d9787c6",
          measurementId: "G-93Y1PVY6EJ"
        },
        onesignal: {
          appId: '66d12f8e-5533-4f21-a2e4-e6501bc1b1d1',
          googleProjectNumber: '485660849587',
          restKey: 'ODgxNGVlMTYtY2I0Yi00NWFmLWE5MzktYjIxZDRkYzRhYzEz'
        },
        stripe: {
          sk: '12345'
        },
        paypal: {
          sandbox: '',
          production: 'YOUR_PRODUCTION_CLIENT_ID'
        },
        general: {
          symbol: '$',
          code: 'USD'
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Bxw0":
    /*!***************************************************************!*\
      !*** ./src/app/pages/choose-address/choose-address.module.ts ***!
      \***************************************************************/

    /*! exports provided: ChooseAddressPageModule */

    /***/
    function Bxw0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseAddressPageModule", function () {
        return ChooseAddressPageModule;
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


      var _choose_address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./choose-address-routing.module */
      "Un4R");
      /* harmony import */


      var _choose_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./choose-address.page */
      "DiWI");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "j1ZV");
      /* harmony import */


      var src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/components/popover/popover.component */
      "nm6V");
      /* harmony import */


      var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/directives/shared.module */
      "dVnR");

      var ChooseAddressPageModule = function ChooseAddressPageModule() {
        _classCallCheck(this, ChooseAddressPageModule);
      };

      ChooseAddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_8__["PopoverComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _choose_address_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChooseAddressPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]],
        declarations: [_choose_address_page__WEBPACK_IMPORTED_MODULE_6__["ChooseAddressPage"]]
      })], ChooseAddressPageModule);
      /***/
    },

    /***/
    "DiWI":
    /*!*************************************************************!*\
      !*** ./src/app/pages/choose-address/choose-address.page.ts ***!
      \*************************************************************/

    /*! exports provided: ChooseAddressPage */

    /***/
    function DiWI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseAddressPage", function () {
        return ChooseAddressPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_choose_address_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./choose-address.page.html */
      "pp8I");
      /* harmony import */


      var _choose_address_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./choose-address.page.scss */
      "lTsH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/components/popover/popover.component */
      "nm6V");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);

      var ChooseAddressPage = /*#__PURE__*/function () {
        function ChooseAddressPage(router, api, util, navCtrl, route, popoverController) {
          _classCallCheck(this, ChooseAddressPage);

          this.router = router;
          this.api = api;
          this.util = util;
          this.navCtrl = navCtrl;
          this.route = route;
          this.popoverController = popoverController;
          this.myaddress = [];
          this.dummy = Array(10);
        }

        _createClass(ChooseAddressPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this35 = this;

            this.route.queryParams.subscribe(function (data) {
              console.log(data);

              if (data && data.from) {
                _this35.from = data.from;
              }
            });
          }
        }, {
          key: "getAddress",
          value: function getAddress() {
            var _this36 = this;

            this.api.getMyAddress(this.id).then(function (data) {
              console.log('my address', data);
              _this36.dummy = [];

              if (data && data.length) {
                _this36.myaddress = data;
              }
            }, function (error) {
              console.log(error);
              _this36.dummy = [];
            })["catch"](function (error) {
              console.log(error);
              _this36.dummy = [];
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this37 = this;

            this.api.checkAuth().then(function (data) {
              console.log(data);

              if (data) {
                _this37.id = data.uid;

                _this37.getAddress();
              }
            });
          }
        }, {
          key: "addNew",
          value: function addNew() {
            this.router.navigate(['add-new-address']);
          }
        }, {
          key: "selectAddress",
          value: function selectAddress() {
            var _this38 = this;

            if (this.from === 'cart') {
              var selecte = this.myaddress.filter(function (x) {
                return x.id === _this38.selectedAddress;
              });
              var item = selecte[0];
              console.log('item', item);
              var address = {
                address: item.house + ' ' + item.landmark + ' ' + item.address,
                lat: item.lat,
                lng: item.lng,
                id: item.id
              };
              localStorage.setItem('deliveryAddress', JSON.stringify(address)); // this.util.showToast('Address changed', 'success', 'bottom');
              // this.navCtrl.back();

              this.router.navigate(['payments']);
            }
          }
        }, {
          key: "openMenu",
          value: function openMenu(item, events) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var _this39 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.popoverController.create({
                        component: src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_8__["PopoverComponent"],
                        event: events,
                        mode: 'ios'
                      });

                    case 2:
                      popover = _context18.sent;
                      popover.onDidDismiss().then(function (data) {
                        console.log(data.data);

                        if (data && data.data) {
                          if (data.data === 'edit') {
                            var navData = {
                              queryParams: {
                                from: 'edit',
                                data: JSON.stringify(item)
                              }
                            };

                            _this39.router.navigate(['add-new-address'], navData);
                          } else if (data.data === 'delete') {
                            console.log(item);
                            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                              title: _this39.util.translate('Are you sure?'),
                              text: _this39.util.translate('to delete this address'),
                              icon: 'question',
                              confirmButtonText: _this39.util.translate('Yes'),
                              backdrop: false,
                              background: 'white',
                              showCancelButton: true,
                              showConfirmButton: true,
                              cancelButtonText: _this39.util.translate('cancel')
                            }).then(function (data) {
                              console.log(data);

                              if (data && data.value) {
                                _this39.util.show();

                                _this39.api.deleteAddress(localStorage.getItem('uid'), item.id).then(function (data) {
                                  console.log(data);

                                  _this39.util.hide();

                                  _this39.getAddress();
                                })["catch"](function (error) {
                                  console.log(error);

                                  _this39.util.hide();
                                });
                              }
                            });
                          }
                        }
                      });
                      _context18.next = 6;
                      return popover.present();

                    case 6:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }]);

        return ChooseAddressPage;
      }();

      ChooseAddressPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]
        }];
      };

      ChooseAddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-choose-address',
        template: _raw_loader_choose_address_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_choose_address_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]])], ChooseAddressPage);
      /***/
    },

    /***/
    "ERed":
    /*!*************************************************************!*\
      !*** ./src/app/pages/select-drivers/select-drivers.page.ts ***!
      \*************************************************************/

    /*! exports provided: SelectDriversPage */

    /***/
    function ERed(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectDriversPage", function () {
        return SelectDriversPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_select_drivers_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./select-drivers.page.html */
      "FVnK");
      /* harmony import */


      var _select_drivers_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./select-drivers.page.scss */
      "kSbv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var SelectDriversPage = /*#__PURE__*/function () {
        function SelectDriversPage(navParam, modalController) {
          _classCallCheck(this, SelectDriversPage);

          this.navParam = navParam;
          this.modalController = modalController;
          this.drivers = [];
          this.selectedDriver = '';
          this.drivers = this.navParam.get('item');
          console.log('drivers->', this.drivers);

          if (this.drivers.length && this.drivers.length > 0) {
            this.selectedDriver = this.drivers[0].id;
          }
        }

        _createClass(SelectDriversPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "select",
          value: function select() {
            var _this40 = this;

            console.log(this.selectedDriver);
            var driver = this.drivers.filter(function (x) {
              return x.id === _this40.selectedDriver;
            });
            console.log(driver);
            this.modalController.dismiss(driver, 'selected');
          }
        }, {
          key: "close",
          value: function close() {
            this.modalController.dismiss([], 'close');
          }
        }]);

        return SelectDriversPage;
      }();

      SelectDriversPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      SelectDriversPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-select-drivers',
        template: _raw_loader_select_drivers_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_drivers_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], SelectDriversPage);
      /***/
    },

    /***/
    "FVnK":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-drivers/select-drivers.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FVnK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"inner-content\">\n  <div class=\"div_content\">\n    <p class=\"title\">Select Drivers</p>\n  </div>\n  <div class=\"content\">\n    <ion-list>\n      <ion-radio-group [(ngModel)]=\"selectedDriver\">\n        <ion-list-header>\n          <ion-label>Drivers</ion-label>\n        </ion-list-header>\n        <ion-item *ngFor=\"let item of drivers\" lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img [src]=\"item.coverImage\" />\n          </ion-avatar>\n          <ion-label>{{item.fullname}}</ion-label>\n          <ion-radio [value]=\"item.id\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n  </div>\n  <div class=\"div_btn\">\n    <ion-row>\n      <ion-col size=\"6\" class=\"cancel\">\n        <ion-button (click)=\"select()\" color=\"primary\" expand=\"full\">\n          Select\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"cancel\">\n        <ion-button (click)=\"close()\" color=\"light\" expand=\"full\">\n          Cancle\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n\n  </div>\n</div>";
      /***/
    },

    /***/
    "G4oC":
    /*!*******************************************************!*\
      !*** ./src/app/pages/variations/variations.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function G4oC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header {\n  border-bottom: 1px solid lightgray;\n}\n.header .bts {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  padding-bottom: 10px;\n}\n.header .desc .title {\n  margin: 0px;\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n.header .desc .details {\n  margin: 0px;\n  padding: 0px 10px;\n  font-size: 14px;\n}\n.padder {\n  padding-bottom: 60px;\n}\n.cartItems {\n  padding: 10px 5px;\n}\n.cartItems .name {\n  font-size: 18px;\n  font-weight: bold;\n  margin: 0px;\n}\n.cartItems .details {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.cartItems .details .names .subDetails {\n  margin: 0px;\n  font-size: 14px;\n}\n.cartItems .details .cartBtn2 {\n  position: absolute;\n  right: 15px;\n  width: 80px;\n  display: flex;\n  background: white;\n}\n.cartItems .details .cartBtn2 .qunitity {\n  font-weight: bold;\n  margin-top: 8px;\n}\n.sameProduct {\n  padding: 5px;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.sameProduct .desc {\n  padding: 0px 0px 10px 0px;\n}\n.sameProduct .desc .name {\n  font-size: 18px;\n  font-weight: bold;\n  margin: 0px;\n}\n.sameProduct .desc .selectedItem {\n  margin: 0px;\n  font-size: 14px;\n  display: flex;\n  flex-direction: column;\n}\n.sameProduct .desc .cartBtn2 {\n  position: absolute;\n  right: 15px;\n  width: 80px;\n  display: flex;\n  background: white;\n}\n.sameProduct .desc .cartBtn2 .qunitity {\n  font-weight: bold;\n  margin-top: 8px;\n}\n.footers {\n  position: fixed;\n  bottom: 10px;\n  width: 100%;\n  padding: 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmFyaWF0aW9ucy92YXJpYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QUFFSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUNJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNOO0FBR0E7RUFFRSxvQkFBQTtBQURGO0FBR0E7RUFDRSxpQkFBQTtBQUFGO0FBQ0U7RUFDQyxlQUFBO0VBQ0MsaUJBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0o7QUFDTTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQ1I7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUNRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBQ1o7QUFJQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFERjtBQUVFO0VBQ0UseUJBQUE7QUFBSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNOO0FBQ0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNOO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQ1I7QUFBUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUVaO0FBSUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmFyaWF0aW9ucy92YXJpYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIC5idHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgLmRlc2N7XG4gICAgLnRpdGxle1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5kZXRhaWxze1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbn1cbi5wYWRkZXJcbntcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59XG4uY2FydEl0ZW1ze1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgLm5hbWV7XG4gICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwcHg7IFxuICB9XG4gIC5kZXRhaWxze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxuICAgIC5uYW1lc3tcbiAgICAgIC5zdWJEZXRhaWxze1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuY2FydEJ0bjJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgLnF1bml0aXR5e1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5zYW1lUHJvZHVjdHtcbiAgcGFkZGluZzogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLmRlc2N7XG4gICAgcGFkZGluZzogMHB4IDBweCAxMHB4IDBweDtcbiAgICAubmFtZXtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuICAgIC5zZWxlY3RlZEl0ZW17XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAuY2FydEJ0bjJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgLnF1bml0aXR5e1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG59XG4uZm9vdGVyc3tcbiAgcG9zaXRpb246Zml4ZWQ7XG4gIGJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "JdNW":
    /*!***************************************************!*\
      !*** ./src/app/pages/variation/variation.page.ts ***!
      \***************************************************/

    /*! exports provided: VariationPage */

    /***/
    function JdNW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VariationPage", function () {
        return VariationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_variation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./variation.page.html */
      "YIgN");
      /* harmony import */


      var _variation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./variation.page.scss */
      "X7IY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var VariationPage = /*#__PURE__*/function () {
        function VariationPage() {
          _classCallCheck(this, VariationPage);
        }

        _createClass(VariationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VariationPage;
      }();

      VariationPage.ctorParameters = function () {
        return [];
      };

      VariationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-variation',
        template: _raw_loader_variation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_variation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], VariationPage);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "wljF");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, router, oneSignal, translate) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.router = router;
          this.oneSignal = oneSignal;
          this.translate = translate;
          var lng = localStorage.getItem('language');

          if (!lng || lng === null) {
            localStorage.setItem('language', 'en');
          }

          this.translate.use(localStorage.getItem('language'));
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this41 = this;

            this.platform.ready().then(function () {
              console.log('firebase', src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase.databaseURL);
              console.log('appid', src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].onesignal.appId);
              console.log('googlenumnner', src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].onesignal.googleProjectNumber);
              setTimeout(function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this41, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                  return regeneratorRuntime.wrap(function _callee19$(_context19) {
                    while (1) {
                      switch (_context19.prev = _context19.next) {
                        case 0:
                          _context19.next = 2;
                          return this.oneSignal.startInit(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].onesignal.appId, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].onesignal.googleProjectNumber);

                        case 2:
                          this.oneSignal.getIds().then(function (data) {
                            console.log('iddddd', data);
                            localStorage.setItem('fcm', data.userId);
                          });
                          _context19.next = 5;
                          return this.oneSignal.endInit();

                        case 5:
                        case "end":
                          return _context19.stop();
                      }
                    }
                  }, _callee19, this);
                }));
              }, 1000);

              _this41.platform.backButton.subscribe(function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this41, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
                  return regeneratorRuntime.wrap(function _callee20$(_context20) {
                    while (1) {
                      switch (_context20.prev = _context20.next) {
                        case 0:
                          console.log('asd', this.router.url, 'ad', this.router.isActive('/tabs/', true));

                          if (this.router.url.includes('/tabs/') || this.router.url.includes('/login')) {
                            navigator['app'].exitApp();
                          }

                        case 2:
                        case "end":
                          return _context20.stop();
                      }
                    }
                  }, _callee20, this);
                }));
              });

              _this41.statusBar.backgroundColorByHexString('#ff384c');

              _this41.splashScreen.hide();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])], AppComponent);
      /***/
    },

    /***/
    "Un4R":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/choose-address/choose-address-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ChooseAddressPageRoutingModule */

    /***/
    function Un4R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseAddressPageRoutingModule", function () {
        return ChooseAddressPageRoutingModule;
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


      var _choose_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./choose-address.page */
      "DiWI");

      var routes = [{
        path: '',
        component: _choose_address_page__WEBPACK_IMPORTED_MODULE_3__["ChooseAddressPage"]
      }];

      var ChooseAddressPageRoutingModule = function ChooseAddressPageRoutingModule() {
        _classCallCheck(this, ChooseAddressPageRoutingModule);
      };

      ChooseAddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChooseAddressPageRoutingModule);
      /***/
    },

    /***/
    "Ut7A":
    /*!*****************************************************!*\
      !*** ./src/app/directives/hide-header.directive.ts ***!
      \*****************************************************/

    /*! exports provided: HideHeaderDirective */

    /***/
    function Ut7A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HideHeaderDirective", function () {
        return HideHeaderDirective;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var HideHeaderDirective = /*#__PURE__*/function () {
        function HideHeaderDirective(renderer, domCtrl) {
          _classCallCheck(this, HideHeaderDirective);

          this.renderer = renderer;
          this.domCtrl = domCtrl;
          this.lastY = 0;
        }

        _createClass(HideHeaderDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this42 = this;

            this.header = this.header.el;
            this.domCtrl.write(function () {
              _this42.renderer.setStyle(_this42.header, 'transition', 'margin-top 700ms');
            });
          }
        }, {
          key: "onContentScroll",
          value: function onContentScroll($event) {
            var _this43 = this;

            if ($event.detail.scrollTop > this.lastY) {
              this.domCtrl.write(function () {
                _this43.renderer.setStyle(_this43.header, 'margin-top', "-".concat(_this43.header.clientHeight, "px"));
              });
            } else {
              this.domCtrl.write(function () {
                _this43.renderer.setStyle(_this43.header, 'margin-top', '0');
              });
            }

            this.lastY = $event.detail.scrollTop;
          }
        }]);

        return HideHeaderDirective;
      }();

      HideHeaderDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]
        }];
      };

      HideHeaderDirective.propDecorators = {
        header: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['header']
        }],
        onContentScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['ionScroll', ['$event']]
        }]
      };
      HideHeaderDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appHideHeader]'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]])], HideHeaderDirective);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>";
      /***/
    },

    /***/
    "X7IY":
    /*!*****************************************************!*\
      !*** ./src/app/pages/variation/variation.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function X7IY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZhcmlhdGlvbi92YXJpYXRpb24ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "YIgN":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/variation/variation.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function YIgN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>variation</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: customTranslateLoader, LanguageLoader, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "customTranslateLoader", function () {
        return customTranslateLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguageLoader", function () {
        return LanguageLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _pages_variations_variations_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/variations/variations.module */
      "w3kL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! angularfire2/auth */
      "Oipj");
      /* harmony import */


      var angularfire2_auth__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! angularfire2/firestore */
      "CqG3");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var angularfire2_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! angularfire2/storage */
      "r5VZ");
      /* harmony import */


      var angularfire2_storage__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var angularfire2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! angularfire2 */
      "MMa0");
      /* harmony import */


      var angularfire2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var angularfire2_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! angularfire2/database */
      "6233");
      /* harmony import */


      var angularfire2_database__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "WOgW");
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      "mtRb");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var src_app_pages_choose_address_choose_address_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/pages/choose-address/choose-address.module */
      "Bxw0");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "wljF");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ionic-native/paypal/ngx */
      "bXRV");
      /* harmony import */


      var _pages_select_drivers_select_drivers_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./pages/select-drivers/select-drivers.module */
      "4Mq/");
      /* harmony import */


      var _pages_variation_variation_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./pages/variation/variation.module */
      "zQhL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");

      function customTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_27__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
      }

      function LanguageLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_27__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], angularfire2__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase), angularfire2_storage__WEBPACK_IMPORTED_MODULE_12__["AngularFireStorageModule"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"], angularfire2_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"], src_app_pages_choose_address_choose_address_module__WEBPACK_IMPORTED_MODULE_19__["ChooseAddressPageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"], _pages_select_drivers_select_drivers_module__WEBPACK_IMPORTED_MODULE_24__["SelectDriversPageModule"], _pages_variation_variation_module__WEBPACK_IMPORTED_MODULE_25__["VariationPageModule"], _pages_variations_variations_module__WEBPACK_IMPORTED_MODULE_1__["VariationsPageModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateLoader"],
            useFactory: customTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClient"]]
          }
        })],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_16__["AndroidPermissions"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_17__["Diagnostic"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_18__["Geolocation"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_20__["OneSignal"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_22__["Camera"], _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_23__["PayPal"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "blxb":
    /*!*****************************************************!*\
      !*** ./src/app/pages/variations/variations.page.ts ***!
      \*****************************************************/

    /*! exports provided: VariationsPage */

    /***/
    function blxb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VariationsPage", function () {
        return VariationsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_variations_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./variations.page.html */
      "jl/1");
      /* harmony import */


      var _variations_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./variations.page.scss */
      "G4oC");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var VariationsPage = /*#__PURE__*/function () {
        function VariationsPage(modalController, navParma, util) {
          _classCallCheck(this, VariationsPage);

          this.modalController = modalController;
          this.navParma = navParma;
          this.util = util;
          this.productName = '';
          this.desc = '';
          this.total = 0;
          this.cart = [];
          this.userCart = [];
          this.sameProduct = false;
          this.removeProduct = false;
          this.newItem = false;
          this.sameCart = [];
          var info = this.navParma.get('food');
          console.log('info', info);
          this.productName = info.name;
          this.desc = info.desc;
          this.lists = info.variations;
          var userCart = localStorage.getItem('userCart');
          this.haveSize = info.size;
          console.log('usercart---->', userCart);

          if (userCart && userCart !== 'null' && userCart !== undefined && userCart !== 'undefined') {
            this.userCart = JSON.parse(userCart);
            console.log('===>>', this.userCart);
            var sameItem = this.userCart.filter(function (x) {
              return x.id === info.id;
            });
            console.log('sameItem', sameItem);

            if (sameItem.length > 0) {
              this.sameProduct = true;
              this.sameCart = sameItem[0].selectedItem;
              console.log('=??==>asdasd-->>>asd>>>>', this.sameCart);
            }
          } else {
            this.userCart = [];
          }
        }

        _createClass(VariationsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeIt",
          value: function closeIt() {
            this.modalController.dismiss();
          }
        }, {
          key: "radioGroupChange",
          value: function radioGroupChange(event, title) {
            console.log(event, title);
            console.log(this.lists);
            var radioList = this.lists.filter(function (x) {
              return x.title === title;
            });
            console.log(radioList);
            var selectedItems = radioList[0].items.filter(function (x) {
              return x.title === event.detail.value;
            });
            console.log('selected item', selectedItems);
            var price = parseFloat(selectedItems[0].price);
            var param = {
              type: title,
              value: price,
              name: selectedItems[0].title
            };
            var item = this.cart.filter(function (x) {
              return x.type === title;
            }); // console.log(item);

            if (item && item.length) {
              var index = this.cart.findIndex(function (x) {
                return x.type === title;
              });
              this.cart[index].value = price;
            } else {
              this.cart.push(param);
            }

            console.log('cart', this.cart);
            console.log('ng model', this.radioSelected);
          }
        }, {
          key: "getSymobol",
          value: function getSymobol() {
            return this.util.getCurrecySymbol();
          }
        }, {
          key: "sameChoise",
          value: function sameChoise() {
            this.modalController.dismiss(this.sameCart, 'sameChoice');
          }
        }, {
          key: "addToCart",
          value: function addToCart() {
            /*
              new
              sameChoice
              newCustom
              remove
            */
            var addedSize = this.cart.filter(function (x) {
              return x.type === 'size';
            });
            console.log(addedSize);
            var role;

            if (this.haveSize && !addedSize.length) {
              console.log('no size added');
              this.util.errorToast('Please select size');
              return false;
            }

            if (this.cart.length && !this.userCart.length) {
              role = 'new';
            }

            if (this.cart.length && this.userCart.length) {
              role = 'new';
            }

            if (!this.cart.length) {
              role = 'dismissed';
            }

            if (this.newItem) {
              role = 'newCustom';
            }

            this.modalController.dismiss(this.cart, role);
          }
        }, {
          key: "checkedEvent",
          value: function checkedEvent(event, title) {
            console.log(event, title);
            var price = parseFloat(event.detail.value);
            var param = {
              type: title,
              value: price,
              name: title
            };

            if (event.detail && event.detail.checked) {
              this.cart.push(param);
            } else {
              this.cart = this.cart.filter(function (x) {
                return x.type !== title;
              });
            }

            console.log(this.cart);
          }
        }, {
          key: "addQ",
          value: function addQ(index) {
            // this.userCart[index].quantiy = this.userCart[index].quantiy + 1;
            this.sameCart[index].total = this.sameCart[index].total + 1;
          }
        }, {
          key: "removeQ",
          value: function removeQ(index) {
            // if (this.userCart[index].quantiy !== 0) {
            //   this.userCart[index].quantiy = this.userCart[index].quantiy - 1;
            //   if (this.userCart[index].quantiy === 0) {
            //     this.modalController.dismiss(this.cart, 'remove');
            //   }
            // }
            this.sameCart[index].total = this.sameCart[index].total - 1;

            if (this.sameCart[index].total === 0) {
              this.sameCart = this.sameCart.filter(function (x) {
                return x.total !== 0;
              });
            }

            if (this.sameCart.length < 0) {
              this.modalController.dismiss(this.cart, 'remove');
            }
          }
        }, {
          key: "getCurrency",
          value: function getCurrency() {
            return this.util.getCurrecySymbol();
          }
        }]);

        return VariationsPage;
      }();

      VariationsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
        }];
      };

      VariationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-variations',
        template: _raw_loader_variations_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_variations_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])], VariationsPage);
      /***/
    },

    /***/
    "dVnR":
    /*!*********************************************!*\
      !*** ./src/app/directives/shared.module.ts ***!
      \*********************************************/

    /*! exports provided: SharedModule */

    /***/
    function dVnR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _hidenav_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./hidenav.module */
      "xnLu");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_hidenav_module__WEBPACK_IMPORTED_MODULE_2__["HidenavModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
        exports: [_hidenav_module__WEBPACK_IMPORTED_MODULE_2__["HidenavModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]]
      })], SharedModule);
      /***/
    },

    /***/
    "fBKi":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fBKi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-list lines=\"none\">\n  <ion-item (click)=\"select('edit')\">\n    <ion-label color=\"secondary\">{{'EDIT' | translate}}</ion-label>\n  </ion-item>\n  <ion-item (click)=\"select('delete')\">\n    <ion-label color=\"danger\">{{'DELETE' | translate}}</ion-label>\n  </ion-item>\n</ion-list>";
      /***/
    },

    /***/
    "fEsL":
    /*!*************************************************************!*\
      !*** ./src/app/pages/variation/variation-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: VariationPageRoutingModule */

    /***/
    function fEsL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VariationPageRoutingModule", function () {
        return VariationPageRoutingModule;
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


      var _variation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./variation.page */
      "JdNW");

      var routes = [{
        path: '',
        component: _variation_page__WEBPACK_IMPORTED_MODULE_3__["VariationPage"]
      }];

      var VariationPageRoutingModule = function VariationPageRoutingModule() {
        _classCallCheck(this, VariationPageRoutingModule);
      };

      VariationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VariationPageRoutingModule);
      /***/
    },

    /***/
    "g+95":
    /*!***************************************************************!*\
      !*** ./src/app/pages/variations/variations-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: VariationsPageRoutingModule */

    /***/
    function g95(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VariationsPageRoutingModule", function () {
        return VariationsPageRoutingModule;
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


      var _variations_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./variations.page */
      "blxb");

      var routes = [{
        path: '',
        component: _variations_page__WEBPACK_IMPORTED_MODULE_3__["VariationsPage"]
      }];

      var VariationsPageRoutingModule = function VariationsPageRoutingModule() {
        _classCallCheck(this, VariationsPageRoutingModule);
      };

      VariationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VariationsPageRoutingModule);
      /***/
    },

    /***/
    "gKjt":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/select-drivers/select-drivers-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: SelectDriversPageRoutingModule */

    /***/
    function gKjt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectDriversPageRoutingModule", function () {
        return SelectDriversPageRoutingModule;
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


      var _select_drivers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./select-drivers.page */
      "ERed");

      var routes = [{
        path: '',
        component: _select_drivers_page__WEBPACK_IMPORTED_MODULE_3__["SelectDriversPage"]
      }];

      var SelectDriversPageRoutingModule = function SelectDriversPageRoutingModule() {
        _classCallCheck(this, SelectDriversPageRoutingModule);
      };

      SelectDriversPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SelectDriversPageRoutingModule);
      /***/
    },

    /***/
    "j1ZV":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function j1ZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../components/popover/popover.component */
      "nm6V");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./menu/menu.component */
      "0oYm");
      /* harmony import */


      var _directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../directives/shared.module */
      "dVnR"); // This File Is Required For Custom Components


      var components = [_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"]];

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [components],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        exports: [].concat(components)
      })], ComponentsModule);
      /***/
    },

    /***/
    "jT0p":
    /*!***********************************************************!*\
      !*** ./src/app/components/popover/popover.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function jT0p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "jl/1":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/variations/variations.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function jl1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <div class=\"header\">\n    <div class=\"bts\">\n      <div class=\"desc\">\n        <p class=\"title\">{{productName}}</p>\n        <p class=\"details\">{{ (desc.length>40)? (desc | slice:0:40)+'..':(desc) }}</p>\n      </div>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"closeIt()\">\n          <ion-icon name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n  </div>\n</ion-header>\n\n<ion-content>\n\n  <!-- Same Product -->\n  <div *ngIf=\"sameProduct\">\n    <div *ngFor=\"let item of sameCart;let i = index\" class=\"cartItems\">\n      <p class=\"name\">{{productName}}</p>\n      <div class=\"details\">\n        <div class=\"names\">\n          <p *ngFor=\"let sub of item.item\" class=\"subDetails\"> {{sub.name}} </p>\n        </div>\n        <div class=\"cartBtn2\">\n          <ion-button (click)=\"removeQ(i)\" fill=\"clear\" size=\"small\">\n            <ion-icon name=\"remove\"></ion-icon>\n          </ion-button>\n          <p class=\"qunitity\">{{item.total}}</p>\n          <ion-button (click)=\"addQ(i)\" fill=\"clear\" size=\"small\">\n            <ion-icon name=\"add\"></ion-icon>\n          </ion-button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <!-- New Or diff variations -->\n  <div *ngIf=\"!sameProduct\" class=\"padder\">\n    <div *ngFor=\"let item of lists\">\n      <ion-list *ngIf=\"item.type == 'radio'\">\n        <ion-radio-group (ionChange)=\"radioGroupChange($event,item.title)\">\n          <ion-list-header>\n            <ion-label>{{item.title}}</ion-label>\n          </ion-list-header>\n          <ion-item *ngFor=\"let sub of item.items;let i = index;\">\n            <ion-label style=\"text-align: left\">{{sub.title}}</ion-label>\n            <ion-label style=\"text-align: right\"> {{getCurrency()}} {{sub.price}}</ion-label>\n            <ion-radio slot=\"start\" [value]=\"sub.title\" [name]=\"sub.title\" mode=\"md\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n      <ion-list *ngIf=\"item.type =='check'\">\n        <ion-list-header>\n          <ion-label>{{item.title}}</ion-label>\n        </ion-list-header>\n        <ion-item *ngFor=\"let sub of item.items;let j = index;\">\n          <ion-label style=\"text-align: left\">{{sub.title}}</ion-label>\n          <ion-label style=\"text-align: right\">{{getCurrency()}}{{sub.price}}</ion-label>\n          <ion-checkbox slot=\"start\" [value]=\"sub.price\" (ionChange)=\"checkedEvent($event,sub.title)\" mode=\"md\">\n          </ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <div class=\"footers\">\n    <ion-button (click)=\"addToCart()\" expand=\"block\" *ngIf=\"!sameProduct\">\n      Add {{total ? getSymobol():'' }} {{total ? total : ''}}\n    </ion-button>\n    <ion-row *ngIf=\"sameProduct\">\n      <ion-col size=\"6\">\n        <ion-button (click)=\"sameChoise()\" expand=\"block\">\n          OK\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button (click)=\"sameProduct = !sameProduct;newItem = true\" expand=\"block\">\n          Add new\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet-ios.entry.js": ["bnjm", "common", 0],
        "./ion-action-sheet-md.entry.js": ["utt2", "common", 1],
        "./ion-alert-ios.entry.js": ["yaSn", "common", 2],
        "./ion-alert-md.entry.js": ["2/RY", "common", 3],
        "./ion-app_8-ios.entry.js": ["iInF", "common", 4],
        "./ion-app_8-md.entry.js": ["K9Nc", "common", 5],
        "./ion-avatar_3-ios.entry.js": ["hH1s", "common", 6],
        "./ion-avatar_3-md.entry.js": ["Jw9y", "common", 7],
        "./ion-back-button-ios.entry.js": ["ouVF", "common", 8],
        "./ion-back-button-md.entry.js": ["/joy", "common", 9],
        "./ion-backdrop-ios.entry.js": ["uJLv", 10],
        "./ion-backdrop-md.entry.js": ["fSmE", 11],
        "./ion-button_2-ios.entry.js": ["s1jK", "common", 12],
        "./ion-button_2-md.entry.js": ["Wou7", "common", 13],
        "./ion-card_5-ios.entry.js": ["qshq", "common", 14],
        "./ion-card_5-md.entry.js": ["Q1uX", "common", 15],
        "./ion-checkbox-ios.entry.js": ["059i", "common", 16],
        "./ion-checkbox-md.entry.js": ["eLfv", "common", 17],
        "./ion-chip-ios.entry.js": ["+FzG", "common", 18],
        "./ion-chip-md.entry.js": ["yRpg", "common", 19],
        "./ion-col_3.entry.js": ["/CAe", 20],
        "./ion-datetime_3-ios.entry.js": ["Z1Jy", "common", 21],
        "./ion-datetime_3-md.entry.js": ["X0Dk", "common", 22],
        "./ion-fab_3-ios.entry.js": ["wvyA", "common", 23],
        "./ion-fab_3-md.entry.js": ["NkKY", "common", 24],
        "./ion-img.entry.js": ["wHD8", 25],
        "./ion-infinite-scroll_2-ios.entry.js": ["nf6t", "common", 26],
        "./ion-infinite-scroll_2-md.entry.js": ["lg/V", "common", 27],
        "./ion-input-ios.entry.js": ["sdJS", "common", 28],
        "./ion-input-md.entry.js": ["uQUw", "common", 29],
        "./ion-item-option_3-ios.entry.js": ["Pa1g", "common", 30],
        "./ion-item-option_3-md.entry.js": ["KTnd", "common", 31],
        "./ion-item_8-ios.entry.js": ["Z51p", "common", 32],
        "./ion-item_8-md.entry.js": ["8bam", "common", 33],
        "./ion-loading-ios.entry.js": ["J3Yu", "common", 34],
        "./ion-loading-md.entry.js": ["N3W9", "common", 35],
        "./ion-menu_3-ios.entry.js": ["IlGI", "common", 36],
        "./ion-menu_3-md.entry.js": ["WHty", "common", 37],
        "./ion-modal-ios.entry.js": ["mgaC", "common", 38],
        "./ion-modal-md.entry.js": ["EpFf", "common", 39],
        "./ion-nav_2.entry.js": ["vnES", "common", 40],
        "./ion-popover-ios.entry.js": ["Gdks", "common", 41],
        "./ion-popover-md.entry.js": ["VgKV", "common", 42],
        "./ion-progress-bar-ios.entry.js": ["0PGG", "common", 43],
        "./ion-progress-bar-md.entry.js": ["h/Bu", "common", 44],
        "./ion-radio_2-ios.entry.js": ["5bK7", "common", 45],
        "./ion-radio_2-md.entry.js": ["pOmE", "common", 46],
        "./ion-range-ios.entry.js": ["5g9+", "common", 47],
        "./ion-range-md.entry.js": ["fD4w", "common", 48],
        "./ion-refresher_2-ios.entry.js": ["CXux", "common", 49],
        "./ion-refresher_2-md.entry.js": ["RODS", "common", 50],
        "./ion-reorder_2-ios.entry.js": ["IdzL", "common", 51],
        "./ion-reorder_2-md.entry.js": ["Ftzj", "common", 52],
        "./ion-ripple-effect.entry.js": ["STjf", 53],
        "./ion-route_4.entry.js": ["k5eQ", "common", 54],
        "./ion-searchbar-ios.entry.js": ["l0q3", "common", 55],
        "./ion-searchbar-md.entry.js": ["mLlG", "common", 56],
        "./ion-segment_2-ios.entry.js": ["Iymp", "common", 57],
        "./ion-segment_2-md.entry.js": ["3msy", "common", 58],
        "./ion-select_3-ios.entry.js": ["rYLK", "common", 59],
        "./ion-select_3-md.entry.js": ["WOXB", "common", 60],
        "./ion-slide_2-ios.entry.js": ["F/Xn", 61],
        "./ion-slide_2-md.entry.js": ["k8us", 62],
        "./ion-spinner.entry.js": ["nI0H", "common", 63],
        "./ion-split-pane-ios.entry.js": ["edcM", 64],
        "./ion-split-pane-md.entry.js": ["RyPD", 65],
        "./ion-tab-bar_2-ios.entry.js": ["DP4G", "common", 66],
        "./ion-tab-bar_2-md.entry.js": ["gaXT", "common", 67],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 68],
        "./ion-text.entry.js": ["ISmu", "common", 69],
        "./ion-textarea-ios.entry.js": ["xNZy", "common", 70],
        "./ion-textarea-md.entry.js": ["p1XJ", "common", 71],
        "./ion-toast-ios.entry.js": ["XGfm", "common", 72],
        "./ion-toast-md.entry.js": ["Y/uG", "common", 73],
        "./ion-toggle-ios.entry.js": ["WbT0", "common", 74],
        "./ion-toggle-md.entry.js": ["upP9", "common", 75],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 76]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "kSbv":
    /*!***************************************************************!*\
      !*** ./src/app/pages/select-drivers/select-drivers.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function kSbv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-modal.modalContact {\n  --height: auto;\n}\nion-modal.modalContact .modal-wrapper {\n  width: 90% !important;\n}\nion-modal.modalContact.bottom {\n  align-items: flex-end;\n}\nion-modal.modalContact .ion-page {\n  position: relative;\n  display: block;\n  contain: content;\n}\nion-modal.modalContact .ion-page .inner-content {\n  max-height: 80vh;\n  overflow: auto;\n  border-radius: 10px;\n}\n.div_header {\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 15px;\n  position: relative;\n}\n.div_header .img_cross {\n  width: 35px;\n  position: absolute;\n  right: 20px;\n}\n.div_header .lbl_contact {\n  font-size: 20px;\n  display: block;\n  text-align: center;\n  margin-top: 20px;\n}\n.div_content {\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid lightgray;\n  padding: 10px;\n}\n.div_content .iconPerson {\n  font-size: 3rem;\n}\n.div_content .title {\n  text-align: center;\n  font-size: 0.8rem;\n  color: black;\n  margin: 0px;\n}\n.div_content .your {\n  text-align: center;\n  font-size: 0.8rem;\n  color: black;\n  margin: 0px;\n}\n.div_content .score {\n  text-align: center;\n  font-size: 1.2rem;\n  color: black;\n  margin: 0px;\n  font-weight: bold;\n}\n.content {\n  padding: 10px;\n}\n.content .inputs {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.content .inputs ion-input {\n  border-radius: 5px;\n  border: 1px solid lightgray;\n  --padding-start: 10px;\n  margin: 15px 0px;\n}\n.content .tabs_prpl {\n  background: var(--ion-color-secondary);\n  color: white;\n  height: 30px;\n  line-height: 20px;\n  margin-bottom: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n.content .pdd_left {\n  padding-left: 20px;\n}\n.div_btn .cancel {\n  border-top: 1px solid lightgray;\n}\n.div_btn .save {\n  border-top: 1px solid lightgray;\n  border-left: 1px solid lightgray;\n  background: #f9f9f9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VsZWN0LWRyaXZlcnMvc2VsZWN0LWRyaXZlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBT0ksY0FBQTtBQUxKO0FBREk7RUFDSSxxQkFBQTtBQUdSO0FBREk7RUFDSSxxQkFBQTtBQUdSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVSO0FBRFE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFFQSxtQkFBQTtBQUVaO0FBR0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDUjtBQUNJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFFUjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBRVI7QUFDQTtFQUNJLGFBQUE7QUFFSjtBQURJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUdSO0FBRlE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUlaO0FBREs7RUFDQyxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBR047QUFESTtFQUNFLGtCQUFBO0FBR047QUFFSTtFQUNJLCtCQUFBO0FBQ1I7QUFDSTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQUNSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VsZWN0LWRyaXZlcnMvc2VsZWN0LWRyaXZlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1vZGFsLm1vZGFsQ29udGFjdCB7XG4gICAgLm1vZGFsLXdyYXBwZXJ7XG4gICAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgJi5ib3R0b20ge1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgfVxuICAgIC0taGVpZ2h0OiBhdXRvO1xuICAgIC5pb24tcGFnZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbnRhaW46IGNvbnRlbnQ7XG4gICAgICAgIC5pbm5lci1jb250ZW50IHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIC8vIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGl2X2hlYWRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmltZ19jcm9zc3tcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgfVxuICAgIC5sYmxfY29udGFjdHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbn1cbi5kaXZfY29udGVudHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC5pY29uUGVyc29ue1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgfVxuICAgIC50aXRsZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgICAueW91cntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgICAuc2NvcmV7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cbi5jb250ZW50e1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLmlucHV0c3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMHB4O1xuICAgICAgICB9XG4gICAgfSAgIFxuICAgICAudGFic19wcnBse1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBoZWlnaHQ6MzBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OjIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICBmb250LXNpemU6MTFweDtcbiAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB9XG4gICAgLnBkZF9sZWZ0e1xuICAgICAgcGFkZGluZy1sZWZ0OjIwcHg7XG4gICAgfSBcbn1cblxuIC5kaXZfYnRue1xuICAgIC5jYW5jZWx7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgfVxuICAgIC5zYXZle1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "lTsH":
    /*!***************************************************************!*\
      !*** ./src/app/pages/choose-address/choose-address.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function lTsH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  display: block;\n}\n\n.group {\n  padding: 10px 15px;\n  width: 100%;\n  background: #fff !important;\n}\n\n.group .mainContent {\n  padding: 5px 10px;\n}\n\n.group .mainContent .savedTitle {\n  font-weight: bold;\n}\n\n.group .mainContent .noData {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 250px;\n}\n\n.group .mainContent .list {\n  margin-top: 20px;\n  position: relative;\n  overflow-x: auto;\n}\n\n.group .mainContent .list::-webkit-scrollbar {\n  display: none;\n}\n\n.group .mainContent .list .scroll-item {\n  flex: 0 0 auto;\n}\n\n.group .mainContent .list .title {\n  font-weight: bold;\n  color: black;\n  font-size: 0.8rem;\n  white-space: pre-wrap;\n  text-transform: capitalize;\n}\n\n.group .mainContent .list .name {\n  color: lightgray;\n  font-size: 0.7rem;\n}\n\n.group .mainContent .list .moreIcon {\n  position: absolute;\n  right: 0px;\n  top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hvb3NlLWFkZHJlc3MvY2hvb3NlLWFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksY0FBQTtBQUZKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFFSTtFQUNJLGlCQUFBO0FBQVI7O0FBQ1E7RUFDSSxpQkFBQTtBQUNaOztBQUNRO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNaOztBQUNRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUdBLGdCQUFBO0FBRFo7O0FBRVk7RUFDSSxhQUFBO0FBQWhCOztBQUVZO0VBQ0ksY0FBQTtBQUFoQjs7QUFFWTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQUFoQjs7QUFFWTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFBaEI7O0FBRVk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBQWhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hvb3NlLWFkZHJlc3MvY2hvb3NlLWFkZHJlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4vLyAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbmlvbi1sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uZ3JvdXAge1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLm1haW5Db250ZW50e1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgLnNhdmVkVGl0bGV7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsgICBcbiAgICAgICAgfVxuICAgICAgICAubm9EYXRhe1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxpc3R7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIC8vIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNjcm9sbC1pdGVtIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hbWV7XG4gICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb3JlSWNvbntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "nfPh":
    /*!*****************************************************!*\
      !*** ./src/app/components/menu/menu.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function nfPh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "nm6V":
    /*!*********************************************************!*\
      !*** ./src/app/components/popover/popover.component.ts ***!
      \*********************************************************/

    /*! exports provided: PopoverComponent */

    /***/
    function nm6V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
        return PopoverComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_popover_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./popover.component.html */
      "fBKi");
      /* harmony import */


      var _popover_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./popover.component.scss */
      "jT0p");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var PopoverComponent = /*#__PURE__*/function () {
        function PopoverComponent(popoverController) {
          _classCallCheck(this, PopoverComponent);

          this.popoverController = popoverController;
        }

        _createClass(PopoverComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "select",
          value: function select(type) {
            this.popoverController.dismiss(type);
          }
        }]);

        return PopoverComponent;
      }();

      PopoverComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }];
      };

      PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-popover',
        template: _raw_loader_popover_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_popover_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]])], PopoverComponent);
      /***/
    },

    /***/
    "pp8I":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-address/choose-address.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pp8I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"from ==='cart'\">{{'Delivery Address' | translate}}</ion-title>\n    <ion-title *ngIf=\"from ==='accont'\">{{'Manage Address' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"group\">\n    <div class=\"mainContent\">\n      <ion-button (click)=\"addNew()\" expand=\"block\" fill=\"clear\">\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n        {{'Add Address' | translate}}\n      </ion-button>\n      <div class=\"noData\" *ngIf=\"!dummy?.length && !myaddress?.length\"\n        [style.backgroundImage]=\"'url(assets/nothing.jpg)'\">\n      </div>\n      <div *ngFor=\"let item of dummy\">\n        <ion-list lines=\"none\">\n          <ion-item>\n            <ion-thumbnail slot=\"start\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-thumbnail>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              </p>\n              <p>\n                <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n      <ion-list *ngIf=\"from ==='cart'\">\n        <ion-radio-group [(ngModel)]=\"selectedAddress\">\n          <ion-item *ngFor=\"let item of myaddress\" class=\"list\">\n            <ion-label class=\"title\">{{item.title}} <br>\n              <span class=\"name\">{{item.house}} {{item.landmark}} {{item.address}}</span></ion-label>\n            <!-- <ion-label class=\"name\"></ion-label> -->\n            <ion-radio [value]=\"item.id\" slot=\"start\" mode=\"md\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n      <div *ngIf=\"from ==='accont'\">\n        <div class=\"list\" *ngFor=\"let item of myaddress\" scrollX=\"true\">\n          <ion-label class=\"title\">{{item.title}}</ion-label>\n          <ion-label class=\"name\">{{item.house}} {{item.landmark}} {{item.address}}\n          </ion-label>\n          <ion-icon class=\"moreIcon\" (click)=\"openMenu(item,$event)\" name=\"ellipsis-vertical-outline\">\n          </ion-icon>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"selectedAddress\" (click)=\"selectAddress()\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-tabs-tabs-module */
          "pages-tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./pages/tabs/tabs.module */
          "qiIP")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'tabs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-tabs-tabs-module */
          "pages-tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./pages/tabs/tabs.module */
          "qiIP")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-login-login-module */
          "pages-login-login-module").then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "F4UR")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-register-register-module */
          "pages-register-register-module").then(__webpack_require__.bind(null,
          /*! ./pages/register/register.module */
          "fhSy")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-home-home-module */
          [__webpack_require__.e("default~history-history-module~home-home-module~pages-coupons-coupons-module~pages-payments-payments~f93f1f28"), __webpack_require__.e("default~home-home-module~pages-rate-rate-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/home/home.module */
          "99Un")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'cart',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-cart-cart-module */
          "cart-cart-module").then(__webpack_require__.bind(null,
          /*! ./pages/cart/cart.module */
          "sFz8")).then(function (m) {
            return m.CartPageModule;
          });
        }
      }, {
        path: 'category',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-category-category-module */
          "pages-category-category-module").then(__webpack_require__.bind(null,
          /*! ./pages/category/category.module */
          "iCz4")).then(function (m) {
            return m.CategoryPageModule;
          });
        }
      }, {
        path: 'account',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-account-account-module */
          "account-account-module").then(__webpack_require__.bind(null,
          /*! ./pages/account/account.module */
          "4+IK")).then(function (m) {
            return m.AccountPageModule;
          });
        }
      }, {
        path: 'favourite',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-favourite-favourite-module */
          "pages-favourite-favourite-module").then(__webpack_require__.bind(null,
          /*! ./pages/favourite/favourite.module */
          "qf5k")).then(function (m) {
            return m.FavouritePageModule;
          });
        }
      }, {
        path: 'history',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-history-history-module */
          [__webpack_require__.e("default~history-history-module~home-home-module~pages-coupons-coupons-module~pages-payments-payments~f93f1f28"), __webpack_require__.e("history-history-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/history/history.module */
          "6F3i")).then(function (m) {
            return m.HistoryPageModule;
          });
        }
      }, {
        path: 'payments',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-payments-payments-module */
          [__webpack_require__.e("default~history-history-module~home-home-module~pages-coupons-coupons-module~pages-payments-payments~f93f1f28"), __webpack_require__.e("pages-payments-payments-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/payments/payments.module */
          "cvkL")).then(function (m) {
            return m.PaymentsPageModule;
          });
        }
      }, {
        path: 'choose-address',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./pages/choose-address/choose-address.module */
          "Bxw0")).then(function (m) {
            return m.ChooseAddressPageModule;
          });
        }
      }, {
        path: 'add-new-address',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-add-new-address-add-new-address-module */
          "pages-add-new-address-add-new-address-module").then(__webpack_require__.bind(null,
          /*! ./pages/add-new-address/add-new-address.module */
          "PMNr")).then(function (m) {
            return m.AddNewAddressPageModule;
          });
        }
      }, {
        path: 'coupons',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-coupons-coupons-module */
          [__webpack_require__.e("default~history-history-module~home-home-module~pages-coupons-coupons-module~pages-payments-payments~f93f1f28"), __webpack_require__.e("pages-coupons-coupons-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/coupons/coupons.module */
          "oJaD")).then(function (m) {
            return m.CouponsPageModule;
          });
        }
      }, {
        path: 'summary',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-summary-summary-module */
          "pages-summary-summary-module").then(__webpack_require__.bind(null,
          /*! ./pages/summary/summary.module */
          "S5Bg")).then(function (m) {
            return m.SummaryPageModule;
          });
        }
      }, {
        path: 'history-detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-history-detail-history-detail-module */
          "pages-history-detail-history-detail-module").then(__webpack_require__.bind(null,
          /*! ./pages/history-detail/history-detail.module */
          "1AGm")).then(function (m) {
            return m.HistoryDetailPageModule;
          });
        }
      }, {
        path: 'choose-restaurant',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-choose-restaurant-choose-restaurant-module */
          "pages-choose-restaurant-choose-restaurant-module").then(__webpack_require__.bind(null,
          /*! ./pages/choose-restaurant/choose-restaurant.module */
          "dg/j")).then(function (m) {
            return m.ChooseRestaurantPageModule;
          });
        }
      }, {
        path: 'add-review',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-add-review-add-review-module */
          "pages-add-review-add-review-module").then(__webpack_require__.bind(null,
          /*! ./pages/add-review/add-review.module */
          "Z3QP")).then(function (m) {
            return m.AddReviewPageModule;
          });
        }
      }, {
        path: 'edit-profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-edit-profile-edit-profile-module */
          "pages-edit-profile-edit-profile-module").then(__webpack_require__.bind(null,
          /*! ./pages/edit-profile/edit-profile.module */
          "k578")).then(function (m) {
            return m.EditProfilePageModule;
          });
        }
      }, {
        path: 'tracker',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-tracker-tracker-module */
          "pages-tracker-tracker-module").then(__webpack_require__.bind(null,
          /*! ./pages/tracker/tracker.module */
          "akYc")).then(function (m) {
            return m.TrackerPageModule;
          });
        }
      }, {
        path: 'stripe-payments',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-stripe-payments-stripe-payments-module */
          [__webpack_require__.e("default~history-history-module~home-home-module~pages-coupons-coupons-module~pages-payments-payments~f93f1f28"), __webpack_require__.e("pages-stripe-payments-stripe-payments-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/stripe-payments/stripe-payments.module */
          "xKnB")).then(function (m) {
            return m.StripePaymentsPageModule;
          });
        }
      }, {
        path: 'add-card',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-add-card-add-card-module */
          "pages-add-card-add-card-module").then(__webpack_require__.bind(null,
          /*! ./pages/add-card/add-card.module */
          "3ONh")).then(function (m) {
            return m.AddCardPageModule;
          });
        }
      }, {
        path: 'select-drivers',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./pages/select-drivers/select-drivers.module */
          "4Mq/")).then(function (m) {
            return m.SelectDriversPageModule;
          });
        }
      }, {
        path: 'inbox',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-inbox-inbox-module */
          "pages-inbox-inbox-module").then(__webpack_require__.bind(null,
          /*! ./pages/inbox/inbox.module */
          "+duN")).then(function (m) {
            return m.InboxPageModule;
          });
        }
      }, {
        path: 'rate',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-rate-rate-module */
          [__webpack_require__.e("default~home-home-module~pages-rate-rate-module"), __webpack_require__.e("pages-rate-rate-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/rate/rate.module */
          "+6y4")).then(function (m) {
            return m.RatePageModule;
          });
        }
      }, {
        path: 'rest-details',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-rest-details-rest-details-module */
          "pages-rest-details-rest-details-module").then(__webpack_require__.bind(null,
          /*! ./pages/rest-details/rest-details.module */
          "3gdy")).then(function (m) {
            return m.RestDetailsPageModule;
          });
        }
      }, {
        path: 'cities',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-cities-cities-module */
          "pages-cities-cities-module").then(__webpack_require__.bind(null,
          /*! ./pages/cities/cities.module */
          "eiZR")).then(function (m) {
            return m.CitiesPageModule;
          });
        }
      }, {
        path: 'forgot',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-forgot-forgot-module */
          "pages-forgot-forgot-module").then(__webpack_require__.bind(null,
          /*! ./pages/forgot/forgot.module */
          "Ityv")).then(function (m) {
            return m.ForgotPageModule;
          });
        }
      }, {
        path: 'variation',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./pages/variation/variation.module */
          "zQhL")).then(function (m) {
            return m.VariationPageModule;
          });
        }
      }, {
        path: 'variations',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./pages/variations/variations.module */
          "w3kL")).then(function (m) {
            return m.VariationsPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "w3kL":
    /*!*******************************************************!*\
      !*** ./src/app/pages/variations/variations.module.ts ***!
      \*******************************************************/

    /*! exports provided: VariationsPageModule */

    /***/
    function w3kL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VariationsPageModule", function () {
        return VariationsPageModule;
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


      var _variations_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./variations-routing.module */
      "g+95");
      /* harmony import */


      var _variations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./variations.page */
      "blxb");

      var VariationsPageModule = function VariationsPageModule() {
        _classCallCheck(this, VariationsPageModule);
      };

      VariationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _variations_routing_module__WEBPACK_IMPORTED_MODULE_5__["VariationsPageRoutingModule"]],
        declarations: [_variations_page__WEBPACK_IMPORTED_MODULE_6__["VariationsPage"]]
      })], VariationsPageModule);
      /***/
    },

    /***/
    "xnLu":
    /*!**********************************************!*\
      !*** ./src/app/directives/hidenav.module.ts ***!
      \**********************************************/

    /*! exports provided: HidenavModule */

    /***/
    function xnLu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HidenavModule", function () {
        return HidenavModule;
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


      var _hide_header_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./hide-header.directive */
      "Ut7A");

      var HidenavModule = function HidenavModule() {
        _classCallCheck(this, HidenavModule);
      };

      HidenavModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_hide_header_directive__WEBPACK_IMPORTED_MODULE_2__["HideHeaderDirective"]],
        exports: [_hide_header_directive__WEBPACK_IMPORTED_MODULE_2__["HideHeaderDirective"]]
      })], HidenavModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "zQhL":
    /*!*****************************************************!*\
      !*** ./src/app/pages/variation/variation.module.ts ***!
      \*****************************************************/

    /*! exports provided: VariationPageModule */

    /***/
    function zQhL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VariationPageModule", function () {
        return VariationPageModule;
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


      var _variation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./variation-routing.module */
      "fEsL");
      /* harmony import */


      var _variation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./variation.page */
      "JdNW");

      var VariationPageModule = function VariationPageModule() {
        _classCallCheck(this, VariationPageModule);
      };

      VariationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _variation_routing_module__WEBPACK_IMPORTED_MODULE_5__["VariationPageRoutingModule"]],
        declarations: [_variation_page__WEBPACK_IMPORTED_MODULE_6__["VariationPage"]]
      })], VariationPageModule);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map