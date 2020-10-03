#!/usr/bin/env node 

const inquirer = require('inquirer');

require('yargs')
  .scriptName("pirate-parser")
  .usage('$0 <cmd> [args]')
  .command('get [name]', 'get covid data', (yargs) => {
    yargs.positional('name', {
      type: 'string',
      default: 'India',
      describe: 'The country you want Covid data from'
    })
  }, function (argv) {
   // console.log("We are here")
    const AxiosRequests = require('./AxiosRequests')
    const printResult = new AxiosRequests()
    printResult.getDataByCountry(argv.name)
  })
  .usage('$0 <cmd>')
  .command('getc [name]', 'get covid data', (yargs) => {
   /* yargs.positional('name', {
      type: 'string',
      describe: 'The continent you want Covid data from'
    })*/
  }, function (argv) {
   
    inquirer
  .prompt([
    {
      type: 'list',
      name: 'continent',
      message: 'Select a continent : ',
      choices: ['Asia', 'North America', 'South America', 'Europe', 'Africa'],
    },
  ])
  .then(answers => {

    //console.info('Answer:', answers.continent);
    const AxiosRequests = require('./AxiosRequests')
    const printResult = new AxiosRequests()
    printResult.getDataByContinent(answers.continent)

  });
    
  })
  .help()
  .argv