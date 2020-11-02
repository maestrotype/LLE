(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tracker-tracker-module"], {
    /***/
    "KAE8":
    /*!*************************************************!*\
      !*** ./src/app/pages/tracker/tracker.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function KAE8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.main_content_div .upper_div {\n  height: 60vh;\n}\n\n.main_content_div .upper_div #map {\n  width: 100%;\n  height: 100%;\n}\n\n.main_content_div .lower_div {\n  height: 40vh;\n  padding: 20px;\n}\n\n.main_content_div .lower_div ion-label {\n  display: block;\n}\n\n.main_content_div .lower_div .head_lbl {\n  font-weight: 600;\n  font-size: 20px;\n  margin-top: 10px;\n}\n\n.main_content_div .lower_div .driver_detail_div {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n\n.main_content_div .lower_div .driver_detail_div .back_image {\n  height: 50px !important;\n  width: 50px !important;\n  border-radius: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-width: 50px;\n}\n\n.main_content_div .lower_div .driver_detail_div .boy_name {\n  font-weight: 600;\n}\n\n.main_content_div .lower_div .driver_detail_div .address {\n  color: gray;\n  width: 80%;\n}\n\n.main_content_div .lower_div .driver_detail_div ion-button {\n  position: absolute;\n  right: -3px;\n  top: -5px;\n  --border-radius: 3px;\n  font-weight: 600;\n}\n\n.main_content_div .lower_div .order_detail {\n  font-weight: bold;\n  margin-top: 20px;\n}\n\n.main_content_div .lower_div .order_status {\n  background: var(--ion-color-primary);\n  position: absolute;\n  right: 20px;\n  color: white;\n  padding: 3px 8px;\n  border-radius: 3px;\n  text-transform: uppercase;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhY2tlci90cmFja2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDbEM7O0FBTkE7RUFPUSxZQUFZO0FBR3BCOztBQVZBO0VBU1ksV0FBVztFQUNYLFlBQVk7QUFLeEI7O0FBZkE7RUFjUSxZQUFZO0VBQ1osYUFBYTtBQUtyQjs7QUFwQkE7RUFpQlksY0FBYztBQU8xQjs7QUF4QkE7RUFvQlksZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFRNUI7O0FBOUJBO0VBMEJZLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFROUI7O0FBdENBO0VBZ0NnQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixlQUFnQjtBQVVoQzs7QUFoREE7RUF5Q2dCLGdCQUFnQjtBQVdoQzs7QUFwREE7RUE0Q2dCLFdBQVc7RUFDWCxVQUFVO0FBWTFCOztBQXpEQTtFQWdEZ0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsb0JBQWdCO0VBQ2hCLGdCQUFnQjtBQWFoQzs7QUFqRUE7RUF5RFksaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQVk1Qjs7QUF0RUE7RUE2RFksb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0FBYXJDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHJhY2tlci90cmFja2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAudXBwZXJfZGl2e1xuICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgICNtYXB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubG93ZXJfZGl2e1xuICAgICAgICBoZWlnaHQ6IDQwdmg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuaGVhZF9sYmx7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kcml2ZXJfZGV0YWlsX2RpdntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAuYmFja19pbWFnZXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGggOiA1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJveV9uYW1le1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWRkcmVzc3tcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0zcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAub3JkZXJfZGV0YWlse1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5vcmRlcl9zdGF0dXN7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgfSAgIFxufSJdfQ== */";
      /***/
    },

    /***/
    "OtiO":
    /*!***********************************************!*\
      !*** ./src/app/pages/tracker/tracker.page.ts ***!
      \***********************************************/

    /*! exports provided: TrackerPage */

    /***/
    function OtiO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrackerPage", function () {
        return TrackerPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tracker_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tracker.page.html */
      "dfCF");
      /* harmony import */


      var _tracker_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tracker.page.scss */
      "KAE8");
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "mrps");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);

      var TrackerPage = /*#__PURE__*/function () {
        function TrackerPage(route, api, adb, util, navCtrl) {
          _classCallCheck(this, TrackerPage);

          this.route = route;
          this.api = api;
          this.adb = adb;
          this.util = util;
          this.navCtrl = navCtrl;
          this.latOri = '';
          this.longOri = '';
          this.latDest = '';
          this.longDest = '';
          this.id = '';
          this.dName = '';
          this.restAddress = '';
          this.dCover = '';
          this.phone = '';
          this.status = '';
          this.totalOrders = [];
        }

        _createClass(TrackerPage, [{
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
          key: "callDriver",
          value: function callDriver() {
            // window.open('tel:' + this.phone);
            window.open('https://api.whatsapp.com/send?phone=91' + this.phone);
          }
        }, {
          key: "getOrder",
          value: function getOrder() {
            var _this2 = this;

            this.util.show();
            this.api.getOrderById(this.id).then(function (data) {
              _this2.util.hide();

              console.log(data);

              if (data) {
                _this2.dName = data.dId.fullname;
                _this2.dCover = data.dId.coverImage;
                _this2.dId = data.dId.uid;
                _this2.restAddress = data.vid.address;
                _this2.phone = data.dId.phone;
                _this2.status = data.status;
                _this2.grandTotal = data.grandTotal;
                _this2.totalOrders = JSON.parse(data.order);

                _this2.getDriverInfo();

                console.log('my order', _this2.totalOrders);

                _this2.loadMap(parseFloat(data.address.lat), parseFloat(data.address.lng), parseFloat(data.vid.lat), parseFloat(data.vid.lng));
              }
            }, function (error) {
              console.log('error in orders', error);

              _this2.util.hide();

              _this2.util.errorToast('Something went wrong');
            })["catch"](function (error) {
              console.log('error in order', error);

              _this2.util.hide();

              _this2.util.errorToast('Something went wrong');
            });
          }
        }, {
          key: "getDriverInfo",
          value: function getDriverInfo() {
            var _this3 = this;

            this.adb.collection('orders').doc(this.id).snapshotChanges().subscribe(function (data) {
              console.log(data.payload.data());

              if (data) {
                _this3.status = data.payload.data().status;

                if (data.payload.data().status === 'delivered') {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                    title: 'Order Delivered',
                    text: 'Your Order is Delivered',
                    icon: 'success',
                    backdrop: false
                  });

                  _this3.navCtrl.navigateRoot(['tabs/tab2']);
                }
              }
            }, function (error) {
              console.log(error);
            });
            this.adb.collection('users').doc(this.dId).snapshotChanges().subscribe(function (data) {
              console.log(data.payload.data());

              if (data) {
                _this3.driverLat = data.payload.data().lat;
                _this3.driverLng = data.payload.data().lng;
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "changeMarkerPosition",
          value: function changeMarkerPosition(marker, map) {
            var latlng = new google.maps.LatLng(this.driverLat, this.driverLng);
            map.setCenter(latlng);
            marker.setPosition(latlng);
            console.log("Updating runner position");
          }
        }, {
          key: "loadMap",
          value: function loadMap(latOri, lngOri, latDest, lngDest) {
            var _this4 = this;

            var directionsService = new google.maps.DirectionsService();
            var directionsDisplay = new google.maps.DirectionsRenderer();
            directionsDisplay = new google.maps.DirectionsRenderer();
            var bounds = new google.maps.LatLngBounds();
            var origin1 = {
              lat: parseFloat(latOri),
              lng: parseFloat(lngOri)
            };
            var destinationA = {
              lat: latDest,
              lng: lngDest
            };
            var destinationIcon = 'https://chart.googleapis.com/chart?' + 'chst=d_map_pin_letter&chld=D|FF0000|000000';
            var originIcon = 'https://chart.googleapis.com/chart?' + 'chst=d_map_pin_letter&chld=O|FFFF00|000000';
            var map = new google.maps.Map(this.mapElement.nativeElement, {
              center: {
                lat: latOri,
                lng: lngOri
              },
              disableDefaultUI: true,
              zoom: 100
            });
            var custPos = new google.maps.LatLng(latOri, lngOri);
            var restPos = new google.maps.LatLng(latDest, lngDest);
            var icon = {
              url: 'assets/icon.png',
              scaledSize: new google.maps.Size(50, 50),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(0, 0) // anchor

            };
            var marker = new google.maps.Marker({
              map: map,
              position: custPos,
              animation: google.maps.Animation.DROP,
              icon: icon
            });
            var markerCust = new google.maps.Marker({
              map: map,
              position: restPos,
              animation: google.maps.Animation.DROP
            });
            marker.setMap(map);
            markerCust.setMap(map);
            directionsDisplay.setMap(map); // directionsDisplay.setOptions({ suppressMarkers: true });

            directionsDisplay.setOptions({
              polylineOptions: {
                strokeWeight: 4,
                strokeOpacity: 1,
                strokeColor: 'red'
              },
              suppressMarkers: true
            });
            var geocoder = new google.maps.Geocoder();
            var service = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix({
              origins: [origin1],
              destinations: [destinationA],
              travelMode: 'DRIVING',
              unitSystem: google.maps.UnitSystem.METRIC,
              avoidHighways: false,
              avoidTolls: false
            }, function (response, status) {
              if (status !== 'OK') {
                alert('Error was: ' + status);
              } else {
                var originList = response.originAddresses;
                var destinationList = response.destinationAddresses;
                var outputDiv = document.getElementById('output'); // outputDiv.innerHTML = '';
                // deleteMarkers(markersArray);

                var showGeocodedAddressOnMap = function showGeocodedAddressOnMap(asDestination) {
                  var icon = asDestination ? destinationIcon : originIcon;
                  return function (results, status) {
                    if (status === 'OK') {
                      map.fitBounds(bounds.extend(results[0].geometry.location)); // markersArray.push(new google.maps.Marker({
                      //   map: map,
                      //   position: results[0].geometry.location,
                      //   icon: icon
                      // }));
                    } else {
                      alert('Geocode was not successful due to: ' + status);
                    }
                  };
                };

                directionsService.route({
                  origin: origin1,
                  destination: destinationA,
                  travelMode: 'DRIVING'
                }, function (response, status) {
                  if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                  } else {
                    window.alert('Directions request failed due to ' + status);
                  }
                });

                for (var i = 0; i < originList.length; i++) {
                  var results = response.rows[i].elements;
                  geocoder.geocode({
                    'address': originList[i]
                  }, showGeocodedAddressOnMap(false));

                  for (var j = 0; j < results.length; j++) {
                    geocoder.geocode({
                      'address': destinationList[j]
                    }, showGeocodedAddressOnMap(true));
                  }
                }
              }
            });
            this.interval = setInterval(function () {
              _this4.changeMarkerPosition(marker, map);
            }, 12000);
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            console.log('leaae');
            clearInterval(this.interval);
          }
        }, {
          key: "getCurrency",
          value: function getCurrency() {
            return this.util.getCurrecySymbol();
          }
        }]);

        return TrackerPage;
      }();

      TrackerPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
        }];
      };

      TrackerPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['map', {
            "static": true
          }]
        }]
      };
      TrackerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tracker',
        template: _raw_loader_tracker_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tracker_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]])], TrackerPage);
      /***/
    },

    /***/
    "akYc":
    /*!*************************************************!*\
      !*** ./src/app/pages/tracker/tracker.module.ts ***!
      \*************************************************/

    /*! exports provided: TrackerPageModule */

    /***/
    function akYc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrackerPageModule", function () {
        return TrackerPageModule;
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


      var _tracker_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tracker-routing.module */
      "yKY6");
      /* harmony import */


      var _tracker_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tracker.page */
      "OtiO");
      /* harmony import */


      var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/directives/shared.module */
      "dVnR");

      var TrackerPageModule = function TrackerPageModule() {
        _classCallCheck(this, TrackerPageModule);
      };

      TrackerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tracker_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrackerPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_tracker_page__WEBPACK_IMPORTED_MODULE_6__["TrackerPage"]]
      })], TrackerPageModule);
      /***/
    },

    /***/
    "dfCF":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracker/tracker.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function dfCF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"upper_div\">\n      <div #map id=\"map\" class=\"map\"></div>\n    </div>\n    <div class=\"lower_div\">\n      <ion-label class=\"head_lbl\">{{'Order on the Way' | translate}}</ion-label>\n\n      <div class=\"driver_detail_div\">\n        <div class=\"back_image\" [style.backgroundImage]=\"'url('+dCover+')'\"></div>\n        <div style=\"padding-left: 20px;\">\n          <ion-label class=\"boy_name\">{{dName}}</ion-label>\n          <ion-label class=\"address\">{{restAddress}}</ion-label>\n          <ion-button (click)=\"callDriver()\" size=\"small\" fill=\"outline\">\n            {{'Call' | translate}}\n          </ion-button>\n        </div>\n      </div>\n\n      <ion-label class=\"order_detail\">{{totalOrders.length}} {{'Items to deliver' | translate}}<span\n          style=\"color: var(--ion-color-primary);position: absolute;right: 20px;\">{{grandTotal}}{{getCurrency()}}</span>\n      </ion-label>\n      <ion-label class=\"order_detail\">{{'Order Status' | translate}}<span class=\"order_status\">{{status}}</span>\n      </ion-label>\n\n    </div>\n\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "yKY6":
    /*!*********************************************************!*\
      !*** ./src/app/pages/tracker/tracker-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: TrackerPageRoutingModule */

    /***/
    function yKY6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrackerPageRoutingModule", function () {
        return TrackerPageRoutingModule;
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


      var _tracker_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tracker.page */
      "OtiO");

      var routes = [{
        path: '',
        component: _tracker_page__WEBPACK_IMPORTED_MODULE_3__["TrackerPage"]
      }];

      var TrackerPageRoutingModule = function TrackerPageRoutingModule() {
        _classCallCheck(this, TrackerPageRoutingModule);
      };

      TrackerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TrackerPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-tracker-tracker-module-es5.js.map