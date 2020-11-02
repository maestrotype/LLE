(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cities-cities-module"],{

/***/ "6mc3":
/*!***********************************************!*\
  !*** ./src/app/pages/cities/cities.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".noData {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 250px;\n}\n\n.btns {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 0px;\n  margin-top: 70px;\n}\n\n.btns .flagActive {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  border: 2px solid var(--ion-color-primary);\n  margin: 0px 10px;\n}\n\n.btns .flagDeactive {\n  height: 45px;\n  width: 45px;\n  margin: 0px 10px;\n  opacity: .5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2l0aWVzL2NpdGllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLGFBQWE7QUFDakI7O0FBQ0E7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUVwQjs7QUFSQTtFQVFRLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxnQkFBZ0I7QUFJeEI7O0FBaEJBO0VBZVEsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztBQUtuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NpdGllcy9jaXRpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vRGF0YXtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xufVxuLmJ0bnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICAuZmxhZ0FjdGl2ZXtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgfVxuICAgIC5mbGFnRGVhY3RpdmV7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgICAgIG9wYWNpdHk6IC41O1xuICAgIH1cbn0gICAiXX0= */");

/***/ }),

/***/ "Hof1":
/*!*********************************************!*\
  !*** ./src/app/pages/cities/cities.page.ts ***!
  \*********************************************/
/*! exports provided: CitiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesPage", function() { return CitiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cities_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cities.page.html */ "kdNm");
/* harmony import */ var _cities_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cities.page.scss */ "6mc3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








let CitiesPage = class CitiesPage {
    constructor(api, util, navCtrl, translate) {
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.cities = [];
        this.dummy = Array(10);
        this.dummyList = [];
        const lng = localStorage.getItem('language');
        if (!lng || lng === null) {
            localStorage.setItem('language', 'en');
        }
        this.translate.use(localStorage.getItem('language'));
        this.getCities();
    }
    getCities() {
        this.api.getCities().then((data) => {
            console.log("data", data);
            this.dummy = [];
            if (data && data.length) {
                data.forEach(element => {
                    if (element && element.status === 'active') {
                        this.cities.push(element);
                        this.dummyList.push(element);
                    }
                });
            }
        }).catch(error => {
            console.log(error);
            this.util.errorToast(this.util.translate('Something went wrong'));
            this.dummy = [];
        });
    }
    ngOnInit() {
    }
    goNext() {
        console.log('next', this.selectedCity);
        const data = this.cities.filter(x => x.id === this.selectedCity);
        console.log(data);
        localStorage.setItem('selectedCity', JSON.stringify(data[0]));
        this.util.publishLocation('data');
        this.navCtrl.navigateRoot(['/tabs']);
    }
    getClassName() {
        return localStorage.getItem('language');
    }
    changeLng(lng) {
        localStorage.setItem('language', lng);
        this.translate.use(lng);
    }
};
CitiesPage.ctorParameters = () => [
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
CitiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cities',
        template: _raw_loader_cities_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cities_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
], CitiesPage);



/***/ }),

/***/ "eiZR":
/*!***********************************************!*\
  !*** ./src/app/pages/cities/cities.module.ts ***!
  \***********************************************/
/*! exports provided: CitiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesPageModule", function() { return CitiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cities_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cities-routing.module */ "yRzU");
/* harmony import */ var _cities_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cities.page */ "Hof1");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "dVnR");








let CitiesPageModule = class CitiesPageModule {
};
CitiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cities_routing_module__WEBPACK_IMPORTED_MODULE_5__["CitiesPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_cities_page__WEBPACK_IMPORTED_MODULE_6__["CitiesPage"]]
    })
], CitiesPageModule);



/***/ }),

/***/ "kdNm":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cities/cities.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>{{'Select City' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"noData\" *ngIf=\"!dummy?.length && !cities?.length\" [style.backgroundImage]=\"'url(assets/nothing.jpg)'\">\n  </div>\n  <p class=\"ion-text-center\" *ngIf=\"!dummy?.length && !cities?.length\">{{'No Cities Found' | translate}}</p>\n  <div *ngFor=\"let item of dummy\">\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div>\n    <ion-list>\n      <ion-radio-group [(ngModel)]=\"selectedCity\">\n        <ion-item *ngFor=\"let item of cities\">\n          <ion-label>{{item.name}}</ion-label>\n          <ion-radio mode=\"md\" slot=\"start\" [value]=\"item.id\"></ion-radio>\n        </ion-item>\n\n      </ion-radio-group>\n    </ion-list>\n  </div>\n  <div class=\"btns\">\n    <img src=\"assets/imgs/en.png\" (click)=\"changeLng('en')\"\n      [ngClass]=\"getClassName() == 'en' ? 'flagActive':'flagDeactive'\" alt=\"\">\n    <img src=\"assets/imgs/spanish.png\" (click)=\"changeLng('spanish')\"\n      [ngClass]=\"getClassName() == 'spanish' ? 'flagActive':'flagDeactive'\" alt=\"\">\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"selectedCity\" (click)=\"goNext()\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "yRzU":
/*!*******************************************************!*\
  !*** ./src/app/pages/cities/cities-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CitiesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesPageRoutingModule", function() { return CitiesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cities_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cities.page */ "Hof1");




const routes = [
    {
        path: '',
        component: _cities_page__WEBPACK_IMPORTED_MODULE_3__["CitiesPage"]
    }
];
let CitiesPageRoutingModule = class CitiesPageRoutingModule {
};
CitiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CitiesPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-cities-cities-module-es2015.js.map