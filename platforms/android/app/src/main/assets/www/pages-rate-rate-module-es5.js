(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rate-rate-module"], {
    /***/
    "+6y4":
    /*!*******************************************!*\
      !*** ./src/app/pages/rate/rate.module.ts ***!
      \*******************************************/

    /*! exports provided: RatePageModule */

    /***/
    function y4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RatePageModule", function () {
        return RatePageModule;
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


      var _rate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./rate-routing.module */
      "oQQC");
      /* harmony import */


      var _rate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./rate.page */
      "A+rc");
      /* harmony import */


      var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic4-rating */
      "Xcyb");

      var RatePageModule = function RatePageModule() {
        _classCallCheck(this, RatePageModule);
      };

      RatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _rate_routing_module__WEBPACK_IMPORTED_MODULE_5__["RatePageRoutingModule"], ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"]],
        declarations: [_rate_page__WEBPACK_IMPORTED_MODULE_6__["RatePage"]]
      })], RatePageModule);
      /***/
    },

    /***/
    "4/DR":
    /*!*****************************************************************************!*\
      !*** ./node_modules/ionic4-rating/__ivy_ngcc__/dist/ionic-rating.module.js ***!
      \*****************************************************************************/

    /*! exports provided: IonicRatingModule */

    /***/
    function DR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IonicRatingModule", function () {
        return IonicRatingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/rating */
      "CbC+");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var IonicRatingModule =
      /** @class */
      function () {
        function IonicRatingModule() {}

        IonicRatingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: IonicRatingModule
        });
        IonicRatingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function IonicRatingModule_Factory(t) {
            return new (t || IonicRatingModule)();
          },
          imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]]
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IonicRatingModule, {
            declarations: function declarations() {
              return [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]];
            },
            imports: function imports() {
              return [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]];
            },
            exports: function exports() {
              return [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]];
            }
          });
        })();
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IonicRatingModule, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
              imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
              exports: [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]],
              declarations: [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]]
            }]
          }], function () {
            return [];
          }, null);
        })();

        return IonicRatingModule;
      }(); //# sourceMappingURL=ionic-rating.module.js.map

      /***/

    },

    /***/
    "A+rc":
    /*!*****************************************!*\
      !*** ./src/app/pages/rate/rate.page.ts ***!
      \*****************************************/

    /*! exports provided: RatePage */

    /***/
    function ARc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RatePage", function () {
        return RatePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_rate_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./rate.page.html */
      "A6+y");
      /* harmony import */


      var _rate_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./rate.page.scss */
      "FtR2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angularfire2/firestore */
      "CqG3");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__);
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
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);

      var RatePage = /*#__PURE__*/function () {
        function RatePage(api, util, adb, navCtrl) {
          _classCallCheck(this, RatePage);

          this.api = api;
          this.util = util;
          this.adb = adb;
          this.navCtrl = navCtrl;
          this.driver = 3;
          this.items = [];
          var data = this.util.gerOrder();
          console.log(data);

          if (data) {
            this.items = JSON.parse(data.order);
            this.items = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["uniqBy"])(this.items, 'id');
            this.dId = data.dId.id;
            this.name = data.dId.fullname;
            this.image = data.dId.coverImage;
            console.log(this.items);
            this.items.forEach(function (element) {
              element.rate = 0;
              element.totalRatting = element.totalRatting ? element.totalRatting : 1;
            });
          }
        }

        _createClass(RatePage, [{
          key: "submit",
          value: function submit() {
            var _this = this;

            console.log(this.items);
            this.items.forEach(function (element) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var totalRatting;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        console.log('elementt', element);
                        totalRatting = 0;
                        totalRatting = element.rate * element.totalRatting / 100;
                        console.log('???', totalRatting);
                        totalRatting = totalRatting * 100;

                        if (!totalRatting) {
                          totalRatting = element.rate;
                        }

                        _context.next = 8;
                        return this.adb.collection('foods').doc(element.uid).collection('all').doc(element.id).update({
                          ratting: totalRatting,
                          totalRatting: element.totalRatting + 1
                        });

                      case 8:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
            var id = Math.random().toString();
            console.log('iddddd', id);
            var uid = localStorage.getItem('uid');
            console.log('----->', localStorage.getItem('uid'));
            var parm = {
              id: id,
              descriptions: this.driverNotes,
              rate: this.driver,
              dId: this.dId,
              user: uid,
              uid: uid
            };
            console.log('parma ====>', parm);
            this.api.addDriverReview(parm).then(function (data) {
              console.log('??????', data);
            })["catch"](function (error) {
              console.log(error);
            });
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
              title: 'Success',
              text: 'Thank you for submiting review',
              timer: 1000,
              backdrop: false,
              background: 'white',
              icon: 'success'
            });
            this.navCtrl.navigateRoot(['/tabs']);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onRatingChange",
          value: function onRatingChange(event) {
            console.log(event);
          }
        }]);

        return RatePage;
      }();

      RatePage.ctorParameters = function () {
        return [{
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
        }, {
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }];
      };

      RatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rate',
        template: _raw_loader_rate_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rate_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]])], RatePage);
      /***/
    },

    /***/
    "A6+y":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rate/rate.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function A6Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Rate</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p class=\"title\"> Rate Foods</p>\n  <div *ngFor=\"let item of items\" class=\"flex_box\">\n    <ion-label class=\"name\">{{item.name}}</ion-label>\n    <rating [(ngModel)]=\"item.rate\" readOnly=\"false\" max=\"5\" emptyStarIconName=\"star-outline\"\n      halfStarIconName=\"star-half\" starIconName=\"star\" nullable=\"false\" (ngModelChange)=\"onRatingChange($event)\">\n    </rating>\n  </div>\n\n  <p class=\"title\"> Rate Driver</p>\n  <div class=\"driver\">\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"image\" onError=\"this.src='assets/imgs/paper.png'\" />\n      </ion-avatar>\n      <ion-label>{{name}}</ion-label>\n    </ion-item>\n    <rating [(ngModel)]=\"driver\" readOnly=\"false\" max=\"5\" emptyStarIconName=\"star-outline\" halfStarIconName=\"star-half\"\n      starIconName=\"star\" nullable=\"false\" (ngModelChange)=\"onRatingChange($event)\"></rating>\n    <ion-textarea rows=\"5\" [(ngModel)]=\"driverNotes\" placeholder=\"Write detailed review here..\"></ion-textarea>\n  </div>\n  <ion-button (click)=\"submit()\" expand=\"block\" shape=\"round\">\n    Submit\n  </ion-button>\n</ion-content>";
      /***/
    },

    /***/
    "CbC+":
    /*!***************************************************************************!*\
      !*** ./node_modules/ionic4-rating/__ivy_ngcc__/dist/components/rating.js ***!
      \***************************************************************************/

    /*! exports provided: RatingComponent */

    /***/
    function CbC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RatingComponent", function () {
        return RatingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function RatingComponent_ion_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_ion_button_1_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onClick(i_r2 + 1);
          })("mouseover", function RatingComponent_ion_button_1_Template_ion_button_mouseover_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.hoverRate = i_r2 + 1;
          })("mouseleave", function RatingComponent_ion_button_1_Template_ion_button_mouseleave_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.hoverRate = 0;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.readonly)("size", ctx_r0.size);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", i_r2 + 1 <= ctx_r0.hoverRate || !ctx_r0.hoverRate && i_r2 + 1 <= ctx_r0.rate);
        }
      }

      var _c0 = function _c0() {
        return [1, 2, 3, 4, 5];
      };

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var RatingComponent =
      /** @class */
      function () {
        function RatingComponent() {
          this.size = 'default';
          this.rateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        RatingComponent_1 = RatingComponent;

        RatingComponent.prototype.onClick = function (rate) {
          this.rate = rate;
          this.rateChange.emit(this.rate);

          this._onChange(this.rate);
        };

        RatingComponent.prototype.writeValue = function (value) {
          if (value !== undefined) {
            this.rate = value;
          }
        };

        RatingComponent.prototype.registerOnChange = function (fn) {
          this._onChange = fn;
        };

        RatingComponent.prototype.registerOnTouched = function (fn) {};

        RatingComponent.prototype.setDisabledState = function (isDisabled) {
          this.readonly = isDisabled;
        };

        var RatingComponent_1;

        __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number)], RatingComponent.prototype, "rate", void 0);

        __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], RatingComponent.prototype, "readonly", void 0);

        __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], RatingComponent.prototype, "size", void 0);

        __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], RatingComponent.prototype, "rateChange", void 0);

        RatingComponent.ɵfac = function RatingComponent_Factory(t) {
          return new (t || RatingComponent)();
        };

        RatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: RatingComponent,
          selectors: [["rating"]],
          inputs: {
            size: "size",
            rate: "rate",
            readonly: "readonly"
          },
          outputs: {
            rateChange: "rateChange"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return RatingComponent_1;
            }),
            multi: true
          }])],
          decls: 2,
          vars: 2,
          consts: [["fill", "clear", 3, "disabled", "size", "click", "mouseover", "mouseleave", 4, "ngFor", "ngForOf"], ["fill", "clear", 3, "disabled", "size", "click", "mouseover", "mouseleave"], ["slot", "icon-only", "name", "star"]],
          template: function RatingComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-buttons");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RatingComponent_ion_button_1_Template, 2, 4, "ion-button", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
            }
          },
          directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"]],
          styles: ["ion-buttons[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n      }\n\n      [ion-button][disabled][_ngcontent-%COMP%] {\n        opacity: 1;\n      }\n\n      ion-icon[_ngcontent-%COMP%] {\n        color: gray;\n      }\n\n      ion-icon.filled[_ngcontent-%COMP%] {\n        color: orange;\n      }"]
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingComponent, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
              selector: "rating",
              template: "\n    <ion-buttons>\n      <ion-button [disabled]=\"readonly\" fill=\"clear\" [size]=\"size\" *ngFor=\"let current of [1, 2, 3, 4, 5]; let i = index\"\n        (click)=\"onClick(i + 1)\" (mouseover)=\"hoverRate = i + 1\" (mouseleave)=\"hoverRate = 0\">\n        <ion-icon slot=\"icon-only\" name=\"star\" [class.filled]=\"(i + 1 <= hoverRate || (!hoverRate && i + 1 <= rate))\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  ",
              styles: ["\n      ion-buttons {\n        display: flex;\n        justify-content: center;\n      }\n\n      [ion-button][disabled] {\n        opacity: 1;\n      }\n\n      ion-icon {\n        color: gray;\n      }\n\n      ion-icon.filled {\n        color: orange;\n      }\n    "],
              providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
                  return RatingComponent_1;
                }),
                multi: true
              }]
            }]
          }], function () {
            return [];
          }, {
            size: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }],
            rateChange: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
            }],
            rate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }],
            readonly: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }]
          });
        })();

        return RatingComponent;
      }(); //# sourceMappingURL=rating.js.map

      /***/

    },

    /***/
    "FtR2":
    /*!*******************************************!*\
      !*** ./src/app/pages/rate/rate.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function FtR2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".title {\n  background: #f3f3f3;\n  color: var(--ion-color-primary);\n  font-size: 1.3rem;\n  text-align: center;\n  font-weight: bold;\n  margin: 0px;\n  padding: 10px;\n}\n\n.flex_box {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 10px;\n  border-bottom: 1px solid lightgray;\n}\n\n.flex_box .name {\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.driver {\n  padding: 10px;\n}\n\n.driver ion-textarea {\n  border-bottom: 1px solid lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmF0ZS9yYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtBQUVKOztBQURJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUdSOztBQUFBO0VBQ0ksYUFBQTtBQUdKOztBQUZJO0VBQ0ksa0NBQUE7QUFJUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JhdGUvcmF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLmZsZXhfYm94e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgLm5hbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbn1cbi5kcml2ZXJ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBpb24tdGV4dGFyZWF7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "Xcyb":
    /*!***************************************************************!*\
      !*** ./node_modules/ionic4-rating/__ivy_ngcc__/dist/index.js ***!
      \***************************************************************/

    /*! exports provided: IonicRatingModule, RatingComponent */

    /***/
    function Xcyb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _ionic_rating_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ionic-rating.module */
      "4/DR");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IonicRatingModule", function () {
        return _ionic_rating_module__WEBPACK_IMPORTED_MODULE_0__["IonicRatingModule"];
      });
      /* harmony import */


      var _components_rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/rating */
      "CbC+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RatingComponent", function () {
        return _components_rating__WEBPACK_IMPORTED_MODULE_1__["RatingComponent"];
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "YuTi":
    /*!***********************************!*\
      !*** (webpack)/buildin/module.js ***!
      \***********************************/

    /*! no static exports found */

    /***/
    function YuTi(module, exports) {
      module.exports = function (module) {
        if (!module.webpackPolyfill) {
          module.deprecate = function () {};

          module.paths = []; // module.parent = undefined by default

          if (!module.children) module.children = [];
          Object.defineProperty(module, "loaded", {
            enumerable: true,
            get: function get() {
              return module.l;
            }
          });
          Object.defineProperty(module, "id", {
            enumerable: true,
            get: function get() {
              return module.i;
            }
          });
          module.webpackPolyfill = 1;
        }

        return module;
      };
      /***/

    },

    /***/
    "oQQC":
    /*!***************************************************!*\
      !*** ./src/app/pages/rate/rate-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: RatePageRoutingModule */

    /***/
    function oQQC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RatePageRoutingModule", function () {
        return RatePageRoutingModule;
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


      var _rate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rate.page */
      "A+rc");

      var routes = [{
        path: '',
        component: _rate_page__WEBPACK_IMPORTED_MODULE_3__["RatePage"]
      }];

      var RatePageRoutingModule = function RatePageRoutingModule() {
        _classCallCheck(this, RatePageRoutingModule);
      };

      RatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RatePageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-rate-rate-module-es5.js.map