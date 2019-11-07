'use strict';
module.exports = async(client, message) => {
  const db = require('../utils/db.js');
  const error = require('../utils/error.js');
  const prefix = client.prefix.map((x) => x.toString());
  let args = message.content.replace(prefix, '').replace(/[\W_]+/g, ' ').trim().split(/ +/g);
  const commandName = args.shift().toLowerCase().replace(/[\W_]+/g, '');
  const spRegex = new RegExp(client.specialRegex.map((x)=> x).toString().slice(1), 'gi');
  console.log(spRegex);
  try {
    // Takes the stored object, converts it to a string, then converts that to a regex, then slices off the
    // extra at the beginning of the regex and sets it to global. Objects store a regex as a string so it
    // must be created here.
    //   /\bvalid\b/gi
    // Ignores all bots, MUST BE AT THE TOP. Avoids infinite loops.
    if (message.author.bot) return;

    // must check for prefix, will mess up other commands if it doesn't.
    else if (message.content.indexOf(prefix) !== 0){
      let msg = message.content.replace(/[.*+?^${}()|[\]\\=\-_<>\%\/&#@!~`:;"',]/g, 'oof');
      if(msg.match(spRegex)){
        client.specialCommands.get(msg.match(spRegex)[0]).execute(client, message, args);
          db.updateCommand(msg.match(spRegex)[0]);
          return;
      }
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
