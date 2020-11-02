(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inbox-inbox-module"],{

/***/ "+duN":
/*!*********************************************!*\
  !*** ./src/app/pages/inbox/inbox.module.ts ***!
  \*********************************************/
/*! exports provided: InboxPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPageModule", function() { return InboxPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inbox-routing.module */ "LBzs");
/* harmony import */ var _inbox_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inbox.page */ "6/Vj");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "dVnR");








let InboxPageModule = class InboxPageModule {
};
InboxPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inbox_routing_module__WEBPACK_IMPORTED_MODULE_5__["InboxPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_inbox_page__WEBPACK_IMPORTED_MODULE_6__["InboxPage"]]
    })
], InboxPageModule);



/***/ }),

/***/ "6/Vj":
/*!*******************************************!*\
  !*** ./src/app/pages/inbox/inbox.page.ts ***!
  \*******************************************/
/*! exports provided: InboxPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPage", function() { return InboxPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inbox_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inbox.page.html */ "g/jL");
/* harmony import */ var _inbox_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox.page.scss */ "D3f4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "CqG3");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");






let InboxPage = class InboxPage {
    constructor(adb, api) {
        this.adb = adb;
        this.api = api;
        this.messages = [];
        this.count = 0;
        console.log('iddddddd---->', localStorage.getItem('help'));
        if (!localStorage.getItem('help')) {
            localStorage.setItem('help', localStorage.getItem('uid'));
        }
        this.id = 'admin' + localStorage.getItem('help');
        this.getMessages();
        this.adb.collection('users').doc(localStorage.getItem('help')).snapshotChanges().subscribe((data) => {
            this.api.getProfile(localStorage.getItem('help')).then((info) => {
                console.log(info);
                if (info && info.count) {
                    this.count = info.count;
                }
                else {
                    this.count = 0;
                }
            }).catch(error => {
                console.log(error);
            });
        });
    }
    getMessages() {
        this.adb.collection('messages').doc(this.id).collection('chats').snapshotChanges().subscribe((data) => {
            console.log(data);
            this.api.getMessages(this.id).then(info => {
                console.log(info);
                info.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
                this.messages = info;
                console.log('info', this.messages);
                this.scrollToBottomOnInit();
            }).catch(error => {
                console.log(error);
            });
        }, error => {
            console.log(error);
        });
    }
    ngOnInit() {
    }
    send() {
        console.log('this.mess', this.message);
        if (this.message && this.id) {
            const text = this.message;
            this.message = '';
            console.log('send');
            const id = Math.floor(100000000 + Math.random() * 900000000);
            const data = {
                msg: text,
                from: 'user',
                timestamp: new Date().toISOString(),
                id: this.id,
                docId: id
            };
            this.adb.collection('messages').doc(this.id).collection('chats').doc(id.toString()).set(data).then((data) => {
                console.log('sent', data);
            }).catch(error => {
                console.log(error);
            });
            const count = {
                count: this.count + 1,
            };
            this.api.updateProfile(localStorage.getItem('help'), count).then(data => {
                console.log('updated', data);
            }).catch(error => {
                console.log(error);
            });
        }
    }
    scrollToBottomOnInit() {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    }
};
InboxPage.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"] }
];
InboxPage.propDecorators = {
    myScrollContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['scrollMe',] }],
    messagesList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"], args: ['messages',] }]
};
InboxPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inbox',
        template: _raw_loader_inbox_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inbox_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]])
], InboxPage);



/***/ }),

/***/ "D3f4":
/*!*********************************************!*\
  !*** ./src/app/pages/inbox/inbox.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  background: white;\n  position: relative;\n}\n\n.main_content_div .lower_div {\n  padding: 0px 20px;\n}\n\n.main_content_div .lower_div .main_div_right {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  position: relative;\n}\n\n.main_content_div .lower_div .main_div_right .msg_div {\n  display: flex;\n  justify-content: flex-end;\n  width: 80%;\n  margin-bottom: 15px;\n}\n\n.main_content_div .lower_div .main_div_right .msg_div .inner_msg {\n  background-color: #F0EFF5;\n  padding: 10px;\n  border-radius: 5px;\n}\n\n.main_content_div .lower_div .main_div_right .tri_right {\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-top: 10px solid #F0EFF5;\n  border-left: 10px solid transparent;\n  bottom: 10px;\n}\n\n.main_content_div .lower_div .main_div_left {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  position: relative;\n}\n\n.main_content_div .lower_div .main_div_left .msg_div {\n  display: flex;\n  justify-content: flex-start;\n  width: 80%;\n  margin-bottom: 15px;\n}\n\n.main_content_div .lower_div .main_div_left .msg_div .inner_msg {\n  background-color: var(--ion-color-danger);\n  padding: 10px;\n  border-radius: 5px;\n  color: white;\n}\n\n.main_content_div .lower_div .main_div_left .tri_left {\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-top: 10px solid var(--ion-color-main2);\n  border-right: 10px solid transparent;\n  bottom: 10px;\n}\n\n.footer_div {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 20px;\n}\n\n.footer_div ion-toolbar {\n  --background: #FDFDFD;\n}\n\n.footer_div ion-input {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  --padding-start: 8px;\n  height: 20px;\n  height: 35px;\n}\n\n.footer_div .send_btn {\n  font-size: 20px;\n  color: var(--ion-color-main2);\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5ib3gvaW5ib3gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFBdEI7O0FBSEE7RUFNUSxpQkFBZ0I7QUFDeEI7O0FBUEE7RUFRWSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFHOUI7O0FBZEE7RUFhZ0IsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsbUJBQW1CO0FBS25DOztBQXJCQTtFQWtCb0IseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixrQkFBa0I7QUFPdEM7O0FBM0JBO0VBd0JnQixRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsbUNBQW1DO0VBQ25DLFlBQVk7QUFPNUI7O0FBcENBO0VBaUNZLFdBQVc7RUFDWCxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQU85Qjs7QUEzQ0E7RUFzQ2dCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLG1CQUFtQjtBQVNuQzs7QUFsREE7RUEyQ29CLHlDQUF5QztFQUN6QyxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFXaEM7O0FBekRBO0VBa0RnQixRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQiw2Q0FBNkM7RUFDN0Msb0NBQW9DO0VBQ3BDLFlBQVk7QUFXNUI7O0FBTEE7RUFLSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0FBSWpCOztBQVpBO0VBR1EscUJBQWE7QUFhckI7O0FBaEJBO0VBV1EsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixvQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7QUFTcEI7O0FBeEJBO0VBbUJRLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBU3pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5ib3gvaW5ib3gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAubG93ZXJfZGl2e1xuICAgICAgICBwYWRkaW5nOjBweCAyMHB4O1xuICAgICAgICAubWFpbl9kaXZfcmlnaHR7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgLm1zZ19kaXZ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICAuaW5uZXJfbXNne1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBFRkY1O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRyaV9yaWdodHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI0YwRUZGNTtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm1haW5fZGl2X2xlZnR7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAubXNnX2RpdntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgLmlubmVyX21zZ3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudHJpX2xlZnR7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tYWluMik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZvb3Rlcl9kaXZ7XG5cbiAgICBpb24tdG9vbGJhcntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRkRGREZEO1xuICAgIH1cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgaW9uLWlucHV0e1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgIH1cblxuICAgIC5zZW5kX2J0bntcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4yKTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "LBzs":
/*!*****************************************************!*\
  !*** ./src/app/pages/inbox/inbox-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: InboxPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPageRoutingModule", function() { return InboxPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inbox_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox.page */ "6/Vj");




const routes = [
    {
        path: '',
        component: _inbox_page__WEBPACK_IMPORTED_MODULE_3__["InboxPage"]
    }
];
let InboxPageRoutingModule = class InboxPageRoutingModule {
};
InboxPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InboxPageRoutingModule);



/***/ }),

/***/ "g/jL":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbox/inbox.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">{{'Support' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"main_content_div\">\n    <div class=\"lower_div\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n      <span *ngFor=\"let msg of messages\">\n        <div class=\"main_div_right\" *ngIf=\"msg.from == 'user'\">\n          <div class=\"msg_div\">\n            <div class=\"inner_msg\">\n              {{msg.msg}}\n            </div>\n          </div>\n          <div class=\"tri_right\"></div>\n        </div>\n\n        <div class=\"main_div_left\" *ngIf=\"msg.from == 'admin'\">\n          <div class=\"msg_div\">\n            <div class=\"inner_msg\">\n              {{msg.msg}}\n            </div>\n          </div>\n          <div class=\"tri_left\"></div>\n        </div>\n      </span>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <div class=\"footer_div\">\n      <ion-input type=\"text\" [(ngModel)]=\"message\" [placeholder]=\"('Type a message..' | translate) || '&nbsp;'\">\n      </ion-input>\n      <ion-icon class=\"send_btn\" (click)=\"send()\" name=\"send-sharp\"></ion-icon>\n    </div>\n  </ion-toolbar>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=pages-inbox-inbox-module-es2015.js.map