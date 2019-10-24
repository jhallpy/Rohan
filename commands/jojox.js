const { jojox } = require('../assets/arrays/jojox.json');
const misc = require('../utils/misc.js');

module.exports = {
  name: 'jojox',
  usage: '~jojox',
  description: '`~jojox`- Generates a random JoJo character(s), including minor characters.',
  execute(client, message, args){
    message.channel.send(misc.randomInArray(jojox));
  }
};
