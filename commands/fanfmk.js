const misc = require('../utils/misc.js');

module.exports = {
  name: 'fanfmk',
  usage: '~fanfmk <name/@user/arg> <name/@user/arg> <name/@user/arg>',
  description: '`~fanfmk` - Same as Fuck/Marry/Kill, but with classic fanfiction tropes Fake Date/Slow Burn/Enemies to Lovers.',
  execute(client, message, args){
    if (args.length === 3){
      args = misc.shuffleArray(args);
      message.channel.send(`Fake Date: ${args[0]} \nSlow Burn: ${args[1]} \nEnemies to Lovers: ${args[2]}`);
    } else if (!(args.length === 3))
      message.channel.send('Please use 3 names. :thinking:');
    else
      message.channel.send('An error occured. Please use the `~help` command if you need help.');
  }
};
