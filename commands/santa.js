'use strict';
const db = require('../utils/db.js');
const error = require('../utils/error.js');
module.exports = {
  // TODO: Add all guilds to the guild table to cross reference guild names.
  name: 'santa',
  usage: '~santa',
  description: 'Use the command `~santa info` or `~santa` to learn more about how to use this command.',
  execute(client, message, args){
    let commandName = args[0];
    try {
      if (client.santaCommands.has(commandName)){
        client.santaCommands.get(commandName).execute(client, message, args);
        db.updateCommand(commandName.replace(/[\W_]+/g, ' '));
      } else client.santaCommands.get('info').execute(client, message, args);
    } catch (err){
      error(client, message, err);
    }
  },
};
