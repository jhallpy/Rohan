'use strict';
const { jojos } = require('../assets/arrays/jojos.json');
const misc = require('../utils/misc.js');
const discord = require('discord.js');
module.exports = {
  name: 'jojo',
  usage: '~jojo',
  description: '`~jojo`- Generates a random JoJo character(s), with only major characters.',
  execute(client, message, args){
    let random = misc.randomInArray(jojos);
    let jojosEmbed = new discord.RichEmbed()
      .setColor(0x3a8d31)
      // .setAuthor(client.user.username, client.user.avatarURL)
      .setTitle(`${random.name}`)
      // .setDescription(`${random.name}`)
      .setImage(`${random.link}`);
    message.channel.send(jojosEmbed);
  },
};
