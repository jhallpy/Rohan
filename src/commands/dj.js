const { jobs } = require('../assets/arrays/jobs.json');
const misc = require('../utils/misc.js');

exports.run = (client, message, args) => {
    if(misc.checkEmpty(message))
        message.channel.send('Who? Where?');
    else if(misc.checkUsers(message))
        message.channel.send('Please only tag one person.');
    else if(misc.checkRohan(client,message))
        message.channel.send('Get out of my house!!')
    else
        message.channel.send(args + " wishes they were the world's greatest  `"+ misc.randomInArray(jobs) +"`.");
}