module.exports = async(client, x, message) => {
  const hidden = require('../utils/hidden.js');
  const regex = x.regex;
  const specialRegex = x.specialRegex;
  const singingRegex = x.singingRegex;
  const prefix = x.prefix;
  let args = message.content.slice(prefix).trim().split(/ +/g);
  const command = args.shift().toLowerCase().replace(/[\W_]+/g, '');
  try {

    let y = hidden.oof(message.content);
    // Ignores all bots, MUST BE AT THE TOP. Avoids infinite loops.
    if (message.author.bot) return;
    // must check for prefix, will mess up other commands if it doesn't.
    else if (message.content.indexOf(prefix) !== 0){
      if (y.match(specialRegex) !== null){
        y = y.match(specialRegex)[0];
        let commandFile = require(`../special_commands/${y}.js`);
        commandFile.run(client, message, args);
      } else if (message.content.match(singingRegex) !== null){
        args = message.content.match(singingRegex)[0];
        let commandFile = require('../special_commands/sing.js');
        commandFile.run(client, message, args);
      }
    }
    // Ignores messages that don't start with prefix.
    // Also checks against strikethroughs.
    else if (message.content.indexOf(prefix) !== 0 ||
        message.content.lastIndexOf(prefix) > 0) return;

    else if (command.match(regex) !== null){
      let commandFile = require(`../commands/${command.match(regex)[0]}.js`);
      commandFile.run(client, message, args);
    } else
      message.channel.send('Sorry, I don\'t recognize that command.');
  } catch (err){
    console.log(err);
  }
};
