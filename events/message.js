module.exports = async(client, message) => {
  const error = require('../utils/error.js');
  const prefix = client.prefix.map((x) => x.toString());
  const args = message.content.slice(prefix).trim().split(/ +/g);
  console.log(args);
  const commandName = args.shift().toLowerCase().replace(/[\W_]+/g, '');
  console.log(commandName);
  try {
    // Ignores all bots, MUST BE AT THE TOP. Avoids infinite loops.
    if (message.author.bot) return;
    // must check for prefix, will mess up other commands if it doesn't.
    else if (message.content.indexOf(prefix) !== 0){
      args.forEach(word => {
        console.log(word);
        if (client.specialCommands.has(word.toLowerCase())){
          client.specialCommands.get(word.toLowerCase()).execute(client, message, args);
          return;
        }
        // TODO: Add singing back in eventually.
      });
    }
    // Ignores messages that don't start with prefix.
    // Also checks against strikethroughs.
    else if (message.content.indexOf(prefix) !== 0 || message.content.lastIndexOf(prefix) > 0) return;
    else if (client.commands.has(commandName))
      client.commands.get(commandName).execute(client, message, args);
    else
      message.channel.send('Sorry, I don\'t recognize that command. If you need help, use the `~help` command.');
  } catch (err){
    error(client, message, err);
  }
};
