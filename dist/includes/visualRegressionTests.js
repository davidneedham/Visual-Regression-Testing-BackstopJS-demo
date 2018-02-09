'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var args = (0, _minimist2.default)(process.argv.slice(2), {});
    var sitesToUpdateKeys = Object.keys(_sitesToUpdate2.default);
    if (sitesToUpdateKeys.length === 1) {
        (0, _visualRegressionTestSite2.default)(sitesToUpdateKeys[0]);
    } else if (Object.prototype.hasOwnProperty.call(args, 'site')) {
        (0, _visualRegressionTestSite2.default)(args.site);
    } else {

        var rl = _readline2.default.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        console.log("\nAvailable sites:");

        for (var site in _sitesToUpdate2.default) {
            console.log(site);
        }

        rl.question('What site do you want to test? ', function (userSite) {
            (0, _visualRegressionTestSite2.default)(userSite);
            rl.close();
        });
    }
};

var _throwError = require('./throwError');

var _throwError2 = _interopRequireDefault(_throwError);

var _sitesToUpdate = require('./sitesToUpdate');

var _sitesToUpdate2 = _interopRequireDefault(_sitesToUpdate);

var _visualRegressionTestSite = require('./visualRegressionTestSite');

var _visualRegressionTestSite2 = _interopRequireDefault(_visualRegressionTestSite);

var _readline = require('readline');

var _readline2 = _interopRequireDefault(_readline);

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=visualRegressionTests.js.map