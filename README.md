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
For the `master` branch  either clone this repository using Git or download the [`.zip` file](https://github.com/ataylorme/loopconf-2018-automated-update-workshop/archive/master.zip).

For the `multiple-sites` branch run `git checkout multiple-sites` in your local clone directory or download the [`.zip` file](https://github.com/ataylorme/loopconf-2018-automated-update-workshop/archive/multiple-sites.zip).

### Two Parts
This example has two parts. You should start with the first part found in the [master](https://github.com/ataylorme/loopconf-2018-automated-update-workshop/tree/master) branch.

After completing the steps on the master branch you can do the second part found in the [multiple-sites](https://github.com/ataylorme/loopconf-2018-automated-update-workshop/tree/multiple-sites) branch.

## Instructions
After setting up the repository locally (see above) you will need to:
1. Run the command `npm install` to download dependencies
1. Run the command `npm run start`
1. Check out the results from the sample test
    - Should open in your browser automatically
1. Edit `includes/backstop.json`
    - Set `referenceUrl` in `scenarios` to your production site URL
    - Set `url` in `scenarios` to your non-production environment (local, staging, etc.) URL
    - Start your local environment if needed
1. Run the command `npm run start`
1. Check out the results
1. Edit `includes/backstop.json`
    - Try changing `viewports` or adding more `scenarios`
1. Run the command `npm run start`
1. Check out the results
1. Update WordPress on your non-production environment (local, staging, etc.)
    - Use the WordPress admin or wp-cli
1. Run the command `npm run start`
1. Check out the results

**Troubleshooting**
If you are having issues with the script hanging or BackstopJS taking a long time there may be headless Chrome instances that didn't close properly. 

Try `pkill -f "(chrome)?(--headless)"` on Mac/Linux or `Get-CimInstance Win32_Process -Filter "Name = 'chrome.exe' AND CommandLine LIKE '%--headless%'" | %{Stop-Process $_.ProcessId}` in Windows PowerShell.

## Branches

### [master](https://github.com/ataylorme/loopconf-2018-automated-update-workshop/tree/master)
The `master` branch is the starting point for the workshop where we will be working with [BackstopJS](https://github.com/garris/BackstopJS).

### [multiple-sites](https://github.com/ataylorme/loopconf-2018-automated-update-workshop/tree/multiple-sites)
The `multiple-sites` branch is where we will be working on scaling, testing more than one site.
