'use strict';
const { jobs } = require('../assets/arrays/jobs.json');
const { heaven } = require('../assets/arrays/heaven.json');
const misc = require('../utils/misc.js');

module.exports = {
  name: 'dj',
  usage: '~dj <name> or <@user>',
  description: 'Returns a user\'s ideal occupation. (Randomly generated)',
  execute(client, message, args){
    if (misc.checkUsers(message))
      message.channel.send('Please only tag one person.');
    else if (misc.checkRohan(client, message))
      message.channel.send('Get out of my house!!');
    else if (message.mentions.members.first())
      message.channel.send(message.mentions.members.first()
        + misc.randomInArray(heaven));
    else if (args.length > 0)
      message.channel.send(args.join(' ') + " wishes they were the world's greatest  `"
        + misc.randomInArray(jobs) + '`.');
    else
      message.channel.send('Who? Where?');
  },
};
