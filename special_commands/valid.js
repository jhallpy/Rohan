'use strict';
let { valid } = require('../assets/arrays/valid.json');
let misc = require('../utils/misc.js');
module.exports = {
  name: 'valid',
  execute(client, message, args){
    message.channel.send(misc.randomInArray(valid));
  },
};
