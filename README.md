# DemoQA Challenge

Installing and setting up, to execute the web tests using Playwright with Javascript.

## Open the terminal and following the steps below:

* Pre requirement
    Install NodeJS: https://nodejs.org/en/download

* Install Playwright:

        $ npm init playwright@latest

* Clone the project

    $ git clone https://github.com/vtrmartinez/demoqa


# Run the tests

* Open the project's folder:

	 	$ cd ~/<project_folder>


* To run all the scenarios, use the command:

		$ npx playwright test 

 # Run the tests - CI Pipeline

- The CI pipeline on GitLab will be executed after every commit or, you can run it manually through the GitLab interface by clicking on Build > Pipelines > Run Pipeline.

<br>   
		
## Generate Report

* To generate:

		$ npx playwright show-report
		
  or

* Take a look: 
        /demoqa/playwright-report/index.html
    
## Heads Up!
On the playwright.config.js file, it's possible to set up which engine you prefer to run the scenarios. 
E.g by default, the engine selected will be google chrome, mozilla firefox and safari. But you're able to choose only one or still run without headless.