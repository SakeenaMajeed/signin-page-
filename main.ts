import inquirer from 'inquirer';
import chalk from "chalk"
console.log(chalk.magentaBright.bold `\n \t XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxxxxx`);
console.log(chalk.hex("98FB98").bold `\n \t             ================= *WELCOME* ==================`);
console.log(chalk.blueBright.bold `\n  \t xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);
console.log(chalk.hex("DAA520").bold `\n \t   -------------------- TYPESCRIPT LOGIN PAGE  --------------------`);

console.log(chalk.bold.yellow("|")+chalk.bold.cyan(" Signin ")
+chalk.bold.magenta(" Webpage ") + chalk.bold.yellow("|"));

// Function overloading declarations
function multiData(em: string, ps: number): string;
function multiData(em: string, ps: string): string;
function multiData(em: number, ps: number): number;
function multiData(em: number, ps: string): number;
function multiData(em: any, ps: any): any {
    if (typeof em === 'string' && typeof ps === 'number') {
        return `${em} has number ${ps}`;
    } else if (typeof em === 'string' && typeof ps === 'string') {
        return `${em} and ${ps} are strings`;
    } else if (typeof em === 'number' && typeof ps === 'number') {
        return em + ps;
    } else if (typeof em === 'number' && typeof ps === 'string') {
        return em + parseInt(ps);
    }
}

// Email validation function
function validateEmail(email: string): boolean | string {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        return true;
    } else {
        return 'Please enter a valid email address.';
    }
}

// CLI with Inquirer.ts
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter your name:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email:',
        validate: validateEmail
    },
    {
        type: 'password',
        name: 'password',
        message: 'Enter your password:'
    }
];

inquirer.prompt(questions).then((answers) => {
  
    console.log(`Hello, ${answers.name}`);
    console.log(`Your email is: ${answers.email}`);
    console.log(`Your password is: ${answers.password}`);

    // Using the multiData function
    const result = multiData(answers.name, answers.email.length);
    console.log(`Result of function overloading: ${result}`);

    // Email validation function
    const emailValidation = validateEmail(answers.email);
    if (emailValidation === true) {
        console.log(chalk.green('Email is valid'));
        console.log(chalk.green('\nLogin Successful ~'));
        console.log(chalk.blue(`Welcome User .! ${answers.name}`));
        console.log(chalk.blue(`User Input Info : ${answers.name} ${answers.email} ${answers.password}`));
    } else {
        console.log(chalk.red(emailValidation));
    }

    console.log(chalk.magentaBright.bold(`\n \t ================= THANK ♥ YOU ==================`));
});

        






