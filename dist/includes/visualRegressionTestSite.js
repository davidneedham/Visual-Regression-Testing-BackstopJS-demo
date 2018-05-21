'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (siteToTest) {
    var siteExists = Object.prototype.hasOwnProperty.call(_sitesToUpdate2.default, siteToTest);
    var rootDir = _path2.default.dirname(require.main.filename);
    if (rootDir.endsWith('dist')) {
        rootDir = rootDir.substring(0, rootDir.indexOf('/dist'));
    }

    if (!siteExists) {
        (0, _throwError2.default)(siteToTest + ' is not a valid site. Check the name you entered and the "includes/sitesToUpdate.js" config file');
    }

    _sitesToUpdate2.default[siteToTest].name = siteToTest;
    var site = _sitesToUpdate2.default[siteToTest];

    console.log('Testing: ' + site.label);

    console.log('Generating configuration for ' + site.label);
    var currentConfig = (0, _backstopConfig2.default)(site.BackstopReferenceBaseUrl, site.BackstopTestUrl, site.pathsToTest, site.name);

    console.log('Running Backstop tests for ' + site.label);
    (0, _backstopjs2.default)('reference', {
        config: currentConfig
    }).then(function () {
        console.log('Backstop JS reference complete for ' + site.label + '! Starting tests.');
        (0, _backstopjs2.default)('test', {
            config: currentConfig
        }).then(function () {

            console.log('Report saved to "' + rootDir + '/backstop_data/' + site.name + '/html_report/index.html"');
            // opn(`${rootDir}/backstop_data/${site.name}/html_report/index.html`)
            (0, _throwError2.default)('Backstop JS tests passed for ' + site.label + '!');
        }).catch(function () {

            console.log('Report saved to "' + rootDir + '/backstop_data/' + site.name + '/html_report/index.html"');
            // opn(`${rootDir}/backstop_data/${site.name}/html_report/index.html`)
            (0, _throwError2.default)('Backstop JS tests failed for ' + site.label + '!');
        });
    }).catch(function () {
        (0, _throwError2.default)('Backstop JS reference failed for ' + site.label + '! Please check the BackstopReferenceBaseUrl');
    });
};

var _throwError = require('./throwError');

var _throwError2 = _interopRequireDefault(_throwError);

var _backstopConfig = require('./backstopConfig');

var _backstopConfig2 = _interopRequireDefault(_backstopConfig);

var _sitesToUpdate = require('./sitesToUpdate');

var _sitesToUpdate2 = _interopRequireDefault(_sitesToUpdate);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _backstopjs = require('backstopjs');

var _backstopjs2 = _interopRequireDefault(_backstopjs);

var _opn = require('opn');

var _opn2 = _interopRequireDefault(_opn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=visualRegressionTestSite.js.map