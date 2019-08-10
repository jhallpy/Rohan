const { objects } = require('../assets/arrays/objects.json');
const misc = require('../utils/misc.js');

exports.run = (client, message, args) => {
    if(args.length < 1)
        message.channel.send('Who? Where?');
    else if(misc.checkUsers(message))
        message.channel.send('Please only tag one person.');
    else if(misc.checkRohan(client,message))
        message.channel.send('Get out of my house!!')
    else
        message.channel.send(args.join(' ') +"'s favourite thing is a very special `"+ misc.randomInArray(objects) + "`.");
}