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
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --box-shadow:none;\n}\n\nion-footer {\n  --box-shadow:none;\n}\n\nion-toolbar {\n  border-color: none !important;\n}\n\nion-toolbar ion-title {\n  --color: white;\n}\n\n.ion-padding {\n  --padding-top: 20px;\n  --padding-end: 20px;\n  --padding-bottom: 20px;\n  --padding-start: 20px;\n}\n\n.login-logo {\n  text-align: center;\n  margin: auto;\n  right: 0px;\n  left: 0px;\n  margin-top: 20%;\n  margin-bottom: 20px;\n}\n\n.login-logo .logo_icon {\n  width: 110px !important;\n}\n\n.login-logo .login-name {\n  margin: 0px;\n  font-size: 1.5rem;\n}\n\n.login-logo .subTitle {\n  margin: 0px;\n  font-size: 1rem;\n}\n\n.frgTag {\n  font-size: 14px;\n  margin: 5px 0 0;\n  text-align: right;\n  color: var(--ion-color-primary);\n}\n\n.login-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\nion-list {\n  --ion-background-color:transparent;\n  margin: 0px;\n}\n\nion-item:not(:first-child) {\n  margin-top: 10px;\n}\n\n.createAcc {\n  margin: 15px 0 0;\n  text-align: center;\n}\n\n.createAcc .registerTag {\n  color: var(--ion-color-primary);\n}\n\n.btns {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 0px;\n}\n\n.btns .flagActive {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  border: 2px solid var(--ion-color-primary);\n  margin: 0px 10px;\n}\n\n.btns .flagDeactive {\n  height: 45px;\n  width: 45px;\n  margin: 0px 10px;\n  opacity: .5;\n}\n\n.login-buttons .button-native {\n  margin-top: 10px;\n}\n\n.login-buttons .button-native:not(:first-child) {\n  margin-top: 10px;\n}\n\n.login-separator {\n  display: block;\n  margin: 25px 0;\n  font-size: 14px;\n  color: #676767;\n  line-height: 1.2;\n  overflow: hidden;\n  text-align: center;\n}\n\n.login-separator span {\n  padding: 0 15px;\n  position: relative;\n  vertical-align: top;\n  display: inline-block;\n}\n\n.login-separator span:after, .login-separator span:before {\n  top: 50%;\n  content: '';\n  width: 50vw;\n  position: absolute;\n  border-top: 1px solid #D8D3D3;\n}\n\n.login-separator span:after {\n  left: 100%;\n}\n\n.login-separator span:before {\n  right: 100%;\n}\n\n.form-inputs {\n  padding: 0;\n  margin-bottom: 30px;\n}\n\n.btn-submit {\n  margin: 0;\n}\n\n.eye-icon {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n  width: 48px;\n  z-index: 15;\n  height: auto;\n  border: none;\n  display: flex;\n  font-size: 14px;\n  border-radius: 0;\n  --color: #676767;\n  --background: none;\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n}\n\n.password ion-input {\n  --padding-end: 32px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWE7QUFDakI7O0FBQ0E7RUFDSSxpQkFBYTtBQUVqQjs7QUFBQTtFQUNJLDZCQUE2QjtBQUdqQzs7QUFKQTtFQUdRLGNBQVE7QUFLaEI7O0FBREE7RUFDSSxtQkFBYztFQUNkLG1CQUFjO0VBQ2Qsc0JBQWlCO0VBQ2pCLHFCQUFnQjtBQUlwQjs7QUFEQTtFQUNRLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsbUJBQW1CO0FBSTNCOztBQVZBO0VBUVksdUJBQXVCO0FBTW5DOztBQWRBO0VBV1ksV0FBVztFQUNYLGlCQUFpQjtBQU83Qjs7QUFuQkE7RUFlWSxXQUFXO0VBQ1gsZUFBZTtBQVEzQjs7QUFMSTtFQUNJLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLCtCQUE4QjtBQVF0Qzs7QUFOSTtFQUNLLGdCQUFnQjtBQVN6Qjs7QUFQSTtFQUNJLGdCQUFnQjtBQVV4Qjs7QUFSSTtFQUNJLGtDQUF1QjtFQUN2QixXQUFXO0FBV25COztBQVRJO0VBRVEsZ0JBQWdCO0FBVzVCOztBQVBHO0VBQ0ksZ0JBQWdCO0VBQ2Ysa0JBQWtCO0FBVTFCOztBQVpHO0VBSVMsK0JBQStCO0FBWTNDOztBQVJBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQVdyQjs7QUFoQkE7RUFPUSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsZ0JBQWdCO0FBYXhCOztBQXhCQTtFQWNRLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFjbkI7O0FBVkE7RUFFUSxnQkFBZ0I7QUFZeEI7O0FBZEE7RUFJWSxnQkFBZ0I7QUFjNUI7O0FBVEE7RUFDSSxjQUFjO0VBQ2QsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFZdEI7O0FBbkJBO0VBU1EsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBYzdCOztBQTFCQTtFQWNZLFFBQVE7RUFDUixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFnQnpDOztBQWxDQTtFQXFCWSxVQUFVO0FBaUJ0Qjs7QUF0Q0E7RUF3QlksV0FBVztBQWtCdkI7O0FBYkE7RUFDSSxVQUFVO0VBQ1YsbUJBQW1CO0FBZ0J2Qjs7QUFiQTtFQUNJLFNBQVM7QUFnQmI7O0FBYkE7RUFDSSxNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFRO0VBQ1Isa0JBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQWdCM0I7O0FBYkE7RUFFUSxtQkFBYztBQWV0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbn1cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICBib3JkZXItY29sb3I6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pb24tcGFkZGluZ3tcclxuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxufVxyXG5cclxuLmxvZ2luLWxvZ28ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgLmxvZ29faWNvbntcclxuICAgICAgICAgICAgd2lkdGg6IDExMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dpbi1uYW1le1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWJUaXRsZXtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZnJnVGFne1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW46IDVweCAwIDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luLWxvZ28gaW1nIHtcclxuICAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuICAgIC5saXN0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgaW9uLWxpc3R7XHJcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCl7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAuY3JlYXRlQWNje1xyXG4gICAgICAgbWFyZ2luOiAxNXB4IDAgMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgLnJlZ2lzdGVyVGFne1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgfVxyXG4gICB9XHJcblxyXG4uYnRuc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICAuZmxhZ0FjdGl2ZXtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmZsYWdEZWFjdGl2ZXtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgIH1cclxufVxyXG5cclxuLmxvZ2luLWJ1dHRvbnN7XHJcbiAgICAuYnV0dG9uLW5hdGl2ZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpe1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmxvZ2luLXNlcGFyYXRvcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAyNXB4IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzY3Njc2NztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgc3BhbntcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICY6YWZ0ZXIsICY6YmVmb3Jle1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRDhEM0QzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmJlZm9yZXtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZm9ybS1pbnB1dHN7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmJ0bi1zdWJtaXR7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5leWUtaWNvbntcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICB6LWluZGV4OiAxNTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgLS1jb2xvcjogIzY3Njc2NztcclxuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBhc3N3b3Jke1xyXG4gICAgaW9uLWlucHV0e1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDMycHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<app-page-head title=\"{{'Log In' | translate}}\"></app-page-head>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <div class=\"login-buttons\">\r\n    <app-fb-btn></app-fb-btn>\r\n    <app-email-btn></app-email-btn>\r\n  </div>\r\n\r\n  <span class=\"login-separator\"><span>OR</span></span>\r\n\r\n  <form #loginForm=\"ngForm\" novalidate>\r\n    <ion-list lines=\"none\" class=\"form-inputs\">\r\n      <ion-item lines=\"none\">\r\n        <ion-input [(ngModel)]=\"login.email\" type=\"email\" [placeholder]=\"('Email address' | translate) || '&nbsp;'\" name=\"email\"\r\n          #email=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-text color=\"danger\">\r\n        <p [hidden]=\"email.valid || submitted == false\" class=\"error-msg\">\r\n          {{'Email is required' | translate}}\r\n        </p>\r\n      </ion-text>\r\n\r\n      <ion-item lines=\"none\" class=\"password\">\r\n        <ion-input [(ngModel)]=\"login.password\" name=\"password\" [placeholder]=\"('password' | translate) || '&nbsp;'\"\r\n          [type]=\"passwordType\" #password=\"ngModel\" required>\r\n        </ion-input>\r\n        <ion-button class=\"eye-icon\" clear item-end (click)='hideShowPassword()'>\r\n          <ion-icon [name]=\"passwordIcon\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n\r\n      <ion-text color=\"danger\">\r\n        <p [hidden]=\"password.valid || submitted == false\" class=\"error-msg\">\r\n          {{'Password is required' | translate}}\r\n        </p>\r\n      </ion-text>\r\n      <p class=\"frgTag\" (click)=\"resetPass()\">{{'Forgot Password?' | translate}}</p>\r\n    </ion-list>\r\n\r\n    <ion-row class=\"ion-no-margin ion-no-padding\">\r\n      <ion-col class=\"ion-no-margin ion-no-padding\">\r\n        <ion-button class=\"btn-submit\" (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\" [disabled]=\"isLogin\">\r\n          <span *ngIf=\"!isLogin\"> {{'Log In' | translate}}</span>\r\n          <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </form>\r\n\r\n  <p class=\"createAcc\" (click)=\"register()\">{{'Dont have an account?' | translate}}\r\n    <span class=\"registerTag\">{{'Sign up' | translate}}</span>\r\n  </p>\r\n</ion-content>");

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
        this.showPassword = false;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-outline';
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
    hideShowPassword() {
        this.showPassword = !this.showPassword;
        console.log(this.showPassword);
        this.passwordType = this.showPassword ? 'text' : 'password';
        this.passwordIcon = this.showPassword ? 'eye-off-outline' : 'eye-outline';
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