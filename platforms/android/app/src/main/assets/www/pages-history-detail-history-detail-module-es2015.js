(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-detail-history-detail-module"],{

/***/ "1AGm":
/*!***************************************************************!*\
  !*** ./src/app/pages/history-detail/history-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: HistoryDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDetailPageModule", function() { return HistoryDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _history_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-detail-routing.module */ "TU9k");
/* harmony import */ var _history_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history-detail.page */ "LiNW");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "dVnR");








let HistoryDetailPageModule = class HistoryDetailPageModule {
};
HistoryDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _history_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryDetailPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_history_detail_page__WEBPACK_IMPORTED_MODULE_6__["HistoryDetailPage"]]
    })
], HistoryDetailPageModule);



/***/ }),

/***/ "9BBu":
/*!***************************************************************!*\
  !*** ./src/app/pages/history-detail/history-detail.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header_div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header_div .support_lbl {\n  margin-right: 20px;\n  color: red;\n}\n.main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n.main_content_div .line_div {\n  height: 1px;\n  width: 100%;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .header_lbl {\n  font-weight: 600;\n  font-size: 22px;\n}\n.main_content_div .res_name {\n  margin-top: 20px;\n  font-weight: 600;\n  font-size: 18px;\n}\n.main_content_div .res_location {\n  font-size: 14px;\n  width: 90%;\n}\n.main_content_div .flex_div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n}\n.main_content_div .flex_div .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .flex_div .food_price {\n  font-size: 15px;\n}\n.main_content_div .flex_div .fav_lbl {\n  color: red;\n  font-size: 12px;\n  border: 1px solid red;\n  border-radius: 25px;\n  padding: 2px 10px;\n}\n.main_content_div .subNames {\n  border-bottom: 1px dashed lightgray;\n  padding-bottom: 5px;\n}\n.main_content_div .subNames .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .subNames .food_title .veg {\n  height: 12px;\n  width: 12px;\n}\n.main_content_div .subNames .food_title .rate_lbl {\n  background: #b2d9b2;\n  border: 1px solid #7bdb7b;\n  padding: 3px 8px;\n  border-radius: 5px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .subNames .flex_titles {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.main_content_div .subNames .flex_titles .sub_name {\n  margin: 0px;\n  color: black;\n  font-size: 12px;\n}\n.main_content_div .card_div {\n  border-bottom: 1px dashed lightgray;\n  padding-bottom: 5px;\n}\n.main_content_div .card_div .upper_div {\n  display: flex;\n  align-items: center;\n}\n.main_content_div .card_div .upper_div .veg {\n  width: 12px;\n  height: 12px;\n}\n.main_content_div .card_div .lower_div {\n  margin-top: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.main_content_div .card_div .lower_div .rate_lbl {\n  background: #b2d9b2;\n  border: 1px solid #7bdb7b;\n  padding: 3px 8px;\n  border-radius: 5px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .prise_lbl {\n  position: absolute;\n  right: 20px;\n}\n.main_content_div .head_gray {\n  color: gray;\n  font-size: 13px;\n}\n.main_content_div .small_lbl {\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n.main_content_div .red_lbl {\n  color: red;\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.btn_div {\n  display: flex;\n  justify-content: center;\n}\n.btn_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n  width: 130px;\n}\n.btn_div .ratae {\n  --background: var(--ion-color-warning);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGlzdG9yeS1kZXRhaWwvaGlzdG9yeS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBQ1I7QUFHQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBQUo7QUFFSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFHSTtFQUNJLGNBQUE7QUFEUjtBQUlJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBRlI7QUFJSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRlI7QUFJSTtFQUNJLGVBQUE7RUFDQSxVQUFBO0FBRlI7QUFLSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQUlRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBRlo7QUFJUTtFQUNJLGVBQUE7QUFGWjtBQUlRO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFGWjtBQU1JO0VBQ0ksbUNBQUE7RUFDQSxtQkFBQTtBQUpSO0FBS1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFIWjtBQUlZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFGaEI7QUFJWTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRmhCO0FBS1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUhaO0FBSVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFGaEI7QUFPSTtFQUNJLG1DQUFBO0VBQ0EsbUJBQUE7QUFMUjtBQU1RO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBSlo7QUFNWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBSmhCO0FBUVE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBTlo7QUFPWTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTGhCO0FBVUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFSUjtBQVdJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFUUjtBQVdJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFUUjtBQVdJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVRSO0FBYUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFWSjtBQVlJO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFWUjtBQVlJO0VBQ0ksc0NBQUE7QUFWUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpc3RvcnktZGV0YWlsL2hpc3RvcnktZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJfZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuc3VwcG9ydF9sYmx7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAubGluZV9kaXZ7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5oZWFkZXJfbGJse1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICAgIC5yZXNfbmFtZXtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICAucmVzX2xvY2F0aW9ue1xuICAgICAgICBmb250LXNpemU6IDE0cHg7ICAgICAgIFxuICAgICAgICB3aWR0aDogOTAlO1xuICAgIH1cblxuICAgIC5mbGV4X2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAuZm9vZF90aXRsZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5mb29kX3ByaWNle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5mYXZfbGJse1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zdWJOYW1lc3tcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIC5mb29kX3RpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAudmVne1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yYXRlX2xibHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYjJkOWIyO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YmRiN2I7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDhweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmZsZXhfdGl0bGVze1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAuc3ViX25hbWV7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkX2RpdntcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIC51cHBlcl9kaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgLnZlZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubG93ZXJfZGl2e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOztcbiAgICAgICAgICAgIC5yYXRlX2xibHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYjJkOWIyO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YmRiN2I7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDhweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucHJpc2VfbGJse1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgIH1cblxuICAgIC5oZWFkX2dyYXl7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICAgIC5zbWFsbF9sYmx7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG4gICAgLnJlZF9sYmx7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59XG5cbi5idG5fZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBpb24tYnV0dG9ue1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgIH1cbiAgICAucmF0YWV7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpOztcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "LiNW":
/*!*************************************************************!*\
  !*** ./src/app/pages/history-detail/history-detail.page.ts ***!
  \*************************************************************/
/*! exports provided: HistoryDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDetailPage", function() { return HistoryDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_history_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./history-detail.page.html */ "iXvb");
/* harmony import */ var _history_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history-detail.page.scss */ "9BBu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









let HistoryDetailPage = class HistoryDetailPage {
    constructor(route, api, router, util, alertController, navCtrl) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.util = util;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.orders = [];
        this.coupon = false;
        this.loaded = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            console.log('data=>', data);
            if (data.hasOwnProperty('id')) {
                this.id = data.id;
                this.getOrder();
            }
        });
    }
    getOrder() {
        this.api.getOrderById(this.id).then((data) => {
            this.loaded = true;
            console.log(data);
            if (data) {
                this.orderData = data;
                this.grandTotal = data.grandTotal;
                this.orders = JSON.parse(data.order);
                this.serviceTax = data.serviceTax;
                this.status = data.status;
                this.time = data.time;
                if (data && data.dId && data.dId.fullname) {
                    this.dname = data.dId.fullname;
                    this.driverFCM = data.dId.fcm_token;
                    console.log('driver FCM-------->', this.driverFCM);
                    this.dId = data.dId.uid;
                }
                this.total = data.total;
                this.address = data.vid.address;
                this.restName = data.vid.name;
                this.deliveryAddress = data.address.address;
                this.paid = data.paid;
                console.log('this', this.orders);
                this.getRest(data.vid.uid);
                this.coupon = data.appliedCoupon;
                this.dicount = data.dicount;
                // if (this.status === 'delivered') {
                //   this.presentAlertConfirm();
                // }
            }
        }, error => {
            console.log('error in orders', error);
            this.loaded = true;
            this.util.errorToast('Something went wrong');
        }).catch(error => {
            console.log('error in order', error);
            this.loaded = true;
            this.util.errorToast('Something went wrong');
        });
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'How was your experience?',
                message: 'Rate ' + this.restName + ' and ' + this.dname,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.util.setOrders(this.orderData);
                            this.router.navigate(['rate']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getRest(id) {
        this.api.getProfile(id).then((data) => {
            console.log(data);
            this.restFCM = data.fcm_token;
            console.log('rest FCM------------->', this.restFCM);
            if (data && data.phone) {
                this.restPhone = data.phone;
            }
        }, error => {
            console.log('error in orders', error);
            this.util.errorToast('Something went wrong');
        }).catch(error => {
            console.log('error in order', error);
            this.util.errorToast('Something went wrong');
        });
    }
    trackMyOrder() {
        const navData = {
            queryParams: {
                id: this.id
            }
        };
        this.router.navigate(['/tracker'], navData);
        //
    }
    call() {
        if (this.restPhone) {
            window.open('tel:' + this.restPhone);
        }
    }
    chat() {
        this.router.navigate(['inbox']);
    }
    changeStatus() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: this.util.translate('Are you sure?'),
            text: this.util.translate('To Cancel this order'),
            showCancelButton: true,
            cancelButtonText: this.util.translate('Cancel'),
            showConfirmButton: true,
            confirmButtonText: this.util.translate('Yes'),
            backdrop: false,
            background: 'white'
        }).then((data) => {
            console.log(data);
            if (data && data.value) {
                this.util.show();
                this.api.updateOrderStatus(this.id, 'cancel').then((data) => {
                    this.util.hide();
                    const message = this.util.translate('Order ') + this.id + ' ' + this.util.translate(' cancelled by user');
                    const title = this.util.translate('Order cancelled');
                    this.api.sendNotification(message, title, this.driverFCM).subscribe(data => {
                        console.log(data);
                    });
                    this.api.sendNotification(message, title, this.restFCM).subscribe(data => {
                        console.log(data);
                    });
                    if (this.dId && this.dname) {
                        const parm = {
                            current: 'active',
                        };
                        this.api.updateProfile(this.dId, parm).then((data) => {
                            console.log('driver status cahcnage----->', data);
                        }).catch(error => {
                            console.log(error);
                        });
                    }
                    this.navCtrl.back();
                }, error => {
                    this.util.hide();
                    console.log(error);
                    this.util.errorToast('Something went wrong');
                }).catch(error => {
                    this.util.hide();
                    console.log(error);
                    this.util.errorToast('Something went wrong');
                });
            }
        });
    }
    getCurrency() {
        return this.util.getCurrecySymbol();
    }
};
HistoryDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] }
];
HistoryDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-history-detail',
        template: _raw_loader_history_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_history_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]])
], HistoryDetailPage);



/***/ }),

/***/ "TU9k":
/*!***********************************************************************!*\
  !*** ./src/app/pages/history-detail/history-detail-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: HistoryDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDetailPageRoutingModule", function() { return HistoryDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _history_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history-detail.page */ "LiNW");




const routes = [
    {
        path: '',
        component: _history_detail_page__WEBPACK_IMPORTED_MODULE_3__["HistoryDetailPage"]
    }
];
let HistoryDetailPageRoutingModule = class HistoryDetailPageRoutingModule {
};
HistoryDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistoryDetailPageRoutingModule);



/***/ }),

/***/ "iXvb":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history-detail/history-detail.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"header_div\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n      </ion-buttons>\n      <!-- <ion-label class=\"support_lbl\">Support</ion-label> -->\n    </div>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"chat()\" color=\"danger\">\n        <ion-icon slot=\"end\" name=\"chatbox-ellipses-outline\"></ion-icon>\n        {{'Support' | translate}}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!loaded\" style=\"display: flex;flex-direction: column;justify-content: center;align-items: center;\">\n    <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n  </div>\n  <div class=\"main_content_div\" *ngIf=\"loaded\">\n    <ion-label class=\"header_lbl\">{{'Order Summary' | translate}}</ion-label>\n    <ion-label class=\"res_location\">{{'This order with' | translate}} {{restName}} {{'was' | translate}} {{status}}\n    </ion-label>\n\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"res_location\">{{address}}</ion-label>\n\n    <div class=\"flex_div\">\n      <ion-label class=\"res_name\" style=\"margin-top: 0px;\">{{'Your Order' | translate}}</ion-label>\n      <ion-label class=\"fav_lbl\" (click)=\"trackMyOrder()\" *ngIf=\"status =='ongoing' || status =='accepted' \">\n        {{'Track Order' | translate}}\n      </ion-label>\n    </div>\n\n    <!-- <div class=\"line_div\"></div> -->\n\n    <span *ngFor=\"let item of orders\">\n\n      <div *ngFor=\"let subItems of item.selectedItem;let j = index\" class=\"subNames\">\n        <ion-label class=\"food_title\">\n          {{item.name}} X\n          {{item.selectedItem[j].total}}</ion-label>\n        <div *ngFor=\"let addods of subItems.item\" class=\"flex_titles\">\n          <p class=\"sub_name\">\n            - {{addods.name}}\n          </p>\n          <p class=\"sub_name\">\n            {{getCurrency()}} {{addods.value}}\n          </p>\n        </div>\n      </div>\n\n      <div class=\"card_div\" *ngIf=\"!item.selectedItem || !item.selectedItem.length\">\n        <div class=\"flex_div\">\n          <ion-label class=\"food_title\">{{item.name}} X {{item.quantiy}} </ion-label>\n          <ion-label class=\"food_price\">{{getCurrency()}}{{item.quantiy * item.price}}</ion-label>\n        </div>\n\n      </div>\n\n    </span>\n\n    <ion-label style=\"margin-top: 5px; font-weight: 600px;\">{{'Item Total' | translate}} <span\n        class=\"prise_lbl\">{{getCurrency()}}{{total}}</span>\n    </ion-label>\n    <ion-label style=\"margin-top: 5px; font-weight: 600px;\" *ngIf=\"coupon\">{{'Coupon Discout' | translate}} <span\n        class=\"prise_lbl\">{{getCurrency()}}{{dicount}}</span>\n    </ion-label>\n    <ion-label style=\"margin-top: 5px; font-size: 14px\">{{'Delivery Charge' | translate}} <span\n        class=\"prise_lbl\">{{getCurrency()}}{{serviceTax}}</span>\n    </ion-label>\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"res_name\">{{'Order Detail' | translate}}</ion-label>\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"head_gray\">{{'Order Number' | translate}}</ion-label>\n    <ion-label class=\"small_lbl\">{{id}}</ion-label>\n    <ion-label class=\"head_gray\">{{'Payment' | translate}}</ion-label>\n    <ion-label class=\"small_lbl\">{{'Paid' | translate}} ; <span *ngIf=\"paid =='cod'\">COD</span> <span\n        *ngIf=\"paid =='stripe'\">{{'Using Card' | translate}}</span> </ion-label>\n    <ion-label class=\"head_gray\">{{'Date' | translate}}</ion-label>\n    <ion-label class=\"small_lbl\">{{time}}</ion-label>\n    <ion-label class=\"head_gray\">{{'Deliver to' | translate}}</ion-label>\n    <ion-label class=\"small_lbl\">{{deliveryAddress}}</ion-label>\n\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"red_lbl\" *ngIf=\"status =='created' ||status =='ongoing' || status =='accepted' \" (click)=\"call()\">\n      {{'Call' | translate}} {{restName}}</ion-label>\n\n\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <div class=\"btn_div\">\n      <ion-button *ngIf=\"status ==='delivered'\" (click)=\"presentAlertConfirm()\" size=\"small\" class=\"ratae\">\n        <ion-icon name=\"star\" color=\"light\" slot=\"start\"></ion-icon>\n        {{'Rate Order' | translate}}\n      </ion-button>\n      <ion-button *ngIf=\"status === 'created' ||status === 'ongoing' || status === 'accepted' \" (click)=\"changeStatus()\"\n        size=\"small\" class=\"reject\">\n        {{'Cancel Order' | translate}}\n      </ion-button>\n    </div>\n  </ion-toolbar>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=pages-history-detail-history-detail-module-es2015.js.map