(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "aTZN");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "bP1B");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "dVnR");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "H+1c":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --box-shadow:none;\n}\n\nion-footer {\n  --box-shadow:none;\n}\n\nion-toolbar {\n  border-color: none !important;\n}\n\nion-toolbar ion-title {\n  --color: white;\n}\n\n.ion-padding {\n  --padding-top: 20px;\n  --padding-end: 20px;\n  --padding-bottom: 20px;\n  --padding-start: 20px;\n}\n\n.login-logo {\n  text-align: center;\n  margin: auto;\n  right: 0px;\n  left: 0px;\n  margin-top: 20%;\n  margin-bottom: 20px;\n}\n\n.login-logo .logo_icon {\n  width: 110px !important;\n}\n\n.login-logo .login-name {\n  margin: 0px;\n  font-size: 1.5rem;\n}\n\n.login-logo .subTitle {\n  margin: 0px;\n  font-size: 1rem;\n}\n\n.frgTag {\n  font-size: 14px;\n  margin: 5px 0 0;\n  text-align: right;\n  color: var(--ion-color-primary);\n}\n\n.login-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\nion-list {\n  --ion-background-color:transparent;\n  margin: 0px;\n}\n\nion-item:not(:first-child) {\n  margin-top: 10px;\n}\n\n.createAcc {\n  margin: 15px 0 0;\n  text-align: center;\n}\n\n.createAcc .registerTag {\n  color: var(--ion-color-primary);\n}\n\n.btns {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 0px;\n}\n\n.btns .flagActive {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  border: 2px solid var(--ion-color-primary);\n  margin: 0px 10px;\n}\n\n.btns .flagDeactive {\n  height: 45px;\n  width: 45px;\n  margin: 0px 10px;\n  opacity: .5;\n}\n\n.login-buttons .button {\n  margin: 0;\n  font-size: 16px;\n  --padding-end: 10px;\n  --padding-start: 10px;\n}\n\n.login-buttons .button:not(:first-child) {\n  margin-top: 10px;\n}\n\n.login-buttons .facebook {\n  --color: #fff;\n  --border-width: 0;\n  --background: #0F52A1;\n}\n\n.login-buttons .google {\n  --color: #676767;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: #676767;\n  --background: transparent;\n}\n\n.login-buttons .icon {\n  margin-right: 10px;\n}\n\n.login-buttons .icon img {\n  display: block;\n  max-width: 100%;\n}\n\n.login-separator {\n  display: block;\n  margin: 25px 0;\n  font-size: 14px;\n  color: #676767;\n  line-height: 1.2;\n  overflow: hidden;\n  text-align: center;\n}\n\n.login-separator span {\n  padding: 0 15px;\n  position: relative;\n  vertical-align: top;\n  display: inline-block;\n}\n\n.login-separator span:after, .login-separator span:before {\n  top: 50%;\n  content: '';\n  width: 50vw;\n  position: absolute;\n  border-top: 1px solid #D8D3D3;\n}\n\n.login-separator span:after {\n  left: 100%;\n}\n\n.login-separator span:before {\n  right: 100%;\n}\n\n.form-inputs {\n  padding: 0;\n  margin-bottom: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWE7QUFDakI7O0FBQ0E7RUFDSSxpQkFBYTtBQUVqQjs7QUFBQTtFQUNJLDZCQUE2QjtBQUdqQzs7QUFKQTtFQUdRLGNBQVE7QUFLaEI7O0FBREE7RUFDSSxtQkFBYztFQUNkLG1CQUFjO0VBQ2Qsc0JBQWlCO0VBQ2pCLHFCQUFnQjtBQUlwQjs7QUFEQTtFQUNRLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsbUJBQW1CO0FBSTNCOztBQVZBO0VBUVksdUJBQXVCO0FBTW5DOztBQWRBO0VBV1ksV0FBVztFQUNYLGlCQUFpQjtBQU83Qjs7QUFuQkE7RUFlWSxXQUFXO0VBQ1gsZUFBZTtBQVEzQjs7QUFMSTtFQUNJLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLCtCQUE4QjtBQVF0Qzs7QUFOSTtFQUNLLGdCQUFnQjtBQVN6Qjs7QUFQSTtFQUNJLGdCQUFnQjtBQVV4Qjs7QUFSSTtFQUNJLGtDQUF1QjtFQUN2QixXQUFXO0FBV25COztBQVRJO0VBRVEsZ0JBQWdCO0FBVzVCOztBQVBHO0VBQ0ksZ0JBQWdCO0VBQ2Ysa0JBQWtCO0FBVTFCOztBQVpHO0VBSVMsK0JBQStCO0FBWTNDOztBQVRBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQVlyQjs7QUFqQkE7RUFPUSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsZ0JBQWdCO0FBY3hCOztBQXpCQTtFQWNRLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFlbkI7O0FBWEE7RUFFUSxTQUFTO0VBQ1QsZUFBZTtFQUNmLG1CQUFjO0VBQ2QscUJBQWdCO0FBYXhCOztBQWxCQTtFQU9ZLGdCQUFnQjtBQWU1Qjs7QUF0QkE7RUFXUSxhQUFRO0VBQ1IsaUJBQWU7RUFDZixxQkFBYTtBQWVyQjs7QUE1QkE7RUFnQlEsZ0JBQVE7RUFDUixtQkFBZTtFQUNmLHFCQUFlO0VBQ2YsdUJBQWU7RUFDZix5QkFBYTtBQWdCckI7O0FBcENBO0VBdUJRLGtCQUFrQjtBQWlCMUI7O0FBeENBO0VBeUJZLGNBQWM7RUFDZCxlQUFlO0FBbUIzQjs7QUFkQTtFQUNJLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQWlCdEI7O0FBeEJBO0VBU1EsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBbUI3Qjs7QUEvQkE7RUFjWSxRQUFRO0VBQ1IsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsNkJBQTZCO0FBcUJ6Qzs7QUF2Q0E7RUFxQlksVUFBVTtBQXNCdEI7O0FBM0NBO0VBd0JZLFdBQVc7QUF1QnZCOztBQWxCQTtFQUNJLFVBQVU7RUFDVixtQkFBbUI7QUFxQnZCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcbmlvbi1mb290ZXJ7XHJcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcclxufVxyXG5pb24tdG9vbGJhcntcclxuICAgIGJvcmRlci1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgaW9uLXRpdGxlIHtcclxuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuLmlvbi1wYWRkaW5ne1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG59XHJcblxyXG4ubG9naW4tbG9nbyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAubG9nb19pY29ue1xyXG4gICAgICAgICAgICB3aWR0aDogMTEwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ2luLW5hbWV7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN1YlRpdGxle1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mcmdUYWd7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDAgMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgICAubG9naW4tbG9nbyBpbWcge1xyXG4gICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG4gICAgLmxpc3Qge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICBpb24tbGlzdHtcclxuICAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKXtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgIC5jcmVhdGVBY2N7XHJcbiAgICAgICBtYXJnaW46IDE1cHggMCAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAucmVnaXN0ZXJUYWd7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICB9XHJcbiAgIH0gXHJcbi5idG5ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIC5mbGFnQWN0aXZle1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuZmxhZ0RlYWN0aXZle1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubG9naW4tYnV0dG9uc3tcclxuICAgIC5idXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpe1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mYWNlYm9va3tcclxuICAgICAgICAtLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzBGNTJBMTtcclxuICAgIH1cclxuICAgIC5nb29nbGV7XHJcbiAgICAgICAgLS1jb2xvcjogIzY3Njc2NztcclxuICAgICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAtLWJvcmRlci1jb2xvcjogIzY3Njc2NztcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgLmljb257XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sb2dpbi1zZXBhcmF0b3J7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMjVweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM2NzY3Njc7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHNwYW57XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAmOmFmdGVyLCAmOmJlZm9yZXtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICB3aWR0aDogNTB2dztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0Q4RDNEMztcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgbGVmdDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZvcm0taW5wdXRze1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar class=\"header\" color=\"primary\">\r\n  <ion-buttons>\r\n    <ion-button>\r\n      <ion-icon slot=\"icon-only\" src=\"assets/icon/woldwide.svg\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-buttons slot=\"end\">\r\n    <ion-title class=\"logo\">LLE</ion-title>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <div class=\"page-head-panel\">\r\n    <strong class=\"page-head-panel__title\">{{'Log In' | translate}}</strong>\r\n  </div>\r\n\r\n  <div class=\"login-buttons\">\r\n    <ion-button class=\"facebook\" expand=\"block\">\r\n      <span class=\"icon\"><img slot=\"start\" src=\"assets/icon/facebook.svg\" alt=\"f\"/></span>\r\n      {{'Continue with facebook' | translate}}\r\n    </ion-button>\r\n    <ion-button class=\"google\" expand=\"block\">\r\n      <span class=\"icon\"><img slot=\"start\" src=\"assets/icon/google.svg\" alt=\"G\"/></span>\r\n      {{'Log in with email' | translate}}\r\n    </ion-button>\r\n  </div>\r\n\r\n  <span class=\"login-separator\"><span>OR</span></span>\r\n\r\n  <form #loginForm=\"ngForm\" novalidate>\r\n    <ion-list lines=\"none\" class=\"form-inputs\">\r\n      <ion-item lines=\"none\">\r\n        <ion-input [(ngModel)]=\"login.email\" type=\"email\" [placeholder]=\"('Email' | translate) || '&nbsp;'\" name=\"email\"\r\n          #email=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-text color=\"danger\">\r\n        <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\r\n          {{'Email is required' | translate}}\r\n        </p>\r\n      </ion-text>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-input [(ngModel)]=\"login.password\" name=\"password\" [placeholder]=\"('password' | translate) || '&nbsp;'\"\r\n          type=\"password\" #password=\"ngModel\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-text color=\"danger\">\r\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\r\n          {{'Password is required' | translate}}\r\n        </p>\r\n      </ion-text>\r\n      <p class=\"frgTag\" (click)=\"resetPass()\">{{'Forgot Password?' | translate}}</p>\r\n    </ion-list>\r\n\r\n    <ion-row class=\"ion-no-margin ion-no-padding\">\r\n      <ion-col class=\"ion-no-margin ion-no-padding\">\r\n        <ion-button class=\"btn_class\" (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\" [disabled]=\"isLogin\">\r\n          <span *ngIf=\"!isLogin\"> {{'Log In' | translate}}</span>\r\n          <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </form>\r\n  <p class=\"createAcc\" (click)=\"register()\">{{'Dont have an account?' | translate}}\r\n    <span class=\"registerTag\">{{'Sign up' | translate}}</span>\r\n  </p>\r\n  <!-- <div class=\"btns\">\r\n    <img src=\"assets/imgs/en.png\" (click)=\"changeLng('en')\"\r\n      [ngClass]=\"getClassName() == 'en' ? 'flagActive':'flagDeactive'\" alt=\"\">\r\n    <img src=\"assets/imgs/spanish.png\" (click)=\"changeLng('spanish')\"\r\n      [ngClass]=\"getClassName() == 'spanish' ? 'flagActive':'flagDeactive'\" alt=\"\">\r\n  </div> -->\r\n</ion-content>");

/***/ }),

/***/ "aTZN":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "bP1B");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "bP1B":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "TuYN");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "H+1c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "wljF");











let LoginPage = class LoginPage {
    constructor(router, api, util, navCtrl, translate, oneSignal) {
        this.router = router;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.oneSignal = oneSignal;
        this.login = { email: '', password: '' };
        this.submitted = false;
        this.isLogin = false;
        const lng = localStorage.getItem('language');
        if (!lng || lng === null) {
            localStorage.setItem('language', 'en');
        }
        this.translate.use(localStorage.getItem('language'));
        this.oneSignal.getIds().then((data) => {
            console.log('iddddd==========', data);
            localStorage.setItem('fcm', data.userId);
        });
    }
    ngOnInit() {
    }
    onLogin(form) {
        console.log('form', form);
        this.submitted = true;
        if (form.valid) {
            const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailfilter.test(this.login.email)) {
                this.util.showToast(this.util.translate('Please enter valid email'), 'danger', 'bottom');
                return false;
            }
            console.log('login');
            this.isLogin = true;
            this.api.login(this.login.email, this.login.password).then((userData) => {
                console.log(userData);
                this.api.getProfile(userData.uid).then((info) => {
                    console.log(info);
                    if (info && info.status === 'active') {
                        localStorage.setItem('uid', userData.uid);
                        localStorage.setItem('help', userData.uid);
                        this.isLogin = false;
                        this.util.publishLoggedIn('LoggedIn');
                        // this.navCtrl.back();
                        this.router.navigate(['/']);
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                            title: this.util.translate('Error'),
                            text: this.util.translate('Your are blocked please contact administrator'),
                            icon: 'error',
                            showConfirmButton: true,
                            showCancelButton: true,
                            confirmButtonText: this.util.translate('Need Help?'),
                            backdrop: false,
                            background: 'white'
                        }).then(data => {
                            if (data && data.value) {
                                localStorage.setItem('help', userData.uid);
                                this.router.navigate(['inbox']);
                            }
                        });
                    }
                }).catch(err => {
                    console.log(err);
                    this.util.showToast(`${err}`, 'danger', 'bottom');
                });
            }).catch(err => {
                if (err) {
                    console.log(err);
                    this.util.showToast(`${err}`, 'danger', 'bottom');
                }
            }).then(el => this.isLogin = false);
        }
    }
    resetPass() {
        this.router.navigate(['/forgot']);
    }
    register() {
        this.router.navigate(['register']);
    }
    getClassName() {
        return localStorage.getItem('language');
    }
    changeLng(lng) {
        localStorage.setItem('language', lng);
        this.translate.use(lng);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_10__["OneSignal"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
        _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_10__["OneSignal"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map