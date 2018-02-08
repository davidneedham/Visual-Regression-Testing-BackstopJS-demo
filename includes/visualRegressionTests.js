// Local dependencies
import throwError from './throwError';

// Contrib dependencies
import backstop from 'backstopjs';
import opn from 'opn';
import path from 'path';


export default function checkForUpdates() {

    let rootDir = path.dirname(require.main.filename)
    if( rootDir.endsWith('dist') ){
        rootDir = rootDir.substring( 0, rootDir.indexOf( '/dist' ) )
    }

    backstop('reference', {config:'includes/backstop.json'}).then(() => {
        console.log('Backstop JS reference complete! Starting tests.')

        backstop('test', {config:'includes/backstop.json'}).then(() => {
            console.log('Backstop JS tests passed!')
        }).catch(() => {
            console.log(`Opening: "${rootDir}/backstop_data/html_report/index.html"`)
            opn(`${rootDir}/backstop_data/html_report/index.html`)
            throwError('Backstop JS tests failed!')
        });
    }).catch(() => {
        throwError('Backstop JS reference failed!')
    });

}