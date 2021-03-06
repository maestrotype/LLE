(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inbox-inbox-module"], {
    /***/
    "+duN":
    /*!*********************************************!*\
      !*** ./src/app/pages/inbox/inbox.module.ts ***!
      \*********************************************/

    /*! exports provided: InboxPageModule */

    /***/
    function duN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InboxPageModule", function () {
        return InboxPageModule;
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


      var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./inbox-routing.module */
      "LBzs");
      /* harmony import */


      var _inbox_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./inbox.page */
      "6/Vj");
      /* harmony import */


      var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/directives/shared.module */
      "dVnR");

      var InboxPageModule = function InboxPageModule() {
        _classCallCheck(this, InboxPageModule);
      };

      InboxPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inbox_routing_module__WEBPACK_IMPORTED_MODULE_5__["InboxPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_inbox_page__WEBPACK_IMPORTED_MODULE_6__["InboxPage"]]
      })], InboxPageModule);
      /***/
    },

    /***/
    "6/Vj":
    /*!*******************************************!*\
      !*** ./src/app/pages/inbox/inbox.page.ts ***!
      \*******************************************/

    /*! exports provided: InboxPage */

    /***/
    function Vj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InboxPage", function () {
        return InboxPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_inbox_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./inbox.page.html */
      "g/jL");
      /* harmony import */


      var _inbox_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inbox.page.scss */
      "D3f4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angularfire2/firestore */
      "CqG3");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc");

      var InboxPage = /*#__PURE__*/function () {
        function InboxPage(adb, api) {
          var _this = this;

          _classCallCheck(this, InboxPage);

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
          this.adb.collection('users').doc(localStorage.getItem('help')).snapshotChanges().subscribe(function (data) {
            _this.api.getProfile(localStorage.getItem('help')).then(function (info) {
              console.log(info);

              if (info && info.count) {
                _this.count = info.count;
              } else {
                _this.count = 0;
              }
            })["catch"](function (error) {
              console.log(error);
            });
          });
        }

        _createClass(InboxPage, [{
          key: "getMessages",
          value: function getMessages() {
            var _this2 = this;

            this.adb.collection('messages').doc(this.id).collection('chats').snapshotChanges().subscribe(function (data) {
              console.log(data);

              _this2.api.getMessages(_this2.id).then(function (info) {
                console.log(info);
                info.sort(function (a, b) {
                  return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
                });
                _this2.messages = info;
                console.log('info', _this2.messages);

                _this2.scrollToBottomOnInit();
              })["catch"](function (error) {
                console.log(error);
              });
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "send",
          value: function send() {
            console.log('this.mess', this.message);

            if (this.message && this.id) {
              var text = this.message;
              this.message = '';
              console.log('send');
              var id = Math.floor(100000000 + Math.random() * 900000000);
              var data = {
                msg: text,
                from: 'user',
                timestamp: new Date().toISOString(),
                id: this.id,
                docId: id
              };
              this.adb.collection('messages').doc(this.id).collection('chats').doc(id.toString()).set(data).then(function (data) {
                console.log('sent', data);
              })["catch"](function (error) {
                console.log(error);
              });
              var count = {
                count: this.count + 1
              };
              this.api.updateProfile(localStorage.getItem('help'), count).then(function (data) {
                console.log('updated', data);
              })["catch"](function (error) {
                console.log(error);
              });
            }
          }
        }, {
          key: "scrollToBottomOnInit",
          value: function scrollToBottomOnInit() {
            try {
              this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
            } catch (err) {}
          }
        }]);

        return InboxPage;
      }();

      InboxPage.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]
        }];
      };

      InboxPage.propDecorators = {
        myScrollContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollMe']
        }],
        messagesList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
          args: ['messages']
        }]
      };
      InboxPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inbox',
        template: _raw_loader_inbox_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inbox_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]])], InboxPage);
      /***/
    },

    /***/
    "D3f4":
    /*!*********************************************!*\
      !*** ./src/app/pages/inbox/inbox.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function D3f4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  background: white;\n  position: relative;\n}\n.main_content_div .lower_div {\n  padding: 0px 20px;\n}\n.main_content_div .lower_div .main_div_right {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  position: relative;\n}\n.main_content_div .lower_div .main_div_right .msg_div {\n  display: flex;\n  justify-content: flex-end;\n  width: 80%;\n  margin-bottom: 15px;\n}\n.main_content_div .lower_div .main_div_right .msg_div .inner_msg {\n  background-color: #F0EFF5;\n  padding: 10px;\n  border-radius: 5px;\n}\n.main_content_div .lower_div .main_div_right .tri_right {\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-top: 10px solid #F0EFF5;\n  border-left: 10px solid transparent;\n  bottom: 10px;\n}\n.main_content_div .lower_div .main_div_left {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  position: relative;\n}\n.main_content_div .lower_div .main_div_left .msg_div {\n  display: flex;\n  justify-content: flex-start;\n  width: 80%;\n  margin-bottom: 15px;\n}\n.main_content_div .lower_div .main_div_left .msg_div .inner_msg {\n  background-color: var(--ion-color-danger);\n  padding: 10px;\n  border-radius: 5px;\n  color: white;\n}\n.main_content_div .lower_div .main_div_left .tri_left {\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-top: 10px solid var(--ion-color-main2);\n  border-right: 10px solid transparent;\n  bottom: 10px;\n}\n.footer_div {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 20px;\n}\n.footer_div ion-toolbar {\n  --background: #FDFDFD;\n}\n.footer_div ion-input {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  --padding-start: 8px;\n  height: 20px;\n  height: 35px;\n}\n.footer_div .send_btn {\n  font-size: 20px;\n  color: var(--ion-color-main2);\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5ib3gvaW5ib3gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUVJO0VBQ0ksaUJBQUE7QUFBUjtBQUNRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQ1o7QUFBWTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUVoQjtBQURnQjtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBR3BCO0FBQVk7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7QUFFaEI7QUFDUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUNaO0FBQVk7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFFaEI7QUFEZ0I7RUFDSSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFHcEI7QUFBWTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQUVoQjtBQUlBO0VBS0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBTEo7QUFESTtFQUNJLHFCQUFBO0FBR1I7QUFJSTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRlI7QUFLSTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBSFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmJveC9pbmJveC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5sb3dlcl9kaXZ7XG4gICAgICAgIHBhZGRpbmc6MHB4IDIwcHg7XG4gICAgICAgIC5tYWluX2Rpdl9yaWdodHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAubXNnX2RpdntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgIC5pbm5lcl9tc2d7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEVGRjU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudHJpX3JpZ2h0e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjRjBFRkY1O1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubWFpbl9kaXZfbGVmdHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIC5tc2dfZGl2e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICAuaW5uZXJfbXNne1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTs7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50cmlfbGVmdHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1haW4yKTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZm9vdGVyX2RpdntcblxuICAgIGlvbi10b29sYmFye1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNGREZERkQ7XG4gICAgfVxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICBpb24taW5wdXR7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgfVxuXG4gICAgLnNlbmRfYnRue1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbjIpO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "LBzs":
    /*!*****************************************************!*\
      !*** ./src/app/pages/inbox/inbox-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: InboxPageRoutingModule */

    /***/
    function LBzs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InboxPageRoutingModule", function () {
        return InboxPageRoutingModule;
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


      var _inbox_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inbox.page */
      "6/Vj");

      var routes = [{
        path: '',
        component: _inbox_page__WEBPACK_IMPORTED_MODULE_3__["InboxPage"]
      }];

      var InboxPageRoutingModule = function InboxPageRoutingModule() {
        _classCallCheck(this, InboxPageRoutingModule);
      };

      InboxPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InboxPageRoutingModule);
      /***/
    },

    /***/
    "g/jL":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbox/inbox.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function gJL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">{{'Support' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"main_content_div\">\n    <div class=\"lower_div\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n      <span *ngFor=\"let msg of messages\">\n        <div class=\"main_div_right\" *ngIf=\"msg.from == 'user'\">\n          <div class=\"msg_div\">\n            <div class=\"inner_msg\">\n              {{msg.msg}}\n            </div>\n          </div>\n          <div class=\"tri_right\"></div>\n        </div>\n\n        <div class=\"main_div_left\" *ngIf=\"msg.from == 'admin'\">\n          <div class=\"msg_div\">\n            <div class=\"inner_msg\">\n              {{msg.msg}}\n            </div>\n          </div>\n          <div class=\"tri_left\"></div>\n        </div>\n      </span>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <div class=\"footer_div\">\n      <ion-input type=\"text\" [(ngModel)]=\"message\" [placeholder]=\"('Type a message..' | translate) || '&nbsp;'\">\n      </ion-input>\n      <ion-icon class=\"send_btn\" (click)=\"send()\" name=\"send-sharp\"></ion-icon>\n    </div>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-inbox-inbox-module-es5.js.map