const { duwang } = require('../assets/arrays/duwang.json');
const misc = require('../utils/misc.js');

module.exports = {
  name: 'duwang',
  usage: '~duwang',
  description: '`~duwang` - don\'t be dong.',
  execute(client, message, args){
    message.channel.send(misc.randomInArray(duwang));
  },
};
