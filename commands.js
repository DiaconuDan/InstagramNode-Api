const program = require('commander');
// const {
//     getUserDetails
// } = require('./app/services/authService');

program
    .version('1.0.0')
    .description('Instagram Api Management System')

program
    .command('getUserDetails <name>')
    .description('Find all the details of the selected user')
    .action(name =>
       console.log(name)); // getUserDetails()
       

program.parse(process.argv);

