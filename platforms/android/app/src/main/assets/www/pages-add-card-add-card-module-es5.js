(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-card-add-card-module"], {
    /***/
    "2bq6":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-card/add-card.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function bq6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Add New Card' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div_content\">\n    <ion-label class=\"lbl_card\">{{'Your Credit / Debit Card' | translate}}</ion-label>\n\n    <div class=\"div_card\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-input type=\"email\" placeholder=\"demo@gmail.com\" [(ngModel)]=\"email\" class=\"input_all\">\n          </ion-input>\n          <ion-label class=\"card_number\">{{'Email Address' | translate}}</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top : 20px;\">\n        <ion-col size=\"6\">\n          <ion-input type=\"number\" placeholder=\"424242*********4242\" [(ngModel)]=\"cnumber\" class=\"input_all\">\n          </ion-input>\n          <ion-label class=\"card_number\">{{'Card Number' | translate}}</ion-label>\n        </ion-col>\n        <ion-col size=\"6\">\n          <img src=\"assets/visa.png\" class=\"img_visa\" />\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row style=\"margin-top : 20px;\">\n        <ion-col size=\"6\">\n          <ion-input type=\"text\" placeholder=\"Joe\" [(ngModel)]=\"cname\" class=\"input_all\"></ion-input>\n          <ion-label class=\"card_number\">{{'Card Holder Name' | translate}}</ion-label>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-datetime min=\"2020\" max=\"2030\" display-format=\"MMM, YYYY\" [(ngModel)]=\"date\" class=\"input_date\"\n            placeholder=\"Jan, 2019\">\n          </ion-datetime>\n          <ion-label class=\"card_number\">{{'Expiration Date' | translate}}</ion-label>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-label class=\"lbl_card\">CVC</ion-label>\n    <ion-input type=\"text\" maxlength=\"3\" [(ngModel)]=\"cvc\" class=\"in_cvc\"></ion-input>\n\n    <ion-button expand=\"full\" color=\"primary\" class=\"btn_addcard\" (click)=\"addcard()\">{{'ADD CARD' | translate}}\n    </ion-button>\n  </div>\n  <p class=\"title\">NOTE : For DEMO USE </p>\n  <p class=\"sub\">CN : 4242 4242 4242 4242</p>\n  <p class=\"sub\">EXP : 12/2022</p>\n  <p class=\"sub\">CVC : 220</p>\n</ion-content>";
      /***/
    },

    /***/
    "3ONh":
    /*!***************************************************!*\
      !*** ./src/app/pages/add-card/add-card.module.ts ***!
      \***************************************************/

    /*! exports provided: AddCardPageModule */

    /***/
    function ONh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCardPageModule", function () {
        return AddCardPageModule;
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


      var _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-card-routing.module */
      "tF5+");
      /* harmony import */


      var _add_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-card.page */
      "kgbJ");
      /* harmony import */


      var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/directives/shared.module */
      "dVnR");

      var AddCardPageModule = function AddCardPageModule() {
        _classCallCheck(this, AddCardPageModule);
      };

      AddCardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddCardPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_add_card_page__WEBPACK_IMPORTED_MODULE_6__["AddCardPage"]]
      })], AddCardPageModule);
      /***/
    },

    /***/
    "T2SW":
    /*!***************************************************!*\
      !*** ./src/app/pages/add-card/add-card.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function T2SW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".div_content {\n  width: 100%;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.div_content .lbl_card {\n  font-size: 16px;\n  display: block;\n  color: gray;\n  margin-top: 15px;\n}\n.div_content .div_card {\n  margin-top: 20px;\n  width: 100%;\n  border: 1px solid gray;\n  border-radius: 5px;\n  padding: 20px;\n}\n.div_content .div_card .input_all {\n  font-size: 10px;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  --padding-start: 10px;\n}\n.div_content .div_card .input_date {\n  font-size: 10px;\n  padding: 0px !important;\n  color: black;\n}\n.div_content .div_card .card_number {\n  font-size: 10px;\n  color: gray;\n}\n.div_content .div_card .img_visa {\n  float: right;\n  height: 30px;\n  width: 30px;\n}\n.div_content .in_cvc {\n  border: 1px solid gray;\n  margin-top: 15px;\n  border-radius: 5px;\n  width: 135px;\n  text-align: center;\n  font-size: 10px;\n}\n.div_content .btn_addcard {\n  margin-top: 30px;\n  --box-shadow: none !important;\n}\n.title {\n  margin: 0px;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: var(--ion-color-primary);\n}\n.sub {\n  padding: 10px;\n  margin: 0px;\n  font-size: 1rem;\n  color: black;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLWNhcmQvYWRkLWNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFDUjtBQUNRO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUNaO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ1o7QUFZUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBVlo7QUFZUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVZaO0FBY0k7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBWlI7QUFlSTtFQUNJLGdCQUFBO0VBQ0EsNkJBQUE7QUFiUjtBQWdCQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBYko7QUFlQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVpKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkLWNhcmQvYWRkLWNhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdl9jb250ZW50e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuXG4gICAgLmxibF9jYXJke1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxuICAgIC5kaXZfY2FyZHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcblxuICAgICAgICAuaW5wdXRfYWxse1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbnB1dF9kYXRle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogM3B4ICFpbXBvcnRhbnQ7ICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAvLyAvZGVlcC8gLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWR7XG4gICAgICAgIC8vICAgICBwYWRkaW5nLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC8vICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAvLyAgICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gL2RlZXAvIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LWlvc3tcbiAgICAgICAgLy8gICAgIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbiAgICAgICAgLy8gICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC8vICAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnRcbiAgICAgICAgLy8gfVxuICAgICAgICAuY2FyZF9udW1iZXJ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTsgIFxuICAgICAgICB9XG4gICAgICAgIC5pbWdfdmlzYXtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmluX2N2Y3tcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB3aWR0aDogMTM1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cblxuICAgIC5idG5fYWRkY2FyZHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLnRpdGxle1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5zdWJ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIl19 */";
      /***/
    },

    /***/
    "kgbJ":
    /*!*************************************************!*\
      !*** ./src/app/pages/add-card/add-card.page.ts ***!
      \*************************************************/

    /*! exports provided: AddCardPage */

    /***/
    function kgbJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCardPage", function () {
        return AddCardPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_card_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-card.page.html */
      "2bq6");
      /* harmony import */


      var _add_card_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-card.page.scss */
      "T2SW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var AddCardPage = /*#__PURE__*/function () {
        function AddCardPage(util, api, navCtrl) {
          _classCallCheck(this, AddCardPage);

          this.util = util;
          this.api = api;
          this.navCtrl = navCtrl;
          this.cnumber = '';
          this.cname = '';
          this.cvc = '';
          this.date = '';
          this.email = '';
        }

        _createClass(AddCardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "updateRest",
          value: function updateRest(body) {
            this.api.updateProfile(body.uid, body).then(function (data) {
              console.log(data);
            });
            this.navCtrl.back();
          }
        }, {
          key: "addcard",
          value: function addcard() {
            var _this = this;

            if (this.email === '' || this.cname === '' || this.cnumber === '' || this.cvc === '' || this.date === '') {
              this.util.errorToast(this.util.translate('All Fields are required'));
              return false;
            }

            var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

            if (!emailfilter.test(this.email)) {
              this.util.errorToast(this.util.translate('Please enter valid email'));
              return false;
            }

            var year = this.date.split('-')[0];
            var month = this.date.split('-')[1];
            var param = {
              'card[number]': this.cnumber,
              'card[exp_month]': month,
              'card[exp_year]': year,
              'card[cvc]': this.cvc
            };
            this.util.show();
            this.api.httpPost('https://api.stripe.com/v1/tokens', param).subscribe(function (data) {
              console.log(data);

              if (data && data.id) {
                // this.token = data.id;
                var customer = {
                  description: 'Customer for food app',
                  source: data.id,
                  email: _this.email
                };

                _this.api.httpPost('https://api.stripe.com/v1/customers', customer).subscribe(function (customer) {
                  console.log(customer);

                  _this.util.hide();

                  if (customer && customer.id) {
                    // this.cid = customer.id;
                    var cid = {
                      uid: localStorage.getItem('uid'),
                      cid: customer.id
                    };

                    _this.updateRest(cid);
                  }
                }, function (error) {
                  _this.util.hide();

                  console.log();

                  if (error && error.error && error.error.error && error.error.error.message) {
                    _this.util.showErrorAlert(error.error.error.message);

                    return false;
                  }

                  _this.util.errorToast(_this.util.translate('Something went wrong'));
                });
              } else {
                _this.util.hide();
              }
            }, function (error) {
              console.log(error);

              _this.util.hide();

              console.log();

              if (error && error.error && error.error.error && error.error.error.message) {
                _this.util.showErrorAlert(error.error.error.message);

                return false;
              }

              _this.util.errorToast(_this.util.translate('Something went wrong'));
            });
          }
        }]);

        return AddCardPage;
      }();

      AddCardPage.ctorParameters = function () {
        return [{
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }];
      };

      AddCardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-card',
        template: _raw_loader_add_card_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_card_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])], AddCardPage);
      /***/
    },

    /***/
    "tF5+":
    /*!***********************************************************!*\
      !*** ./src/app/pages/add-card/add-card-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: AddCardPageRoutingModule */

    /***/
    function tF5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCardPageRoutingModule", function () {
        return AddCardPageRoutingModule;
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


      var _add_card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-card.page */
      "kgbJ");

      var routes = [{
        path: '',
        component: _add_card_page__WEBPACK_IMPORTED_MODULE_3__["AddCardPage"]
      }];

      var AddCardPageRoutingModule = function AddCardPageRoutingModule() {
        _classCallCheck(this, AddCardPageRoutingModule);
      };

      AddCardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddCardPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-add-card-add-card-module-es5.js.map