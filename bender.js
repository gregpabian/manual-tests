/**
 * Copyright (c) 2014, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 */

var config = {
	applications: {
		ago: {
			path: 'lib/',
			files: [
				'ago.js'
			]
		},
		ckeditor: {
			path: 'ckeditor/',
			files: [
				'ckeditor.js'
			]
		}
	},

	coverage: {
		paths: [
			'lib/**'
		]
	},

	framework: 'jasmine',

	startBrowser: 'firefox',

	manualBrowsers: [ 'chrome' ],

	plugins: [ 'benderjs-jasmine', 'benderjs-coverage' ],

	tests: {
		Core: {
			applications: [ 'ago' ],
			basePath: 'tests/',
			paths: [
				'unit/**'
			]
		},
		Manual: {
			applications: [ 'ckeditor' ],
			basePath: 'tests/',
			paths: [
				'manual/**'
			]
		}
	},

	testTimeout: 10 * 1000
};

module.exports = config;
