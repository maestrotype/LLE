(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-summary-summary-module"], {
    /***/
    "/Asy":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/summary/summary.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function Asy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Order Summary</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>";
      /***/
    },

    /***/
    "6gT1":
    /*!***********************************************!*\
      !*** ./src/app/pages/summary/summary.page.ts ***!
      \***********************************************/

    /*! exports provided: SummaryPage */

    /***/
    function gT1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SummaryPage", function () {
        return SummaryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_summary_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./summary.page.html */
      "/Asy");
      /* harmony import */


      var _summary_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./summary.page.scss */
      "DbvO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SummaryPage = /*#__PURE__*/function () {
        function SummaryPage() {
          _classCallCheck(this, SummaryPage);
        }

        _createClass(SummaryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SummaryPage;
      }();

      SummaryPage.ctorParameters = function () {
        return [];
      };

      SummaryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-summary',
        template: _raw_loader_summary_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_summary_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SummaryPage);
      /***/
    },

    /***/
    "7xob":
    /*!*********************************************************!*\
      !*** ./src/app/pages/summary/summary-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: SummaryPageRoutingModule */

    /***/
    function xob(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SummaryPageRoutingModule", function () {
        return SummaryPageRoutingModule;
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


      var _summary_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./summary.page */
      "6gT1");

      var routes = [{
        path: '',
        component: _summary_page__WEBPACK_IMPORTED_MODULE_3__["SummaryPage"]
      }];

      var SummaryPageRoutingModule = function SummaryPageRoutingModule() {
        _classCallCheck(this, SummaryPageRoutingModule);
      };

      SummaryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SummaryPageRoutingModule);
      /***/
    },

    /***/
    "DbvO":
    /*!*************************************************!*\
      !*** ./src/app/pages/summary/summary.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function DbvO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1bW1hcnkvc3VtbWFyeS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "S5Bg":
    /*!*************************************************!*\
      !*** ./src/app/pages/summary/summary.module.ts ***!
      \*************************************************/

    /*! exports provided: SummaryPageModule */

    /***/
    function S5Bg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SummaryPageModule", function () {
        return SummaryPageModule;
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


      var _summary_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./summary-routing.module */
      "7xob");
      /* harmony import */


      var _summary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./summary.page */
      "6gT1");

      var SummaryPageModule = function SummaryPageModule() {
        _classCallCheck(this, SummaryPageModule);
      };

      SummaryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _summary_routing_module__WEBPACK_IMPORTED_MODULE_5__["SummaryPageRoutingModule"]],
        declarations: [_summary_page__WEBPACK_IMPORTED_MODULE_6__["SummaryPage"]]
      })], SummaryPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-summary-summary-module-es5.js.map