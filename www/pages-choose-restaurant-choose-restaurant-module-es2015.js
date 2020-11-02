(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-choose-restaurant-choose-restaurant-module"],{

/***/ "Cmum":
/*!*********************************************************************!*\
  !*** ./src/app/pages/choose-restaurant/choose-restaurant.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header_div {\n  display: flex;\n  flex-direction: column;\n}\n\n.header_div .head_lbl {\n  margin-left: 16px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.header_div ion-searchbar {\n  margin-top: 15px;\n}\n\n.main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n\n.main_content_div .resto_detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.main_content_div .resto_detail ion-label {\n  display: block;\n}\n\n.main_content_div .resto_detail .back_image {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n}\n\n.main_content_div .resto_detail .res_name {\n  font-weight: 600;\n}\n\n.main_content_div .resto_detail .res_location {\n  color: lightgray;\n  font-size: 14px;\n}\n\n.main_content_div .line_div {\n  width: 100%;\n  height: 1px;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hvb3NlLXJlc3RhdXJhbnQvY2hvb3NlLXJlc3RhdXJhbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtBQUMxQjs7QUFIQTtFQUlRLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0FBR3hCOztBQVRBO0VBVVEsZ0JBQWdCO0FBR3hCOztBQUNBO0VBQ0ksV0FBVztFQUNYLGFBQWE7QUFFakI7O0FBSkE7RUFLUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUczQjs7QUFWQTtFQVVZLGNBQWM7QUFJMUI7O0FBZEE7RUFjWSxZQUFZO0VBQ1osV0FBVztFQUNYLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUk5Qjs7QUF2QkE7RUF1QlUsZ0JBQWdCO0FBSTFCOztBQTNCQTtFQTBCWSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUszQjs7QUFoQ0E7RUErQlEsV0FBVztFQUNYLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUszQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nob29zZS1yZXN0YXVyYW50L2Nob29zZS1yZXN0YXVyYW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJfZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAuaGVhZF9sYmx7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgaW9uLXNlYXJjaGJhcntcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAucmVzdG9fZGV0YWlse1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuYmFja19pbWFnZXtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmVzX25hbWV7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgIFxuICAgICAgICB9IFxuICAgICAgICAucmVzX2xvY2F0aW9ue1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubGluZV9kaXZ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "dg/j":
/*!*********************************************************************!*\
  !*** ./src/app/pages/choose-restaurant/choose-restaurant.module.ts ***!
  \*********************************************************************/
/*! exports provided: ChooseRestaurantPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseRestaurantPageModule", function() { return ChooseRestaurantPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _choose_restaurant_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./choose-restaurant-routing.module */ "tIYn");
/* harmony import */ var _choose_restaurant_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choose-restaurant.page */ "za+Y");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "dVnR");








let ChooseRestaurantPageModule = class ChooseRestaurantPageModule {
};
ChooseRestaurantPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _choose_restaurant_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChooseRestaurantPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_choose_restaurant_page__WEBPACK_IMPORTED_MODULE_6__["ChooseRestaurantPage"]]
    })
], ChooseRestaurantPageModule);



/***/ }),

/***/ "tIYn":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/choose-restaurant/choose-restaurant-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ChooseRestaurantPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseRestaurantPageRoutingModule", function() { return ChooseRestaurantPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _choose_restaurant_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choose-restaurant.page */ "za+Y");




const routes = [
    {
        path: '',
        component: _choose_restaurant_page__WEBPACK_IMPORTED_MODULE_3__["ChooseRestaurantPage"]
    }
];
let ChooseRestaurantPageRoutingModule = class ChooseRestaurantPageRoutingModule {
};
ChooseRestaurantPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChooseRestaurantPageRoutingModule);



/***/ }),

/***/ "wjq1":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-restaurant/choose-restaurant.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"header_div\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n      </ion-buttons>\n      <ion-label class=\"head_lbl\">{{'Select Restaurant' | translate}}</ion-label>\n\n      <ion-searchbar [placeholder]=\"('Search by restaurant' | translate) || '&nbsp;'\" mode=\"ios\"\n        (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\" showCancelButton=\"never\"></ion-searchbar>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"card_div\" *ngFor=\"let item of restaurants\" (click)=\"goToAddReview(item)\">\n      <div class=\"resto_detail\">\n        <img [src]=\"item.cover\" class=\"back_image\" alt=\"\">\n        <!-- <div class=\"back_image\" [style.backgroundImage]=\"'url('+item.cover+')'\"></div> -->\n        <div style=\"padding-left: 20px;\">\n          <ion-label class=\"res_name\">{{item.name}}</ion-label>\n          <ion-label class=\"res_location\">{{item.address}}</ion-label>\n        </div>\n      </div>\n      <div class=\"line_div\"></div>\n    </div>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "za+Y":
/*!*******************************************************************!*\
  !*** ./src/app/pages/choose-restaurant/choose-restaurant.page.ts ***!
  \*******************************************************************/
/*! exports provided: ChooseRestaurantPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseRestaurantPage", function() { return ChooseRestaurantPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_choose_restaurant_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./choose-restaurant.page.html */ "wjq1");
/* harmony import */ var _choose_restaurant_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choose-restaurant.page.scss */ "Cmum");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");






let ChooseRestaurantPage = class ChooseRestaurantPage {
    constructor(router, api) {
        this.router = router;
        this.api = api;
        this.restaurants = [];
        this.dummyRest = [];
        this.resetChanges = () => {
            this.restaurants = this.dummyRest;
        };
    }
    ngOnInit() {
        this.api.getVenues().then((data) => {
            console.log('dataa', data);
            if (data) {
                this.restaurants = [];
                this.dummyRest = [];
                data.forEach(element => {
                    if (element && element.isClose === false) {
                        this.restaurants.push(element);
                        this.dummyRest.push(element);
                    }
                });
            }
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    goToAddReview(item) {
        const navData = {
            queryParams: {
                id: item.id
            }
        };
        this.router.navigate(['/add-review'], navData);
    }
    setFilteredItems() {
        console.log('clear');
        this.restaurants = [];
        this.restaurants = this.dummyRest;
    }
    filterItems(searchTerm) {
        return this.restaurants.filter((item) => {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }
    onSearchChange(event) {
        this.resetChanges();
        this.restaurants = this.filterItems(event.detail.value);
    }
};
ChooseRestaurantPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"] }
];
ChooseRestaurantPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-choose-restaurant',
        template: _raw_loader_choose_restaurant_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_choose_restaurant_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]])
], ChooseRestaurantPage);



/***/ })

}]);
//# sourceMappingURL=pages-choose-restaurant-choose-restaurant-module-es2015.js.map