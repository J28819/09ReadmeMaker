

const inquirer = require('inquirer')
const chalk = require('chalk')

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
    name: '',
    message: "",
    validate(value) {
      const pass = value;
      var list = (pass.split(','))
      if (list.length >= 3) {
        return true;
      }
      return "\033[0;31m\ "+``;
    },
  },
  {
   type: 'input',
   name: '',
   message: "",
   validate(value) {
     const pass = value;
     var list = (pass.split(','))
     if (list.length >= 3) {
       return true;
     }
     return "\033[0;31m\ "+``;
   },
 },
 {
  type: 'input',
  name: '',
  message: "",
  validate(value) {
    const pass = value;
    var list = (pass.split(','))
    if (list.length >= 3) {
      return true;
    }
    return "\033[0;31m\ "+``;
  },
}
 ];
 
 inquirer.prompt(questions).then((answers) => {
   console.log('\nOrder receipt:');
   console.log(JSON.stringify(answers, null, '  '));
 });