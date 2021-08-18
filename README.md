[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Team-Profile-Generator
A proffesional Team maker app.
![badmath](https://img.shields.io/github/issues/MehdiMahmud79/TeamProfileGenerator)
![badmath](https://img.shields.io/github/forks/MehdiMahmud79/TeamProfileGenerator)
![badmath](https://img.shields.io/github/stars/MehdiMahmud79/TeamProfileGenerator)

# Table of Contents 

* [Description](#description)
* [Mock-Up](#🚀)
* [Installation](#installation)
* [Testing](#🔎💻)
* [Generate the Team](#📚)
* [Questions](#❔)



## 📝
## Description 
  This app is Object-Oriented Programming to generate a Team profile and render it in to an Html file. The Html will include the team name, manager profile, engineer team as well as the Intern team.
  Also, thsi app is powered by a jest test debugger to check the team profile classes.

## 🚀
## Mock-Up

The following image shows the test procedure by jest:

![📹 Test results using jest.](./assets/test.gif)

[📸 An image shows the test result](./dist/test.jpg)

The following image shows a mock-up of the generated HTML’s appearance and functionality:

![Test results using jest.](./assets/screen.gif)

### Youtube videos to demonstrate the project
🔴📺

* [📹 YouTube video for Testing the App.](https://youtu.be/72IMdktjbZk)

* [📹 YouTube video for App. functionality](https://youtu.be/O4aNoakMn0o)

## 🛠️ 
##  Installation
```bash
npm init
npm i
```

### this will install the following dependencies 
```bash
 "dependencies": {
    "email-validator": "^2.0.4",
    "inquirer": "^8.1.2",
    "uuid": "^8.3.2",
    "uuid-validate": "0.0.3"
  }

```

## 🔎💻
## Testing 
  To test the app run the following command in the command line
  ```bash
  npm test
  ```
  Which eill test the following 
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js

## 📚
## Generate the Team

  To generate a team you may need to run the following command and answer the prompt question with an approperiate answer which will ne checked for the correct format.

```bash
npm start
```
Or

```bash
node index.js
```
## ❔
## questions
You will be asked for the:
```
  * Team name,
  * Team manager's name,Email and the office number,
  * Team members from a member list of Enginners and intents,
  * For the Enginner members you will be asked for their name, Email and Github username,
  * For the Intent members you will be asked for their name, Email and their school,
  * for each of the above Team members the UUIDV4 is used to generate an id for them,
  * This process will continue until you input all the team members and their information.

```




---
© 2021 Mehdi Mahmud
