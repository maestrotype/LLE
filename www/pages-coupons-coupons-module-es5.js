(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-coupons-coupons-module"], {
    /***/
    "BNb3":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coupons/coupons.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function BNb3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Coupons' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"noData\" *ngIf=\"!dummy?.length && !list?.length\" [style.backgroundImage]=\"'url(assets/nothing.jpg)'\">\n  </div>\n  <div *ngFor=\"let item of dummy\">\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ion-row *ngFor=\"let item of list\" class=\"coupons\" (click)=\"claim(item)\">\n    <ion-col size=\"12\" class=\"info\">\n      <p class=\"title\">{{item.desc}} <br>\n        <span class=\"code\">{{'CODE'  | translate }} : {{item.code}} </span><br>\n        <span class=\"expire\">{{expire(item.exire)}}</span><br>\n        <span class=\"desc\">{{'Get' | translate}} {{item.discout}} {{item.type}} {{'to' | translate}} {{item.upto}}\n          {{item.type}} {{'discount on minimum order' | translate}}\n          {{'of' | translate}}\n          {{item.min}} {{getCurrency()}}\n        </span></p>\n    </ion-col>\n    <ion-badge color=\"primary\" class=\"ion-padding\" mode=\"ios\">{{'CLAIM' | translate}}</ion-badge>\n  </ion-row>\n</ion-content>";
      /***/
    },

    /***/
    "CqcZ":
    /*!***********************************************!*\
      !*** ./src/app/pages/coupons/coupons.page.ts ***!
      \***********************************************/

    /*! exports provided: CouponsPage */

    /***/
    function CqcZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CouponsPage", function () {
        return CouponsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_coupons_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./coupons.page.html */
      "BNb3");
      /* harmony import */


      var _coupons_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./coupons.page.scss */
      "lUSa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var CouponsPage = /*#__PURE__*/function () {
        function CouponsPage(api, route, util, navCtrl) {
          _classCallCheck(this, CouponsPage);

          this.api = api;
          this.route = route;
          this.util = util;
          this.navCtrl = navCtrl;
          this.list = [];
          this.dummy = Array(10);
          this.getOffers();
        }

        _createClass(CouponsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (data) {
              console.log(data);

              if (data && data.restId) {
                _this.restId = data.restId;
                _this.name = data.name;
                _this.total = parseFloat(data.totalPrice);
                console.log(_this.restId);
              } else {
                _this.dummy = [];
              }
            });
          }
        }, {
          key: "getOffers",
          value: function getOffers() {
            var _this2 = this;

            this.api.getOffers().then(function (data) {
              _this2.dummy = [];
              console.log('list=====>', data);
              _this2.list = [];

              if (data && data.length) {
                var currnetDate = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD');
                data.forEach(function (element) {
                  console.log(moment__WEBPACK_IMPORTED_MODULE_5__(element.expire).isAfter(currnetDate));

                  if (element && element.status === 'active' && moment__WEBPACK_IMPORTED_MODULE_5__(element.expire).isAfter(currnetDate)) {
                    console.log('yes=>', element);

                    _this2.list.push(element);
                  }
                }); // this.list = data;
              }
            })["catch"](function (error) {
              _this2.dummy = [];
              console.log(error);
            });
          }
        }, {
          key: "claim",
          value: function claim(item) {
            var _this3 = this;

            console.log(item);

            if (item && item.available && item.available.length) {
              var data = item.available.filter(function (x) {
                return x.id === _this3.restId;
              });
              console.log(data);

              if (data && data.length) {
                if (this.total >= item.min) {
                  console.log('ok');
                  this.util.showToast(this.util.translate('Coupon Applied'), 'success', 'bottom');
                  this.util.publishCoupon(item);
                  this.navCtrl.back();
                } else {
                  this.util.errorToast(this.util.translate('For claiming this coupon your order required minimum order  of $') + item.min);
                }
              } else {
                this.util.errorToast(this.util.translate('This coupon is not valid for ') + this.name);
              }
            } else {
              this.util.errorToast(this.util.translate('This coupon is not valid for ') + this.name);
            }
          }
        }, {
          key: "expire",
          value: function expire(date) {
            return moment__WEBPACK_IMPORTED_MODULE_5__(date).format('llll');
          }
        }, {
          key: "getCurrency",
          value: function getCurrency() {
            return this.util.getCurrecySymbol();
          }
        }]);

        return CouponsPage;
      }();

      CouponsPage.ctorParameters = function () {
        return [{
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
        }];
      };

      CouponsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-coupons',
        template: _raw_loader_coupons_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_coupons_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]])], CouponsPage);
      /***/
    },

    /***/
    "lUSa":
    /*!*************************************************!*\
      !*** ./src/app/pages/coupons/coupons.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function lUSa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".noData {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 250px;\n}\n\n.coupons {\n  border-bottom: 1px solid lightgray;\n}\n\n.coupons .info .title {\n  margin: 0px;\n  font-weight: bold;\n}\n\n.coupons .info .title .code {\n  font-weight: normal;\n  color: var(--ion-color-primary);\n}\n\n.coupons .info .title .expire {\n  font-size: .8rem;\n  color: gray;\n}\n\n.coupons .info .title .desc {\n  font-size: .8rem;\n  color: gray;\n}\n\n.coupons .btns {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY291cG9ucy9jb3Vwb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsYUFBYTtBQUNqQjs7QUFDQTtFQUNJLGtDQUFrQztBQUV0Qzs7QUFIQTtFQUlZLFdBQVc7RUFDWCxpQkFBaUI7QUFHN0I7O0FBUkE7RUFPZ0IsbUJBQW1CO0VBQ25CLCtCQUErQjtBQUsvQzs7QUFiQTtFQVdnQixnQkFBZ0I7RUFDaEIsV0FBVztBQU0zQjs7QUFsQkE7RUFlZ0IsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFPM0I7O0FBdkJBO0VBcUJRLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQU0zQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvdXBvbnMvY291cG9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9EYXRhe1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjUwcHg7XG59XG4uY291cG9uc3tcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIC5pbmZve1xuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgLmNvZGV7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmV4cGlyZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRlc2N7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnRuc3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "oJaD":
    /*!*************************************************!*\
      !*** ./src/app/pages/coupons/coupons.module.ts ***!
      \*************************************************/

    /*! exports provided: CouponsPageModule */

    /***/
    function oJaD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CouponsPageModule", function () {
        return CouponsPageModule;
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


      var _coupons_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./coupons-routing.module */
      "vCrI");
      /* harmony import */


      var _coupons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./coupons.page */
      "CqcZ");
      /* harmony import */


      var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/directives/shared.module */
      "dVnR");

      var CouponsPageModule = function CouponsPageModule() {
        _classCallCheck(this, CouponsPageModule);
      };

      CouponsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _coupons_routing_module__WEBPACK_IMPORTED_MODULE_5__["CouponsPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_coupons_page__WEBPACK_IMPORTED_MODULE_6__["CouponsPage"]]
      })], CouponsPageModule);
      /***/
    },

    /***/
    "vCrI":
    /*!*********************************************************!*\
      !*** ./src/app/pages/coupons/coupons-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: CouponsPageRoutingModule */

    /***/
    function vCrI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CouponsPageRoutingModule", function () {
        return CouponsPageRoutingModule;
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


      var _coupons_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./coupons.page */
      "CqcZ");

      var routes = [{
        path: '',
        component: _coupons_page__WEBPACK_IMPORTED_MODULE_3__["CouponsPage"]
      }];

      var CouponsPageRoutingModule = function CouponsPageRoutingModule() {
        _classCallCheck(this, CouponsPageRoutingModule);
      };

      CouponsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CouponsPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-coupons-coupons-module-es5.js.map