const Bot = require('@blurple/extension')
const rp = require('request-promise-native')

const complimentsApi = 'https://spreadsheets.google.com/feeds/list/1eEa2ra2yHBXVZ_ctH4J15tFSGEu-VTSunsrvaCAV598/od6/public/values?alt=json'

class Example extends Bot {

    register (bot) {
        bot.command('!compliment').then(this.giveCompliments)
    }

    async giveCompliments (message) {
        let data = await rp({ uri: complimentsApi, json: true })

        let random = Math.floor(Math.random() * data.feed.entry.length)
        let compliment = data.feed.entry[random]['gsx$compliments']['$t']
        
        message.channel.send(`${message.author}: ${compliment}`)
    }

}

module.exports = Example
