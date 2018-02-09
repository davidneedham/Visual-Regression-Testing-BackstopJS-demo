// Local dependencies
import sitesToUpdate from './sitesToUpdate'

// External dependencies
const {execSync} = require('child_process')

export default function () {
    const siteCount = Object.keys(sitesToUpdate).length
    let i = 1
    for (var site in sitesToUpdate) {
        console.log(`Testing site ${i} of ${siteCount}...`)
        // https://nodejs.org/docs/latest/api/child_process.html#child_process_child_process_execsync_command_options
        execSync(`node dist/index.js --site=${site}`, {stdio: [0, 1, 2]})
        i++
    }

    console.log(`Done testing all ${siteCount} sites!`)
    
}