# Workshop: Automating WordPress Updates Example Repo
This repository is an example for the LoopConf 3.0 Automating WordPress Updates workshop (2/21/2018).  

## Workshop Description
Your WordPress site really loves to be updated! Be it core, plugins, or themes there is a LOT of code that you need to update for every site. However, even with tools like wp-cli, updating your site is hard work.

You need to apply updates, test updates, and deploy updates. And do it for every single site for which you are responsible every single time an update comes out.

Enter "Automatic WordPress Updates" and making the robots do updates for you. This workshop will involve using a Continuous Integration and Visual Regression solution to automate WordPress updates both with confidence and at scale.

## Prerequisites
You will need:
* A local development environment with [Node JS/NPM](https://docs.npmjs.com/getting-started/installing-node) and [wp-cli](wp-cli.org)
    - (Optional) Install [BackstopJS](https://github.com/garris/BackstopJS) globally. This will let you play around with visual regression outside the workshop
* A live, web-accessible WordPress site
* A local WordPress copy or alternative (e.g. staging) environment of the site above
* To be able to write and execute scripts. This workshop uses JavaScript and bash
    - (Optional) you can use whatever language(s) you are comfortable with but will have to convert the scripts

### Getting The Code
Download the `master` branch of this repository - either using Git or downloading the [`.zip` file](https://github.com/ataylorme/loopconf-2018-automated-update-workshop/archive/master.zip). If using Git be sure to clone with the `--recursive` argument in order to download submodules.

## Instructions
After setting up the repository locally (see above) you will need to:
1. Run the command `npm install` to download dependencies
1. Run the command `npm run start`
    - Type a site name from the list
1. Check out the results from the sample test
    - Should open in your browser automatically
1. Run the command `npm run start -- --all`
    - note the extra `--`
1. Check out the results from multiple sites
    - Should open in your browser automatically
1. Edit `includes/sitesToUpdate.js`
    - This is where the list of sites to test is stored
    - Try changing to one (or more) of your sites
    - `BackstopReferenceBaseUrl` is your non-production environment (local, staging, etc.) URL
    - `BackstopTestUrl` is your production site URL
    - Adjust `pathsToTest`, which is the array of URIs to test for each site
    - Start your local environment if needed
1. Run the command `npm run start` to test a single site or `npm run start -- --all` to test all sites in `includes/sitesToUpdate.js`
1. Profit

**Troubleshooting**
If you are having issues with the script hanging or BackstopJS taking a long time there may be headless Chrome instances that didn't close properly. 

Try `pkill -f "(chrome)?(--headless)"` on Mac/Linux or `Get-CimInstance Win32_Process -Filter "Name = 'chrome.exe' AND CommandLine LIKE '%--headless%'" | %{Stop-Process $_.ProcessId}` in Windows PowerShell.

## Branches

### [master](https://github.com/ataylorme/loopconf-2018-automated-update-workshop/tree/master)
The `master` branch is the starting point for the workshop where we will be working with [BackstopJS](https://github.com/garris/BackstopJS).

### [multiple-sites](https://github.com/ataylorme/loopconf-2018-automated-update-workshop/tree/multiple-sites)
The `multiple-sites` branch is where we will be working on scaling, testing more than one site.