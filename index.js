

const inquirer = require('inquirer');
import chalk from 'chalk';

console.log( '---------------------------------------------------------\n');
 console.log('\x1b[36m%s\x1b[0m', 'Hi, welcome to Pro Readme Gen v1.0.0 by Ismael Leal   |\n');
 console.log('\x1b[36m%s\x1b[0m', 'GitHub Project: https://github.com/J28819/09ReadmeGen.git\n');
 console.log('\x1b[36m%s\x1b[0m',' ---Follow the instructions and questions to create a really cool README.md file ---\n');
 console.log('---------------------------------------------------------\n');
 const questions = [
    {
        type: 'input',
        message: '\033[0;32m\ Title -- Please enter the Title for your App.',
        name: 'Title',
        validate(value) {
            const pass = value.length;
            if (pass) {
              return true;
            }
            return '\033[0;31m\Title cannot be empty, please add the Title for your App to display it in the README.md File';
          },
    },
   {
     type: 'input',
     name: 'Description',
     message: "\033[0;32m\ Description --  Add a Description, a Good Description will have more than 100 words",
     validate(value) {
       const pass = value.length;
       if (pass > 10) {
         return true;
       }
       return "\033[0;31m\ "+`Add a better description about your App. Actual Characters detected:  ${pass} < 100`;
     },
   },
   {
     type: 'input',
     name: 'TableofContents',
     message: "\033[0;31m\Table of contents --  Add a list of contents please separate each one by comma.",
     validate(value) {
       const pass = value;
       var list = (pass.split(','))
       if (list.length >= 5) {
         return true;
       }
       return "\033[0;31m\ "+`Add another line Actual Number of Line Detected: ${list.length}`;
     },
   },
   {
    type: 'input',
    name: 'Installation',
    message: "\033[0;31m\Installation --  Add a procedure to install your application please separate each one by comma. minimum 5 lines.",
    validate(value) {
      const pass = value;
      var list = (pass.split(','))
      if (list.length >= 5) {
        return true;
      }
      return "\033[0;31m\ "+`Add another line Actual Number of Line Detected: ${list.length}`;
    },
  },
   {
    type: 'input',
    name: 'Screenshots',
    message: "\033[0;31m\Screenshoots --  Add the screenshoots paths for your application please separate each one by comma.\n minimum 3 screenshoots.  Using the relative filepath, add it to your README using the following syntax: [./img/example.png]",
    validate(value) {
      const pass = value;
      var list = (pass.split(','))
      if (list.length >= 3) {
        return true;
      }
      return "\033[0;31m\ "+`Add another Screenshot, actual screenshots detected: ${list.length}`;
    },
  },
   {
    type: 'input',
    name: 'Credits',
    message: "Credits Add a list of your collaborators, if any with links to their GitHub Profiles",
  },
  {
    type: 'list',
    name: 'License',
    message: '',
    choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License",
  'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0',  'Creative Commons Zero v1.0 Universal',
  'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1'  ],
   answerlines: 1,
   
  },
  {
   type: 'input',
   name: 'Features',
   message: "If your project has a lot of features, list them here. Add minimum 3 of them\n",
   validate(value) {
     const pass = value;
     var list = (pass.split(','))
     if (list.length >= 3) {
       return true;
     }
     return "\033[0;31m\ "+`is really important to make your README file looks professional as possible\n please add minimum 3 Features  for your app`;
   },
 },
 {
  type: 'input',
  name: 'Contribute',
  message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you`d prefer.\n",
  validate(value) {
    const pass = value;
    var list = (pass.split(','))
    if (list.length >= 3) {
      return true;
    }
    return "\033[0;31m\ "+`Please add more than 1 guide lines from your app`;
  },
},
,
{
  type: 'input',
  name: 'Test',
  message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here. \n',
  choices: [],
}
 ];
 
 inquirer.prompt(questions).then((answers) => {

    let Title = `${answers.Title}`;
    let Description = `${answers.Description}`;
    let TableofContents = `${answers.TableofContents}`;
    let Installation = `${answers.Installation}`;
    let ScreenShots = `${answers.ScreenShots}`;
    let Credits = `${answers.Credits}`;
    let License = `${answers.License}`;
    let Features = `${answers.Features}`;
    let Contribute = `${answers.Contribute}`;
    let Tests = `${answers.Tests}`;
    
   console.log('\nOrder receipt:');
   console.log(JSON.stringify(answers, null, '  '));
 });