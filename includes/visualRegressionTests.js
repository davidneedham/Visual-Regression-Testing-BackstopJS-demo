// Local dependencies
import throwError from './throwError';
import sitesToUpdate from './sitesToUpdate';
import visualRegressionTestSite from './visualRegressionTestSite';

// External dependencies
import readline from 'readline';
import minimist from 'minimist'

export default function () {
    const args = minimist(process.argv.slice(2), {});
    const sitesToUpdateKeys = Object.keys(sitesToUpdate)
    if (sitesToUpdateKeys.length === 1) {
        visualRegressionTestSite(sitesToUpdateKeys[0])
    } else if (Object.prototype.hasOwnProperty.call(args, 'site')) {
        visualRegressionTestSite(args.site)
    } else {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        console.log("\nAvailable sites:")

        for (const site in sitesToUpdate) {
            console.log(site)
        }

        rl.question('What site do you want to test? ', (userSite) => {
            visualRegressionTestSite(userSite)
            rl.close();
        });

    }

}