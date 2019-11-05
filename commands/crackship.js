'use strict';
const { jojox } = require('../assets/arrays/jojox.json');
const misc = require('../utils/misc.js');
const discord = require('discord.js');
module.exports = {
  name: 'crackship',
  usage: '~crackship',
  description: '`~crackship` - Generates a random JoJo character(s), including minor characters.',
  execute(client, message, args){
    let random = misc.randomInArray(jojox);
    let random2 = misc.randomInArray(jojox);
    let jojoxEmbed1 = new discord.RichEmbed()
      .setColor(0x3a8d31)
      .setTitle(`${random.name}`)
      .setImage(`${random.link}`);
    let jojoxEmbed2 = new discord.RichEmbed()
      .setColor(0x3a8d31)
      .setTitle(`${random2.name}`)
      .setImage(`${random2.link}`);
    message.channel.send(jojoxEmbed1);
    message.channel.send(jojoxEmbed2);
  },
};
