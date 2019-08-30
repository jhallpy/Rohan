module.exports = async(client, message, err) => {
    const moment = require('moment');
    const { owner } = require('../config.json');
    const { createLogger, transports ,format} = require('winston');
    let newDate = moment();
    if(message.guild === null){
        const simpleObject = {
            ChannelName: message.channel.name,
            Username: message.author.username,
            UserID: message.author.id,
            Time: newDate,
            Message: message.content,
            ErrorMessage: err.toString()
        }
        // with JSON format
        const logger = createLogger({
            level: 'info',
            format: format.json(),
            transports: [
                // Logging data is shown in json format
                new transports.File({ filename: 'error.log', level: 'error' })
                ]
        });
        logger.error(simpleObject)
    }
    else{
        const simpleObject = {
            GuildName: message.guild.name,
            GuildID: message.channel.guild.id,
            ChannelName: message.channel.name,
            Username: message.author.username,
            UserID: message.author.id,
            Time: newDate,
            Message: message.content,
            ErrorMessage: err.toString()
        }
        // with JSON format
        const logger = createLogger({
            level: 'info',
            format: format.json(),
            transports: [
                // Logging data is shown in json format
                new transports.File({ filename: 'error.log', level: 'error' })
                ]
        });
        logger.error(simpleObject)
    }
    client.users.get(owner.toString()).send('Check Error Log');
    console.log(err);
};