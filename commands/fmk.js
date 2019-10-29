const misc = require('../utils/misc.js');

module.exports = {
  name: 'fmk',
  usage: '~fmk <name/@user/arg> <name/@user/arg> <name/@user/arg>',
  description: '`~fmk` - Fuck/Marry/Kill. Input 3 names separated by spaces.',
  execute(client, message, args){
    if (args.length === 3){
      args = misc.shuffleArray(args);
      message.channel.send(`Fuck: ${args[0]} \n Marry: ${args[1]} \n Kill: ${args[2]}`);
    } else if (!(args.length === 3))
      message.channel.send('Please use 3 names :thinking:');
    else
      message.channel.send('An error occured. Please use the `~help` command if you need help.');
  },
};
