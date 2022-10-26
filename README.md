## Automation example tests for "telnyx.com" web-site.

### This tests showing the automation of user completing some forms and checking web pages elements.

##### **Tests running on:**

##### **Language:** JavaScript
##### **Framework:** WebdriverIO
##### **Reporter:** Allure

##### **For use this tests:**

1. Configure your workspace<br>
2. Clone this repository
3. To run tests:<br>
    3.1. Run the "**npm run wdio**" command for run test using standard mode.<br>
    3.2. Run the "**npm run chrome**" command for run test using Chrome browser and chrome.conf.file.<br>
    3.3. Run the "**npm run fire**" command for run test using FireFox browser and firefox.conf.file.<br>
    3.4. Run the "**npm run chrome:one:spec**" command for run only one spec file using Chrome browser.<br>
    3.5. Run the "**npm run chrome:all:specs**" command for run all spec files as test suite using Chrome browser.<br>
    3.6. Run the "**npm run multi:run**" command for run tests using FireFox nad Chrome browsers.<br>
4. For generate Allure report run the "**npm run create_report**" command.
5. For open report run the "**npm run open:rep**" command.

##### **If you want to run tests using docker:**

1. Run "**docker-compose -f docker-compose.yml up -d**" command to execute docker-compose file
2. Run "**npm run docker:tests**" command to run tests
3. Run "**docker-compose -f docker-compose.yml down**" command to stop all execution


