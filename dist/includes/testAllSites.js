'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var siteCount = Object.keys(_sitesToUpdate2.default).length;
    var i = 1;
    for (var site in _sitesToUpdate2.default) {
        console.log('Testing site ' + i + ' of ' + siteCount + '...');
        // https://nodejs.org/docs/latest/api/child_process.html#child_process_child_process_execsync_command_options
        execSync('node dist/index.js --site=' + site, { stdio: [0, 1, 2] });
        i++;
    }

    console.log('Done testing all ' + siteCount + ' sites!');
};

var _sitesToUpdate = require('./sitesToUpdate');

var _sitesToUpdate2 = _interopRequireDefault(_sitesToUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// External dependencies
var _require = require('child_process'),
    execSync = _require.execSync; // Local dependencies
//# sourceMappingURL=testAllSites.js.map