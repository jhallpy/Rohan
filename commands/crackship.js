'use strict';
const { jojox } = require('../assets/arrays/jojox.json');
const misc = require('../utils/misc.js');

module.exports = {
  name: 'crackship',
  usage: '~crackship',
  description: '`~crackship` - Generates a random JoJo character(s), including minor characters.',
  execute(client, message, args){
    message.channel.send(misc.randomInArray(jojox) + '\n' + misc.randomInArray(jojox));
  },
};
