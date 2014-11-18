'use strict';

require('./version-directive');
require('./interpolate-filter');

angular.module('myApp.version', [
	'myApp.version.interpolate-filter',
	'myApp.version.version-directive'
])

.value('version', '0.1');