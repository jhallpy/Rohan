'use strict';
const { jojox } = require('../assets/arrays/jojox.json');
const misc = require('../utils/misc.js');
const discord = require('discord.js');
module.exports = {
  name: 'jojox',
  usage: '~jojox',
  description: '`~jojox`- Generates a random JoJo character(s), including minor characters.',
  execute(client, message, args){
    // message.channel.send(misc.randomInArray(jojox));
    let random = misc.randomInArray(jojox);
    let jojoxEmbed = new discord.RichEmbed()
      .setColor(0x3a8d31)
      // .setAuthor(client.user.username, client.user.avatarURL)
      .setTitle(`${random.name}`)
      // .setDescription(`${random.name}`)
      .setImage(`${random.link}`);
    message.channel.send(jojoxEmbed);
  },
};
