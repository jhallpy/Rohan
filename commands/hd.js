const { heaven } = require('../assets/arrays/heaven.json');
const misc = require('../utils/misc.js');

exports.run = (client, message, args) => {
    if(misc.checkEmpty(message))
        message.channel.send('Who? Where?');
    else if(misc.checkUsers(message))
        message.channel.send('Please only tag one person.');
    else if(misc.checkRohan(client,message))
        message.channel.send('Get out of my house!!')
    else if(misc.checkForOnlyUser(args,message)){
        //needs to check the 1st index item against a user ID. Otherwise '~hd lol @aver' become 'lol "HD TEXT"'. etc.
        //There is probably an easier way to do this. This works for now.
        message.channel.send('<@' + args[0].replace(/[^0-9]/g,'') + '>' + misc.randomInArray(heaven));}
    else
        message.channel.send('Please make sure to mention the user first.');
}