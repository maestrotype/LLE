(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-detail-history-detail-module"], {
    /***/
    "1AGm":
    /*!***************************************************************!*\
      !*** ./src/app/pages/history-detail/history-detail.module.ts ***!
      \***************************************************************/

    /*! exports provided: HistoryDetailPageModule */

    /***/
    function AGm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoryDetailPageModule", function () {
        return HistoryDetailPageModule;
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


      var _history_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./history-detail-routing.module */
      "TU9k");
      /* harmony import */


      var _history_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./history-detail.page */
      "LiNW");
      /* harmony import */


      var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/directives/shared.module */
      "dVnR");

      var HistoryDetailPageModule = function HistoryDetailPageModule() {
        _classCallCheck(this, HistoryDetailPageModule);
      };

      HistoryDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _history_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryDetailPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_history_detail_page__WEBPACK_IMPORTED_MODULE_6__["HistoryDetailPage"]]
      })], HistoryDetailPageModule);
      /***/
    },

    /***/
    "9BBu":
    /*!***************************************************************!*\
      !*** ./src/app/pages/history-detail/history-detail.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function BBu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header_div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.header_div .support_lbl {\n  margin-right: 20px;\n  color: red;\n}\n\n.main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n\n.main_content_div .line_div {\n  height: 1px;\n  width: 100%;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .header_lbl {\n  font-weight: 600;\n  font-size: 22px;\n}\n\n.main_content_div .res_name {\n  margin-top: 20px;\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.main_content_div .res_location {\n  font-size: 14px;\n  width: 90%;\n}\n\n.main_content_div .flex_div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n}\n\n.main_content_div .flex_div .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.main_content_div .flex_div .food_price {\n  font-size: 15px;\n}\n\n.main_content_div .flex_div .fav_lbl {\n  color: red;\n  font-size: 12px;\n  border: 1px solid red;\n  border-radius: 25px;\n  padding: 2px 10px;\n}\n\n.main_content_div .subNames {\n  border-bottom: 1px dashed lightgray;\n  padding-bottom: 5px;\n}\n\n.main_content_div .subNames .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.main_content_div .subNames .food_title .veg {\n  height: 12px;\n  width: 12px;\n}\n\n.main_content_div .subNames .food_title .rate_lbl {\n  background: #b2d9b2;\n  border: 1px solid #7bdb7b;\n  padding: 3px 8px;\n  border-radius: 5px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.main_content_div .subNames .flex_titles {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.main_content_div .subNames .flex_titles .sub_name {\n  margin: 0px;\n  color: black;\n  font-size: 12px;\n}\n\n.main_content_div .card_div {\n  border-bottom: 1px dashed lightgray;\n  padding-bottom: 5px;\n}\n\n.main_content_div .card_div .upper_div {\n  display: flex;\n  align-items: center;\n}\n\n.main_content_div .card_div .upper_div .veg {\n  width: 12px;\n  height: 12px;\n}\n\n.main_content_div .card_div .lower_div {\n  margin-top: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.main_content_div .card_div .lower_div .rate_lbl {\n  background: #b2d9b2;\n  border: 1px solid #7bdb7b;\n  padding: 3px 8px;\n  border-radius: 5px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.main_content_div .prise_lbl {\n  position: absolute;\n  right: 20px;\n}\n\n.main_content_div .head_gray {\n  color: gray;\n  font-size: 13px;\n}\n\n.main_content_div .small_lbl {\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n\n.main_content_div .red_lbl {\n  color: red;\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.btn_div {\n  display: flex;\n  justify-content: center;\n}\n\n.btn_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n  width: 130px;\n}\n\n.btn_div .ratae {\n  --background: var(--ion-color-warning);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGlzdG9yeS1kZXRhaWwvaGlzdG9yeS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDdkI7O0FBSkE7RUFNUSxrQkFBa0I7RUFDbEIsVUFBVTtBQUVsQjs7QUFFQTtFQUNJLFdBQVc7RUFDWCxhQUFhO0FBQ2pCOztBQUhBO0VBS1EsV0FBVztFQUNYLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUUzQjs7QUFYQTtFQWFRLGNBQWM7QUFFdEI7O0FBZkE7RUFpQlEsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFFdkI7O0FBcEJBO0VBcUJRLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUd2Qjs7QUExQkE7RUEwQlEsZUFBZTtFQUNmLFVBQVU7QUFJbEI7O0FBL0JBO0VBK0JRLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUl4Qjs7QUF0Q0E7RUFvQ1ksZUFBZTtFQUNmLGlCQUFpQjtBQU03Qjs7QUEzQ0E7RUF3Q1ksZUFBZTtBQU8zQjs7QUEvQ0E7RUEyQ1ksVUFBVTtFQUNWLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQVE3Qjs7QUF2REE7RUFvRFEsbUNBQW1DO0VBQ25DLG1CQUFtQjtBQU8zQjs7QUE1REE7RUF1RFksZUFBZTtFQUNmLGlCQUFpQjtBQVM3Qjs7QUFqRUE7RUEwRGdCLFlBQVk7RUFDWixXQUFXO0FBVzNCOztBQXRFQTtFQThEZ0IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFZaEM7O0FBL0VBO0VBdUVZLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBWTFDOztBQXJGQTtFQTJFZ0IsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBYy9COztBQTNGQTtFQW1GUSxtQ0FBbUM7RUFDbkMsbUJBQW1CO0FBWTNCOztBQWhHQTtFQXNGWSxhQUFhO0VBQ2IsbUJBQW1CO0FBYy9COztBQXJHQTtFQTBGZ0IsV0FBVztFQUNYLFlBQVk7QUFlNUI7O0FBMUdBO0VBZ0dZLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQWMvQjs7QUFqSEE7RUFxR2dCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBZ0JoQzs7QUExSEE7RUFnSFEsa0JBQWtCO0VBQ2xCLFdBQVc7QUFjbkI7O0FBL0hBO0VBcUhRLFdBQVc7RUFDWCxlQUFlO0FBY3ZCOztBQXBJQTtFQXlIUSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQWUzQjs7QUExSUE7RUE4SFEsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBZ0IzQjs7QUFaQTtFQUNJLGFBQWE7RUFDYix1QkFBdUI7QUFlM0I7O0FBakJBO0VBS1EsZ0JBQWdCO0VBQ2hCLG9CQUFnQjtFQUNoQixZQUFZO0FBZ0JwQjs7QUF2QkE7RUFVUSxzQ0FBYTtBQWlCckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oaXN0b3J5LWRldGFpbC9oaXN0b3J5LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyX2RpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLnN1cHBvcnRfbGJse1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxufVxuXG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgLmxpbmVfZGl2e1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuaGVhZGVyX2xibHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbiAgICAucmVzX25hbWV7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgLnJlc19sb2NhdGlvbntcbiAgICAgICAgZm9udC1zaXplOiAxNHB4OyAgICAgICBcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG5cbiAgICAuZmxleF9kaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgLmZvb2RfdGl0bGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAuZm9vZF9wcmljZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAuZmF2X2xibHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMnB4IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc3ViTmFtZXN7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAuZm9vZF90aXRsZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgLnZlZ3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmF0ZV9sYmx7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2IyZDliMjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjN2JkYjdiO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5mbGV4X3RpdGxlc3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgLnN1Yl9uYW1le1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZF9kaXZ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAudXBwZXJfZGl2e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC52ZWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmxvd2VyX2RpdntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjs7XG4gICAgICAgICAgICAucmF0ZV9sYmx7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2IyZDliMjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjN2JkYjdiO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnByaXNlX2xibHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAuaGVhZF9ncmF5e1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgICAuc21hbGxfbGJse1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuICAgIC5yZWRfbGJse1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxufVxuXG4uYnRuX2RpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICB9XG4gICAgLnJhdGFle1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTs7XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "LiNW":
    /*!*************************************************************!*\
      !*** ./src/app/pages/history-detail/history-detail.page.ts ***!
      \*************************************************************/

    /*! exports provided: HistoryDetailPage */

    /***/
    function LiNW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoryDetailPage", function () {
        return HistoryDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_history_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./history-detail.page.html */
      "iXvb");
      /* harmony import */


      var _history_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./history-detail.page.scss */
      "9BBu");
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


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);

      var HistoryDetailPage = /*#__PURE__*/function () {
        function HistoryDetailPage(route, api, router, util, alertController, navCtrl) {
          _classCallCheck(this, HistoryDetailPage);

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

        _createClass(HistoryDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (data) {
              console.log('data=>', data);

              if (data.hasOwnProperty('id')) {
                _this.id = data.id;

                _this.getOrder();
              }
            });
          }
        }, {
          key: "getOrder",
          value: function getOrder() {
            var _this2 = this;

            this.api.getOrderById(this.id).then(function (data) {
              _this2.loaded = true;
              console.log(data);

              if (data) {
                _this2.orderData = data;
                _this2.grandTotal = data.grandTotal;
                _this2.orders = JSON.parse(data.order);
                _this2.serviceTax = data.serviceTax;
                _this2.status = data.status;
                _this2.time = data.time;

                if (data && data.dId && data.dId.fullname) {
                  _this2.dname = data.dId.fullname;
                  _this2.driverFCM = data.dId.fcm_token;
                  console.log('driver FCM-------->', _this2.driverFCM);
                  _this2.dId = data.dId.uid;
                }

                _this2.total = data.total;
                _this2.address = data.vid.address;
                _this2.restName = data.vid.name;
                _this2.deliveryAddress = data.address.address;
                _this2.paid = data.paid;
                console.log('this', _this2.orders);

                _this2.getRest(data.vid.uid);

                _this2.coupon = data.appliedCoupon;
                _this2.dicount = data.dicount; // if (this.status === 'delivered') {
                //   this.presentAlertConfirm();
                // }
              }
            }, function (error) {
              console.log('error in orders', error);
              _this2.loaded = true;

              _this2.util.errorToast('Something went wrong');
            })["catch"](function (error) {
              console.log('error in order', error);
              _this2.loaded = true;

              _this2.util.errorToast('Something went wrong');
            });
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'How was your experience?',
                        message: 'Rate ' + this.restName + ' and ' + this.dname,
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            console.log('Confirm Okay');

                            _this3.util.setOrders(_this3.orderData);

                            _this3.router.navigate(['rate']);
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getRest",
          value: function getRest(id) {
            var _this4 = this;

            this.api.getProfile(id).then(function (data) {
              console.log(data);
              _this4.restFCM = data.fcm_token;
              console.log('rest FCM------------->', _this4.restFCM);

              if (data && data.phone) {
                _this4.restPhone = data.phone;
              }
            }, function (error) {
              console.log('error in orders', error);

              _this4.util.errorToast('Something went wrong');
            })["catch"](function (error) {
              console.log('error in order', error);

              _this4.util.errorToast('Something went wrong');
            });
          }
        }, {
          key: "trackMyOrder",
          value: function trackMyOrder() {
            var navData = {
              queryParams: {
                id: this.id
              }
            };
            this.router.navigate(['/tracker'], navData); //
          }
        }, {
          key: "call",
          value: function call() {
            if (this.restPhone) {
              window.open('tel:' + this.restPhone);
            }
          }
        }, {
          key: "chat",
          value: function chat() {
            this.router.navigate(['inbox']);
          }
        }, {
          key: "changeStatus",
          value: function changeStatus() {
            var _this5 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
              title: this.util.translate('Are you sure?'),
              text: this.util.translate('To Cancel this order'),
              showCancelButton: true,
              cancelButtonText: this.util.translate('Cancel'),
              showConfirmButton: true,
              confirmButtonText: this.util.translate('Yes'),
              backdrop: false,
              background: 'white'
            }).then(function (data) {
              console.log(data);

              if (data && data.value) {
                _this5.util.show();

                _this5.api.updateOrderStatus(_this5.id, 'cancel').then(function (data) {
                  _this5.util.hide();

                  var message = _this5.util.translate('Order ') + _this5.id + ' ' + _this5.util.translate(' cancelled by user');

                  var title = _this5.util.translate('Order cancelled');

                  _this5.api.sendNotification(message, title, _this5.driverFCM).subscribe(function (data) {
                    console.log(data);
                  });

                  _this5.api.sendNotification(message, title, _this5.restFCM).subscribe(function (data) {
                    console.log(data);
                  });

                  if (_this5.dId && _this5.dname) {
                    var parm = {
                      current: 'active'
                    };

                    _this5.api.updateProfile(_this5.dId, parm).then(function (data) {
                      console.log('driver status cahcnage----->', data);
                    })["catch"](function (error) {
                      console.log(error);
                    });
                  }

                  _this5.navCtrl.back();
                }, function (error) {
                  _this5.util.hide();

                  console.log(error);

                  _this5.util.errorToast('Something went wrong');
                })["catch"](function (error) {
                  _this5.util.hide();

                  console.log(error);

                  _this5.util.errorToast('Something went wrong');
                });
              }
            });
          }
        }, {
          key: "getCurrency",
          value: function getCurrency() {
            return this.util.getCurrecySymbol();
          }
        }]);

        return HistoryDetailPage;
      }();

      HistoryDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }];
      };

      HistoryDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-history-detail',
        template: _raw_loader_history_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_history_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]])], HistoryDetailPage);
      /***/
    },

    /***/
    "TU9k":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/history-detail/history-detail-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: HistoryDetailPageRoutingModule */

    /***/
    function TU9k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoryDetailPageRoutingModule", function () {
        return HistoryDetailPageRoutingModule;
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


      var _history_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./history-detail.page */
      "LiNW");

      var routes = [{
        path: '',
        component: _history_detail_page__WEBPACK_IMPORTED_MODULE_3__["HistoryDetailPage"]
      }];

      var HistoryDetailPageRoutingModule = function HistoryDetailPageRoutingModule() {
        _classCallCheck(this, HistoryDetailPageRoutingModule);
      };

      HistoryDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HistoryDetailPageRoutingModule);
      /***/
    },

    /***/
    "iXvb":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history-detail/history-detail.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iXvb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <div class=\"header_div\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n      </ion-buttons>\n      <!-- <ion-label class=\"support_lbl\">Support</ion-label> -->\n    </div>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"chat()\" color=\"danger\">\n        <ion-icon slot=\"end\" name=\"chatbox-ellipses-outline\"></ion-icon>\n        {{'Support' | translate}}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!loaded\" style=\"display: flex;flex-direction: column;justify-content: center;align-items: center;\">\n    <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n  </div>\n  <div class=\"main_content_div\" *ngIf=\"loaded\">\n    <ion-label class=\"header_lbl\">{{'Order Summary' | translate}}</ion-label>\n    <ion-label class=\"res_location\">{{'This order with' | translate}} {{restName}} {{'was' | translate}} {{status}}\n    </ion-label>\n\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"res_location\">{{address}}</ion-label>\n\n    <div class=\"flex_div\">\n      <ion-label class=\"res_name\" style=\"margin-top: 0px;\">{{'Your Order' | translate}}</ion-label>\n      <ion-label class=\"fav_lbl\" (click)=\"trackMyOrder()\" *ngIf=\"status =='ongoing' || status =='accepted' \">\n        {{'Track Order' | translate}}\n      </ion-label>\n    </div>\n\n    <!-- <div class=\"line_div\"></div> -->\n\n    <span *ngFor=\"let item of orders\">\n\n      <div *ngFor=\"let subItems of item.selectedItem;let j = index\" class=\"subNames\">\n        <ion-label class=\"food_title\">\n          {{item.name}} X\n          {{item.selectedItem[j].total}}</ion-label>\n        <div *ngFor=\"let addods of subItems.item\" class=\"flex_titles\">\n          <p class=\"sub_name\">\n            - {{addods.name}}\n          </p>\n          <p class=\"sub_name\">\n            {{getCurrency()}} {{addods.value}}\n          </p>\n        </div>\n      </div>\n\n      <div class=\"card_div\" *ngIf=\"!item.selectedItem || !item.selectedItem.length\">\n        <div class=\"flex_div\">\n          <ion-label class=\"food_title\">{{item.name}} X {{item.quantiy}} </ion-label>\n          <ion-label class=\"food_price\">{{getCurrency()}}{{item.quantiy * item.price}}</ion-label>\n        </div>\n\n      </div>\n\n    </span>\n\n    <ion-label style=\"margin-top: 5px; font-weight: 600px;\">{{'Item Total' | translate}} <span\n        class=\"prise_lbl\">{{getCurrency()}}{{total}}</span>\n    </ion-label>\n    <ion-label style=\"margin-top: 5px; font-weight: 600px;\" *ngIf=\"coupon\">{{'Coupon Discout' | translate}} <span\n        class=\"prise_lbl\">{{getCurrency()}}{{dicount}}</span>\n    </ion-label>\n    <ion-label style=\"margin-top: 5px; font-size: 14px\">{{'Delivery Charge' | translate}} <span\n        class=\"prise_lbl\">{{getCurrency()}}{{serviceTax}}</span>\n    </ion-label>\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"res_name\">{{'Order Detail' | translate}}</ion-label>\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"head_gray\">{{'Order Number' | translate}}</ion-label>\n    <ion-label class=\"small_lbl\">{{id}}</ion-label>\n    <ion-label class=\"head_gray\">{{'Payment' | translate}}</ion-label>\n    <ion-label class=\"small_lbl\">{{'Paid' | translate}} ; <span *ngIf=\"paid =='cod'\">COD</span> <span\n        *ngIf=\"paid =='stripe'\">{{'Using Card' | translate}}</span> </ion-label>\n    <ion-label class=\"head_gray\">{{'Date' | translate}}</ion-label>\n    <ion-label class=\"small_lbl\">{{time}}</ion-label>\n    <ion-label class=\"head_gray\">{{'Deliver to' | translate}}</ion-label>\n    <ion-label class=\"small_lbl\">{{deliveryAddress}}</ion-label>\n\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"red_lbl\" *ngIf=\"status =='created' ||status =='ongoing' || status =='accepted' \" (click)=\"call()\">\n      {{'Call' | translate}} {{restName}}</ion-label>\n\n\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <div class=\"btn_div\">\n      <ion-button *ngIf=\"status ==='delivered'\" (click)=\"presentAlertConfirm()\" size=\"small\" class=\"ratae\">\n        <ion-icon name=\"star\" color=\"light\" slot=\"start\"></ion-icon>\n        {{'Rate Order' | translate}}\n      </ion-button>\n      <ion-button *ngIf=\"status === 'created' ||status === 'ongoing' || status === 'accepted' \" (click)=\"changeStatus()\"\n        size=\"small\" class=\"reject\">\n        {{'Cancel Order' | translate}}\n      </ion-button>\n    </div>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-history-detail-history-detail-module-es5.js.map