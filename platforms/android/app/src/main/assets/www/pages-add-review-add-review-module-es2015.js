(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-review-add-review-module"],{

/***/ "/5Y+":
/*!***************************************************************!*\
  !*** ./src/app/pages/add-review/add-review-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AddReviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewPageRoutingModule", function() { return AddReviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_review_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-review.page */ "LipZ");




const routes = [
    {
        path: '',
        component: _add_review_page__WEBPACK_IMPORTED_MODULE_3__["AddReviewPage"]
    }
];
let AddReviewPageRoutingModule = class AddReviewPageRoutingModule {
};
AddReviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddReviewPageRoutingModule);



/***/ }),

/***/ "08Sr":
/*!*******************************************************!*\
  !*** ./src/app/pages/add-review/add-review.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding-top: 20px;\n}\n.main_content_div .head_lbl {\n  font-weight: 600;\n  font-size: 18px;\n  padding-left: 20px;\n}\n.main_content_div .flex_div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 10px;\n  width: 100%;\n  align-items: center;\n  padding: 0px 20px;\n}\n.main_content_div .flex_div .first_div {\n  display: flex;\n  justify-content: space-between;\n  width: 70%;\n}\n.main_content_div .flex_div .first_div .rate_div {\n  border: 1px solid lightgray;\n  color: lightgray;\n  border-radius: 25px;\n  padding: 3px 10px;\n  display: flex;\n  flex-direction: row;\n}\n.main_content_div .flex_div .first_div .rate_div ion-icon {\n  font-size: 15px;\n}\n.main_content_div .flex_div .first_div .rate_div span {\n  font-size: 18px;\n  font-weight: 600;\n}\n.main_content_div .flex_div .first_div .rate1 {\n  background: #ed5a74;\n  color: white;\n  border: 1px solid #ed5a74;\n}\n.main_content_div .flex_div .first_div .rate2 {\n  background: #f7c007;\n  color: white;\n  border: 1px solid #f7c007;\n}\n.main_content_div .flex_div .first_div .rate3 {\n  background: #7bdb7b;\n  color: white;\n  border: 1px solid #7bdb7b;\n}\n.main_content_div .flex_div .first_div .rate4 {\n  background: #13ad13;\n  color: white;\n  border: 1px solid #13ad13;\n}\n.main_content_div .flex_div .first_div .rate5 {\n  background: #085c08;\n  color: white;\n  border: 1px solid #085c08;\n}\n.main_content_div .flex_div .second_div .rate1 {\n  color: #ed5a74;\n}\n.main_content_div .flex_div .second_div .rate2 {\n  color: #f7c007;\n}\n.main_content_div .flex_div .second_div .rate3 {\n  color: #7bdb7b;\n}\n.main_content_div .flex_div .second_div .rate4 {\n  color: #13ad13;\n}\n.main_content_div .flex_div .second_div .rate5 {\n  color: #085c08;\n}\n.main_content_div .line_div {\n  width: 100%;\n  height: 3px;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.main_content_div .lower_div {\n  padding: 20px;\n}\n.main_content_div .lower_div .head_lbl2 {\n  font-weight: 600;\n  font-size: 18px;\n}\n.main_content_div .lower_div .gray_div {\n  margin-top: 10px;\n  height: 70px;\n  width: 70px;\n  border-radius: 5px;\n  border: 1px solid lightgray;\n  background: #f3f3f3;\n  position: relative;\n}\n.main_content_div .lower_div .gray_div .camera {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 20px;\n}\n.main_content_div .lower_div ion-textarea {\n  border-bottom: 1px solid lightgray;\n}\n.main_content_div .lower_div .small_gray {\n  font-size: 12px;\n  color: gray;\n  margin-top: 10px;\n}\n.sub_btn {\n  --background: var(--ion-color-primary);\n  --border-radius: 5px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLXJldmlldy9hZGQtcmV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFFQSxpQkFBQTtBQUFKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNSO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUFRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBQUVaO0FBQVk7RUFDSSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUVoQjtBQURnQjtFQUNJLGVBQUE7QUFHcEI7QUFBZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFFcEI7QUFHWTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBRGhCO0FBR1k7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQURoQjtBQUdZO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFEaEI7QUFHWTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBRGhCO0FBR1k7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQURoQjtBQU1ZO0VBQ0ksY0FBQTtBQUpoQjtBQU1ZO0VBQ0ksY0FBQTtBQUpoQjtBQU1ZO0VBQ0ksY0FBQTtBQUpoQjtBQU1ZO0VBQ0ksY0FBQTtBQUpoQjtBQU1ZO0VBQ0ksY0FBQTtBQUpoQjtBQVFJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFOUjtBQVNJO0VBQ0ksYUFBQTtBQVBSO0FBU1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFQWjtBQVVRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUlo7QUFVWTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFSaEI7QUFZUTtFQUNJLGtDQUFBO0FBVlo7QUFhUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFYWjtBQWVBO0VBQ0ksc0NBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBWkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGQtcmV2aWV3L2FkZC1yZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGggOiAxMDAlO1xuICAgIC8vIHBhZGRpbmc6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgLmhlYWRfbGJse1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB9XG4gICAgLmZsZXhfZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICAgICAgLmZpcnN0X2RpdntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuXG4gICAgICAgICAgICAucmF0ZV9kaXZ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yYXRlMXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWQ1YTc0O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWQ1YTc0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdGUye1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmN2MwMDc7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmN2MwMDc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmF0ZTN7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzdiZGI3YjtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzdiZGI3YjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yYXRlNHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTNhZDEzO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTNhZDEzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdGU1e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwODVjMDg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwODVjMDg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc2Vjb25kX2RpdntcbiAgICAgICAgICAgIC5yYXRlMXtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2VkNWE3NDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yYXRlMntcbiAgICAgICAgICAgICAgICBjb2xvcjogI2Y3YzAwN1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdGUze1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjN2JkYjdiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdGU0e1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTNhZDEzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdGU1e1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDg1YzA4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5saW5lX2RpdntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLmxvd2VyX2RpdntcbiAgICAgICAgcGFkZGluZzogMjBweDtcblxuICAgICAgICAuaGVhZF9sYmwye1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmF5X2RpdntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIC5jYW1lcmF7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi10ZXh0YXJlYXtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAuc21hbGxfZ3JheXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5zdWJfYnRue1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */");

/***/ }),

/***/ "AlTS":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-review/add-review.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Add Review' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <ion-label class=\"head_lbl\">{{'Rate your Experiance' | translate}}</ion-label>\n\n    <div class=\"flex_div\">\n      <div class=\"first_div\">\n        <div class=\"rate_div\" [class.rate1]=\"rate==1\" [class.rate2]=\"rate==2\" [class.rate3]=\"rate==3\"\n          [class.rate4]=\"rate==4\" [class.rate5]=\"rate==5\" (click)=\"onClick(1)\"><span>1</span>\n          <ion-icon name=\"star\"></ion-icon>\n        </div>\n        <div class=\"rate_div\" [class.rate2]=\"rate==2\" [class.rate3]=\"rate==3\" [class.rate4]=\"rate==4\"\n          [class.rate5]=\"rate==5\" (click)=\"onClick(2)\"><span>2</span>\n          <ion-icon name=\"star\"></ion-icon>\n        </div>\n        <div class=\"rate_div\" [class.rate3]=\"rate==3\" [class.rate4]=\"rate==4\" [class.rate5]=\"rate==5\"\n          (click)=\"onClick(3)\"><span>3</span>\n          <ion-icon name=\"star\"></ion-icon>\n        </div>\n        <div class=\"rate_div\" [class.rate4]=\"rate==4\" [class.rate5]=\"rate==5\" (click)=\"onClick(4)\"><span>4</span>\n          <ion-icon name=\"star\"></ion-icon>\n        </div>\n        <div class=\"rate_div\" [class.rate5]=\"rate==5\" (click)=\"onClick(5)\"><span>5</span>\n          <ion-icon name=\"star\"></ion-icon>\n        </div>\n      </div>\n      <div class=\"second_div\">\n        <ion-label *ngIf=\"rate==1\" class=\"rate1\">{{'Horrible' | translate}}</ion-label>\n        <ion-label *ngIf=\"rate==2\" class=\"rate2\">{{'Bad' | translate}}</ion-label>\n        <ion-label *ngIf=\"rate==3\" class=\"rate3\">{{'Average' | translate}}</ion-label>\n        <ion-label *ngIf=\"rate==4\" class=\"rate4\">{{'Good' | translate}}</ion-label>\n        <ion-label *ngIf=\"rate==5\" class=\"rate5\">{{'Excellent' | translate}}</ion-label>\n      </div>\n    </div>\n\n    <div class=\"line_div\"></div>\n\n    <div class=\"lower_div\" (click)=\"openCamera()\" *ngIf=\"image ==''\">\n      <ion-label class=\"head_lbl2\">{{'Add Photos' | translate}}</ion-label>\n\n      <div class=\"gray_div\">\n        <ion-icon class=\"camera\" name=\"camera\"></ion-icon>\n      </div>\n    </div>\n    <div class=\"lower_div\" (click)=\"openCamera()\" *ngIf=\"image !=''\">\n\n      <div class=\"gray_div\" class=\"back_image\" [style.backgroundImage]=\"'url('+image+')'\">\n      </div>\n    </div>\n    <div class=\"line_div\"></div>\n\n    <div class=\"lower_div\">\n      <ion-label class=\"head_lbl2\">{{'Anything else you want to add' | translate}} <span>0/100</span></ion-label>\n      <ion-textarea rows=\"4\" [(ngModel)]=\"descriptions\" placeholder=\"Write detailed review here..\"></ion-textarea>\n\n      <ion-label class=\"small_gray\">\n        {{'Be polite and friendly. This is a place for love and feedback, not hate. You can use @friends and #tags as well.' | translate}}\n      </ion-label>\n    </div>\n    <div class=\"line_div\"></div>\n\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-button (click)=\"addReview()\" expand=\"block\" class=\"sub_btn\">\n      {{'Submit Dinimg Review' | translate}}\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "LipZ":
/*!*****************************************************!*\
  !*** ./src/app/pages/add-review/add-review.page.ts ***!
  \*****************************************************/
/*! exports provided: AddReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewPage", function() { return AddReviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_review_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-review.page.html */ "AlTS");
/* harmony import */ var _add_review_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-review.page.scss */ "08Sr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");










let AddReviewPage = class AddReviewPage {
    constructor(route, api, actionSheetController, camera, util, navCtrl) {
        this.route = route;
        this.api = api;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.util = util;
        this.navCtrl = navCtrl;
        this.rate = 1;
        this.coverImage = '';
        this.image = '';
        this.descriptions = '';
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            console.log('data=>', data);
            if (data.hasOwnProperty('id')) {
                this.id = data.id;
                this.getDetails();
            }
        });
    }
    getDetails() {
        this.api.getVenueDetails(this.id).then((data) => {
            console.log(data);
            if (data) {
                this.ratting = data.ratting;
                this.totalRatting = data.totalRatting;
            }
        }, error => {
            console.log('errir', error);
        }).catch(error => {
            console.log(error);
        });
    }
    onClick(val) {
        this.rate = val;
    }
    onChange(val) {
        console.log(val);
    }
    addReview() {
        const myRate = (this.ratting * this.rate);
        let totalRatting = Math.round((this.totalRatting * 5) / myRate);
        console.log('total', totalRatting);
        if (!totalRatting) {
            totalRatting = this.rate;
        }
        console.log(totalRatting);
        const review = {
            id: localStorage.getItem('uid'),
            descriptions: this.descriptions,
            rate: this.rate,
            cover: this.coverImage,
            restId: this.id,
            vid: this.id,
            uid: localStorage.getItem('uid')
        };
        this.util.show();
        console.log('review', review);
        this.api.addReview(review).then((data) => {
            const restParam = {
                ratting: this.ratting + 1,
                totalRatting: totalRatting,
                uid: this.id
            };
            console.log('restParam', restParam);
            this.api.updateVenue(restParam).then((newUpdate) => {
                console.log(newUpdate);
                this.util.hide();
                this.util.showToast(this.util.translate('Review added succesfully'), 'success', 'bottom');
                this.util.publishReview('hello');
                this.navCtrl.navigateRoot(['/tabs/tab4']);
            }, error => {
                console.log('err', error);
                this.util.hide();
            }).catch(error => {
                this.util.hide();
                console.log(error);
            });
        }, error => {
            console.log('err', error);
            this.util.hide();
        }).catch(error => {
            this.util.hide();
            console.log(error);
        });
    }
    openCamera() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: this.util.translate('Choose from'),
                buttons: [{
                        text: this.util.translate('Gallery'),
                        icon: 'images',
                        handler: () => {
                            console.log('Images clicked');
                            this.opemCamera('gallery');
                        }
                    }, {
                        text: this.util.translate('Camera'),
                        icon: 'camera',
                        handler: () => {
                            console.log('camera clicked');
                            this.opemCamera('camera');
                        }
                    }, {
                        text: this.util.translate('Cancel'),
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    opemCamera(type) {
        const options = {
            quality: 100,
            targetHeight: 700,
            targetWidth: 700,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: type === 'camera' ? 1 : 0
        };
        console.log('open');
        this.camera.getPicture(options).then((imageData) => {
            const base64Image = 'data:image/jpeg;base64,' + imageData;
            this.image = base64Image;
            this.util.show();
            const id = localStorage.getItem('uid') + '/' + this.util.makeid(10);
            firebase__WEBPACK_IMPORTED_MODULE_8__["storage"]().ref().child(localStorage.getItem('uid')).child(btoa(id) + '.jpg')
                .putString(base64Image, 'data_url').then((snapshot) => {
                this.util.hide();
                snapshot.ref.getDownloadURL().then((url) => {
                    console.log('url uploaded', url);
                    this.coverImage = url;
                });
            }, error => {
                this.util.hide();
                console.log(error);
            }).catch((error) => {
                console.log(error);
                this.util.hide();
            });
        }, (err) => {
            this.util.hide();
        });
    }
};
AddReviewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
AddReviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-review',
        template: _raw_loader_add_review_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_review_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
], AddReviewPage);



/***/ }),

/***/ "Z3QP":
/*!*******************************************************!*\
  !*** ./src/app/pages/add-review/add-review.module.ts ***!
  \*******************************************************/
/*! exports provided: AddReviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewPageModule", function() { return AddReviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_review_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-review-routing.module */ "/5Y+");
/* harmony import */ var _add_review_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-review.page */ "LipZ");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "dVnR");








let AddReviewPageModule = class AddReviewPageModule {
};
AddReviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_review_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddReviewPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_add_review_page__WEBPACK_IMPORTED_MODULE_6__["AddReviewPage"]]
    })
], AddReviewPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-add-review-add-review-module-es2015.js.map