const { jojos } = require('../assets/arrays/jojos.json');
const misc = require('../utils/misc.js');

module.exports = {
  name: 'rarepair',
  usage: '~rarepair',
  description: '`~rarepair` - Generates a random JoJo character(s), with only major characters.',
  execute(client, message, args){
    message.channel.send(misc.randomInArray(jojos) + '\n' + misc.randomInArray(jojos));
  }
};
