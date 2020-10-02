#!/usr/bin/env node 

const axios = require('axios')
const chalk = require('chalk')

class AxiosRequests{
    constructor(){}

    getDataByCountry(country){

        let endpoint = "https://corona.lmao.ninja/v2/countries/" + country + "?yesterday=true&strict=true&query"
        axios.get(endpoint).then(function(response){

            console.log(chalk.blue("\nCountry : ") + chalk.white.bold(response.data.country))
            console.log("-----------------------------------------------------")
            console.log(chalk.blue("Number of new cases today : ") + chalk.yellow(response.data.todayCases))
            console.log(chalk.blue("Number of deaths today : ") + chalk.yellow(response.data.todayDeaths))
            console.log(chalk.blue("Number of recoveries today : ") + chalk.yellow(response.data.todayRecovered))
            console.log("-----------------------------------------------------")
            console.log(chalk.blue("Total number of cases in ") + chalk.blue(response.data.country+ " : ") + chalk.red(response.data.cases))
            console.log(chalk.blue("Total number of deaths in ") + chalk.blue(response.data.country+ " : ") + chalk.red(response.data.deaths))
            console.log(chalk.blue("Total number of recoveries in ") + chalk.blue(response.data.country+ " : ") + chalk.red(response.data.recovered))
            console.log(chalk.blue("Active cases in ") + chalk.blue(response.data.country+ " : ") + chalk.cyan(response.data.active))
            console.log("")
            console.log(chalk.gray("Data fetched from Novelcovid API @ Postman. ") + chalk.red('covidy ') + chalk.white.bold('\u20AA ') + chalk.cyan.underline('saurabh0719'))
            

        }).catch(function(error){
            console.log("Country not found : Invalid input");
        })
    }

}

module.exports = AxiosRequests
