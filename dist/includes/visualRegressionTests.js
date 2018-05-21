'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = checkForUpdates;

var _throwError = require('./throwError');

var _throwError2 = _interopRequireDefault(_throwError);

var _backstopjs = require('backstopjs');

var _backstopjs2 = _interopRequireDefault(_backstopjs);

var _opn = require('opn');

var _opn2 = _interopRequireDefault(_opn);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Local dependencies
function checkForUpdates() {

    var rootDir = _path2.default.dirname(require.main.filename);
    if (rootDir.endsWith('dist')) {
        rootDir = rootDir.substring(0, rootDir.indexOf('/dist'));
    }

    (0, _backstopjs2.default)('reference', { config: 'includes/backstop.json' }).then(function () {
        console.log('Backstop JS reference complete! Starting tests.');

        (0, _backstopjs2.default)('test', { config: 'includes/backstop.json' }).then(function () {
            console.log('Backstop JS tests passed!');
            console.log('View the full report at "' + rootDir + '/backstop_data/html_report/index.html"');
        }).catch(function () {
            console.log('Report saved to "' + rootDir + '/backstop_data/html_report/index.html"');
            // opn(`${rootDir}/backstop_data/html_report/index.html`)
            (0, _throwError2.default)('Backstop JS tests failed!');
        });
    }).catch(function () {
        (0, _throwError2.default)('Backstop JS reference failed!');
    });
}

// Contrib dependencies
//# sourceMappingURL=visualRegressionTests.js.map