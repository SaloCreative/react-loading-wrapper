'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsLoadingWrapper = require('./components/loadingWrapper');

var _componentsLoadingWrapper2 = _interopRequireDefault(_componentsLoadingWrapper);

var _componentsFetchFail = require('./components/fetchFail');

var _componentsFetchFail2 = _interopRequireDefault(_componentsFetchFail);

exports['default'] = _componentsLoadingWrapper2['default'];
exports.FetchFail = _componentsFetchFail2['default'];