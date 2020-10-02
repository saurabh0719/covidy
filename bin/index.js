#!/usr/bin/env node 

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
  .help()
  .argv