(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-favourite-favourite-module"], {
    /***/
    "1nw0":
    /*!*****************************************************!*\
      !*** ./src/app/pages/favourite/favourite.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function nw0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zhdm91cml0ZS9mYXZvdXJpdGUucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "V3sw":
    /*!*************************************************************!*\
      !*** ./src/app/pages/favourite/favourite-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: FavouritePageRoutingModule */

    /***/
    function V3sw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavouritePageRoutingModule", function () {
        return FavouritePageRoutingModule;
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


      var _favourite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./favourite.page */
      "yhkr");

      var routes = [{
        path: '',
        component: _favourite_page__WEBPACK_IMPORTED_MODULE_3__["FavouritePage"]
      }];

      var FavouritePageRoutingModule = function FavouritePageRoutingModule() {
        _classCallCheck(this, FavouritePageRoutingModule);
      };

      FavouritePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FavouritePageRoutingModule);
      /***/
    },

    /***/
    "W5eK":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favourite/favourite.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function W5eK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>favourite</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "qf5k":
    /*!*****************************************************!*\
      !*** ./src/app/pages/favourite/favourite.module.ts ***!
      \*****************************************************/

    /*! exports provided: FavouritePageModule */

    /***/
    function qf5k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavouritePageModule", function () {
        return FavouritePageModule;
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


      var _favourite_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./favourite-routing.module */
      "V3sw");
      /* harmony import */


      var _favourite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./favourite.page */
      "yhkr");

      var FavouritePageModule = function FavouritePageModule() {
        _classCallCheck(this, FavouritePageModule);
      };

      FavouritePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _favourite_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavouritePageRoutingModule"]],
        declarations: [_favourite_page__WEBPACK_IMPORTED_MODULE_6__["FavouritePage"]]
      })], FavouritePageModule);
      /***/
    },

    /***/
    "yhkr":
    /*!***************************************************!*\
      !*** ./src/app/pages/favourite/favourite.page.ts ***!
      \***************************************************/

    /*! exports provided: FavouritePage */

    /***/
    function yhkr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavouritePage", function () {
        return FavouritePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_favourite_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./favourite.page.html */
      "W5eK");
      /* harmony import */


      var _favourite_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./favourite.page.scss */
      "1nw0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FavouritePage = /*#__PURE__*/function () {
        function FavouritePage() {
          _classCallCheck(this, FavouritePage);
        }

        _createClass(FavouritePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FavouritePage;
      }();

      FavouritePage.ctorParameters = function () {
        return [];
      };

      FavouritePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-favourite',
        template: _raw_loader_favourite_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_favourite_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FavouritePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-favourite-favourite-module-es5.js.map