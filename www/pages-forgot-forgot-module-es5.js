(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-forgot-module"], {
    /***/
    "EK+f":
    /*!***********************************************!*\
      !*** ./src/app/pages/forgot/forgot.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function EKF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".login-logo {\n  margin: auto;\n  margin-top: 15vh;\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.login-logo .logo_icon {\n  max-width: 97px;\n}\n\n.frgTag {\n  text-align: right;\n  color: var(--ion-color-primary);\n}\n\n.list {\n  margin-bottom: 0;\n}\n\nion-list {\n  --ion-background-color:transparent;\n  margin: 0px;\n}\n\nion-item:not(:first-child) {\n  margin-top: 10px;\n}\n\n.createAcc {\n  text-align: center;\n}\n\n.createAcc .registerTag {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\n.form-inputs {\n  padding: 0;\n  margin-bottom: 30px;\n}\n\n.btn-submit {\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDdkI7O0FBTEE7RUFNUSxlQUFlO0FBR3ZCOztBQUFBO0VBQ1EsaUJBQWlCO0VBQ2pCLCtCQUE4QjtBQUd0Qzs7QUFEQTtFQUNJLGdCQUFnQjtBQUlwQjs7QUFGQTtFQUNJLGtDQUF1QjtFQUN2QixXQUFXO0FBS2Y7O0FBSEE7RUFFUSxnQkFBZ0I7QUFLeEI7O0FBQUE7RUFDRyxrQkFBa0I7QUFHckI7O0FBSkE7RUFHUSwrQkFBK0I7RUFDL0IsaUJBQWlCO0FBS3pCOztBQURBO0VBQ0ksVUFBVTtFQUNWLG1CQUFtQjtBQUl2Qjs7QUFEQTtFQUNJLFNBQVM7QUFJYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdvdC9mb3Jnb3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWxvZ28ge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTV2aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAubG9nb19pY29ue1xyXG4gICAgICAgIG1heC13aWR0aDogOTdweDtcclxuICAgIH1cclxufVxyXG4uZnJnVGFne1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG4ubGlzdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbmlvbi1saXN0e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi5jcmVhdGVBY2N7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgLnJlZ2lzdGVyVGFne1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICB9XHJcbn0gXHJcblxyXG4uZm9ybS1pbnB1dHN7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmJ0bi1zdWJtaXR7XHJcbiAgICBtYXJnaW46IDA7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "GRmH":
    /*!*********************************************!*\
      !*** ./src/app/pages/forgot/forgot.page.ts ***!
      \*********************************************/

    /*! exports provided: ForgotPage */

    /***/
    function GRmH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPage", function () {
        return ForgotPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forgot_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forgot.page.html */
      "svYT");
      /* harmony import */


      var _forgot_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgot.page.scss */
      "EK+f");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc");

      var ForgotPage = /*#__PURE__*/function () {
        function ForgotPage(navCtrl, util, api) {
          _classCallCheck(this, ForgotPage);

          this.navCtrl = navCtrl;
          this.util = util;
          this.api = api;
          this.login = {
            email: ''
          };
          this.submitted = false;
        }

        _createClass(ForgotPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onLogin",
          value: function onLogin(form) {
            var _this = this;

            console.log('form', form);
            this.submitted = true;

            if (form.valid) {
              var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

              if (!emailfilter.test(this.login.email)) {
                this.util.showToast(this.util.translate('Please enter valid email'), 'danger', 'bottom');
                return false;
              }

              this.util.show();
              this.api.resetPassword(this.login.email).then(function (data) {
                _this.util.hide();

                _this.util.showToast(_this.util.translate('Reset Password link is sent to your email'), 'dark', 'bottom');

                console.log('sent', data);

                _this.navCtrl.back();
              }, function (error) {
                console.log(error);

                _this.util.hide();

                _this.util.showErrorAlert(_this.util.translate('Something went wrong'));
              })["catch"](function (error) {
                console.log(error);

                _this.util.hide();

                _this.util.showErrorAlert(_this.util.translate('Something went wrong'));
              });
            }
          }
        }]);

        return ForgotPage;
      }();

      ForgotPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"]
        }];
      };

      ForgotPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgot',
        template: _raw_loader_forgot_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"]])], ForgotPage);
      /***/
    },

    /***/
    "Ityv":
    /*!***********************************************!*\
      !*** ./src/app/pages/forgot/forgot.module.ts ***!
      \***********************************************/

    /*! exports provided: ForgotPageModule */

    /***/
    function Ityv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function () {
        return ForgotPageModule;
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


      var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgot-routing.module */
      "XRev");
      /* harmony import */


      var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgot.page */
      "GRmH");
      /* harmony import */


      var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/directives/shared.module */
      "dVnR");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/components/components.module */
      "j1ZV");

      var ForgotPageModule = function ForgotPageModule() {
        _classCallCheck(this, ForgotPageModule);
      };

      ForgotPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
      })], ForgotPageModule);
      /***/
    },

    /***/
    "XRev":
    /*!*******************************************************!*\
      !*** ./src/app/pages/forgot/forgot-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: ForgotPageRoutingModule */

    /***/
    function XRev(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPageRoutingModule", function () {
        return ForgotPageRoutingModule;
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


      var _forgot_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot.page */
      "GRmH");

      var routes = [{
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPage"]
      }];

      var ForgotPageRoutingModule = function ForgotPageRoutingModule() {
        _classCallCheck(this, ForgotPageRoutingModule);
      };

      ForgotPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgotPageRoutingModule);
      /***/
    },

    /***/
    "svYT":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function svYT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header></app-header>\r\n<app-page-head title=\"{{'Forgot Password?' | translate}}\" [back]=\"true\"></app-page-head>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <div class=\"login-logo\">\r\n    <img src=\"assets/moped.svg\" class=\"logo_icon\" alt=\"\">\r\n  </div>\r\n\r\n  <form #loginForm=\"ngForm\" novalidate>\r\n    <ion-list lines=\"none\" class=\"form-inputs\">\r\n      <ion-item lines=\"none\">\r\n        <ion-input [(ngModel)]=\"login.email\" [placeholder]=\"('Email' | translate) || '&nbsp;'\" name=\"email\"\r\n          #email=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-text color=\"danger\">\r\n        <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\r\n          {{'Email is required' | translate}}\r\n        </p>\r\n      </ion-text>\r\n\r\n    </ion-list>\r\n\r\n    <ion-row class=\"ion-no-margin ion-no-padding\" style=\"margin-top: 20px;\">\r\n      <ion-col class=\"ion-no-margin ion-no-padding\">\r\n        <ion-button class=\"btn-submit\" (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\">\r\n          {{'Send Link' | translate}}\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-forgot-forgot-module-es5.js.map