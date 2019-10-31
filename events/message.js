'use strict';
module.exports = async(client, message) => {
  const db = require('../utils/db.js');
  const error = require('../utils/error.js');
  const prefix = client.prefix.map((x) => x.toString());
  let args = message.content.replace(prefix, '').replace(/[\W_]+/g, ' ').trim().split(/ +/g);
  const commandName = args.shift().toLowerCase().replace(/[\W_]+/g, '');
  try {
    // Ignores all bots, MUST BE AT THE TOP. Avoids infinite loops.
    if (message.author.bot) return;
    // must check for prefix, will mess up other commands if it doesn't.
    // TODO: Convert back to regex. Performs quicker than iteration over the array.
    else if (message.content.indexOf(prefix) !== 0){
      args = message.content.replace(/[\W_]+/g, ' ').trim().split(/ +/g);
      args.forEach(word => {
        if (client.specialCommands.has(word.toLowerCase())){
          client.specialCommands.get(word.toLowerCase()).execute(client, message, args);
          db.updateCommand(word);
          return;
        }
        // TODO: Add singing back in eventually.
      });
    }
    // Ignores messages that don't start with prefix.
    // Also checks against strikethroughs.
    else if (message.content.indexOf(prefix) !== 0 || message.content.lastIndexOf(prefix) > 0) return;
    else if (client.commands.has(commandName)){
      let args = message.content.replace(prefix, '').trim().split(/ +/g);
      args.shift();
      client.commands.get(commandName).execute(client, message, args);
      db.updateCommand(commandName.replace(/[\W_]+/g, ' '));
    }
    else{
      message.channel.send('Sorry, I don\'t recognize that command. If you need help, use the `~help` command.');
    }
  } catch (err){
    error(client, message, err);
  }
};
