const misc = require('../utils/misc.js');
exports.run = (client, message, args, guild) => {
  if(misc.checkTwoID(message)){
    //This has to be used in order to get a guild members display name. There might be a way through the API but, this is 100x easier.
    let names = message.cleanContent.slice(6).replace(/@+/g,"").split(' ');
    message.channel.send(names[0].slice(0,3) + names[1].slice(names[1].length-3, names[1].length).toLowerCase());
  }
  else if(args.length == 2)
    message.channel.send(args[0].slice(0,3) + args[1].slice(args[1].length-3, args[1].length).toLowerCase());
  else
    message.channel.send('Please mention two people.')
}