'use strict';
const { jojos } = require('../assets/arrays/jojos.json');
const misc = require('../utils/misc.js');
const discord = require('discord.js');
module.exports = {
  name: 'rarepair',
  usage: '~rarepair',
  description: '`~rarepair` - Generates a random JoJo character(s), with only major characters.',
  execute(client, message, args){
    let random = misc.randomInArray(jojos);
    let random2 = misc.randomInArray(jojos);
    let jojosEmbed1 = new discord.RichEmbed()
      .setColor(0x3a8d31)
      .setTitle(`${random.name}`)
      .setImage(`${random.link}`);
    let jojosEmbed2 = new discord.RichEmbed()
      .setColor(0x3a8d31)
      .setTitle(`${random2.name}`)
      .setImage(`${random2.link}`);
    message.channel.send(jojosEmbed1);
    message.channel.send(jojosEmbed2);
  },
};
