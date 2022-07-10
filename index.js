

// include inquirer module
const inquirer = require('inquirer');
 // include node fs module
 var fs = require('fs');
 

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
     message: "\033[0;32m\Table of contents --  Adding table of contents \033[0;31m\press enter",
   },
   {
    type: 'input',
    name: 'Installation',
    message: "\033[0;32m\Installation --  Add a procedure to install your application please separate each one by comma. minimum 5 lines.",
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
    name: 'Usage',
    message: "\033[0;32m\Usage --  Add a list about how to usage this application, please separate each one by comma. minimum 3 rows.",
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
    message: '\033[0;32m\Credits --  Credits Add a list of your collaborators, if any with links to their GitHub Profiles',
  },
  {
    type: 'list',
    name: 'License',
    message: '\033[0;32m\Chose one license type from the list',
    choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License",
  'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0',  'Creative Commons Zero v1.0 Universal',
  'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1'  ],
  },
 {
  type: 'input',
  name: 'Contribute',
  message: '\033[0;32m\Contribute --  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',

},
{
  type: 'input',
  name: 'Tests',
  message: '\033[0;32m\Tests --  Go the extra mile and write tests for your application. Then provide examples on how to run them here. ',
  choices: [],
},
{
  type: 'input',
  name: 'Questions',
  message: '\033[0;32m\Questions --  Please any questions please add your GitHub name here: ',
  choices: [],
},
{
  type: 'input',
  name: 'email',
  message: '\033[0;32m\Email--  Please add your email to end users can contact you ',
  choices: [],
}
 ];
 
 inquirer.prompt(questions).then((answers) => {
    let License = `# License \n [${answers.License}](https://github.com/nvm-sh/nvm#important-notes)`;
    let Title = `# ${answers.Title}\n`+ `[![License](https://img.shields.io/badge/${License}%202.0-blue.svg)](https://opensource.org/licenses/${License}`;
    let Description = `## Description \n ${answers.Description}`;

    let TableofContentsformated = `- [Description](#Description)\n  - [TableofContents](#TableofContents)\n - [Installation](#Installation)\n - [Usage](#Usage)\n - [License](#Licens)\n - [Contributing](#Contributing)\n - [Tests](#Test)\n - [Questions](#Questions)`
    let TableofContents = ` ## Table of Contents\n ${TableofContentsformated}`;
    let InstallationIns = (answers.Installation).split(',')
    var string = ""
    InstallationIns.forEach(element => {
      console.log(element)
      string += `- ${element}\n`
    });
    let Installation = "## Installation\n ```sh\n"+string+"\n ``` ";

    let Usage = `## Usage ${answers.Usage}`;
    let Credits = `## Credits\n ${answers.Credits}`;
    
    let badges = `[![License](https://img.shields.io/badge/${License}%202.0-blue.svg)](https://opensource.org/licenses/${License}`
   
    let Contribute = `${answers.Contribute}`;
    let Tests = `${answers.Tests}`;
    let Questions = `## Questions\n Follow this links and ask your questions to the Author: [${answers.Questions}](https://gist.github.com/${answers.Questions})\n Or send an email to: ${answers.email}`;
    
    var readmetext = `${Title}\n${Description}\n${TableofContents}\n${Installation}\n ${Usage}\n ${Credits}\n${License}\n## Badges\n![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)\n ${badges}\n ## Contribute ${Contribute}\n## Tests\n ${Tests} \n${Questions}`
    console.log(readmetext)

  
    // writeFile function with filename, content and callback function
    fs.writeFile('README.md', readmetext, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });

 });



