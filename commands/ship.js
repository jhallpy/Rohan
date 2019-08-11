const misc = require('../utils/misc.js');

exports.run = (client, message, args, guild) => {
  if (misc.checkTwoID(message)){
    // This has to be used in order to get a guild members display name. There might be a way through the API but, this is 100x easier.
    let names = message.cleanContent.slice(6).replace(/@+/g, '').split(' ');
    // Currently both commands work exactly the same. For this one the error was not taking names that were 'Test Name One' + 'Test Name Two' and making 'Testwo'.
    message.channel.send(names[0].slice(0, 3) + names[names.length - 1].slice(names[names.length - 1].length - 3, names[names.length - 1].length).toLowerCase());
  } else if (args.length == 2){
    let names = message.cleanContent.slice(6).replace(/@+/g, '').split(' ');
    // The error for this statement was if a user mentioned a user and then used a seperate name all together. So, '@Name' + 'String' = '<!@ing'.
    message.channel.send(names[0].slice(0, 3) + names[names.length - 1].slice(names[names.length - 1].length - 3, names[names.length - 1].length).toLowerCase());
  } else
    message.channel.send('Please mention two people.');
};
