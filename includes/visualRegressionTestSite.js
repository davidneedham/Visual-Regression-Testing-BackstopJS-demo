// Local dependencies
import throwError from './throwError';
import backstopConfig from './backstopConfig';
import sitesToUpdate from './sitesToUpdate';

// External dependencies
import path from 'path';
import backstop from 'backstopjs';
import opn from 'opn';

export default  function (siteToTest) {
    const siteExists = Object.prototype.hasOwnProperty.call(sitesToUpdate, siteToTest)
    let rootDir = path.dirname(require.main.filename)
    if (rootDir.endsWith('dist')) {
        rootDir = rootDir.substring(0, rootDir.indexOf('/dist'))
    }

    if (!siteExists) {
        throwError(`${siteToTest} is not a valid site. Check the name you entered and the "includes/sitesToUpdate.js" config file`)
    }

    sitesToUpdate[siteToTest].name = siteToTest
    const site = sitesToUpdate[siteToTest]

    console.log(`Testing: ${site.label}`)

    console.log(`Generating configuration for ${site.label}`)
    const currentConfig = backstopConfig(site.BackstopReferenceBaseUrl, site.BackstopTestUrl, site.pathsToTest, site.name)

    console.log(`Running Backstop tests for ${site.label}`)
    backstop('reference', {
        config: currentConfig
    }).then(() => {
        console.log(`Backstop JS reference complete for ${site.label}! Starting tests.`)
        backstop('test', {
            config: currentConfig
        }).then(() => {

            console.log(`Opening: "${rootDir}/backstop_data/${site.name}/html_report/index.html"`)
            opn(`${rootDir}/backstop_data/${site.name}/html_report/index.html`)
            throwError(`Backstop JS tests passed for ${site.label}!`)

        }).catch(() => {

            console.log(`Opening: "${rootDir}/backstop_data/${site.name}/html_report/index.html"`)
            opn(`${rootDir}/backstop_data/${site.name}/html_report/index.html`)
            throwError(`Backstop JS tests failed for ${site.label}!`)

        });
    }).catch(() => {
        throwError(`Backstop JS reference failed for ${site.label}! Please check the BackstopReferenceBaseUrl`)
    });
}