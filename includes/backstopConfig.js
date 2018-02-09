export default function backstopConfig(BackstopReferenceBaseUrl, BackstopTestUrl, pathsToTest, siteName) {

    const backstopDataDir = `backstop_data/${siteName}`

    const config = {
        'id': siteName,
        asyncCaptureLimit: 2,
        'viewports': [{
                'name': 'phone',
                'width': 320,
                'height': 480
            },
            {
                'name': 'tablet_v',
                'width': 568,
                'height': 1024
            },
            {
                'name': 'tablet_h',
                'width': 1024,
                'height': 768
            },
            {
                'name': 'desktop',
                'width': 1920,
                'height': 1080
            }
        ],
        'scenarios': [{
            'label': 'Homepage',
            'url': BackstopTestUrl,
            'referenceUrl': BackstopReferenceBaseUrl,
            'hideSelectors': [],
            'selectors': ['document'],
            'readyEvent': null,
            'delay': 1500,
            'misMatchThreshold': 0.1
        }],
        'paths': {
            'ci_report': `${backstopDataDir}/ci_report`,
            'html_report': `${backstopDataDir}/html_report`,
            'bitmaps_reference': `${backstopDataDir}/bitmaps_reference`,
            'bitmaps_test': `${backstopDataDir}/bitmaps_test`,
            'compare_data': `${backstopDataDir}/bitmaps_test/compare.json`,
            'casper_scripts': `${backstopDataDir}/casper_scripts`,
            'engine_scripts': `${backstopDataDir}/engine_scripts`
        },
        'engine': 'chrome',
        'report': ['browser', 'CI'],
        'casperFlags': [],
        'debug': false,
        'port': 3001
    }


    const scenarios = pathsToTest.map(function (path) {

        return {
            'label': path,
            'url': BackstopTestUrl + path,
            'referenceUrl': BackstopReferenceBaseUrl + path,
            'hideSelectors': [],
            'selectors': ['document'],
            'readyEvent': null,
            'delay': 1500,
            'misMatchThreshold': 0.1
        }

    });

    config.scenarios = config.scenarios.concat(scenarios);

    return config;

}