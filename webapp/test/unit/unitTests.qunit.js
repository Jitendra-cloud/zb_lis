/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"djplistdetail/zb_listdetail/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});