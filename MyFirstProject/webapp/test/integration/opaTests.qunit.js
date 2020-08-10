/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/sapgroup/MyFirstProject/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});