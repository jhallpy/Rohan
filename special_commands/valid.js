let { valid } = require('../assets/arrays/valid.json');
let misc = require('../utils/misc.js');

exports.run = (client, message, args) => {
  message.channel.send(misc.randomInArray(valid));
};
