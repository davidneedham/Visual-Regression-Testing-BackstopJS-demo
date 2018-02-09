'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var sitesToUpdate = {
    'wp-new-relic-demo': {
        label: 'WP New Relic Demo',
        BackstopReferenceBaseUrl: 'https://update-wp-wp-new-relic-demo.pantheonsite.io',
        BackstopTestUrl: 'https://live-wp-new-relic-demo.pantheonsite.io',
        pathsToTest: ["/top-25"]
    },
    'wp-quicksilver-demo': {
        label: 'WP Quicksilver Demo',
        BackstopReferenceBaseUrl: 'https://update-wp-wp-quicksilver-demo.pantheonsite.io',
        BackstopTestUrl: 'https://live-wp-quicksilver-demo.pantheonsite.io',
        pathsToTest: ["/resources"]
    }
};

exports.default = sitesToUpdate;
//# sourceMappingURL=sitesToUpdate.js.map