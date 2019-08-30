const { heaven } = require('../assets/arrays/heaven.json');
const misc = require('../utils/misc.js');

exports.run = (client, message, args) => {
  if (misc.checkUsers(message))
    message.channel.send('Please only tag one person.');
  else if (misc.checkRohan(client, message))
    message.channel.send('Get out of my house!!');
  else if (message.mentions.members.first())
    message.channel.send(message.mentions.members.first()
      + misc.randomInArray(heaven));
  else if (args.length > 0)
    message.channel.send(args[0] + misc.randomInArray(heaven));
  else
    message.channel.send('Who? Where?');
};
