const sitesToUpdate = {
    'wp-new-relic-demo': {
        label: 'WP New Relic Demo',
        BackstopReferenceBaseUrl: 'https://update-wp-wp-new-relic-demo.pantheonsite.io',
        BackstopTestUrl: 'https://live-wp-new-relic-demo.pantheonsite.io',
        pathsToTest: [
            "/top-25",
            /*
            "/hello-world",
            "/product-category/accessories",
            "/product-category/action-reflex-games",
            "/product-category/action-figures",
            "/product/medium-cleaner-kit-plastic",
            "/product/hair-red-bikini",
            "/product/black-egg",
            */
        ]
    },
    'wp-quicksilver-demo': {
        label: 'WP Quicksilver Demo',
        BackstopReferenceBaseUrl: 'https://update-wp-wp-quicksilver-demo.pantheonsite.io',
        BackstopTestUrl: 'https://live-wp-quicksilver-demo.pantheonsite.io',
        pathsToTest: [
            "/resources",
            /*
            "/elastic-architecture",
            "/page-caching",
            "/object-caching",
            "/query-performance",
            "/searching-for-scale",
            "/a-real-world-scalable-architecture",
            "/development-and-workflow",
            */
        ]
    }
};

export default sitesToUpdate;