'use strict';
module.exports = {
  name: 'ping',
  usage: '~ping',
  description: 'Provides ping information for the bot.',
  execute(client, message, args){
    message.reply(`go away! \`${Date.now() - message.createdTimestamp} ms\``);
  },
};
