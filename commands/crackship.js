const { jojox } = require('../assets/arrays/jojox.json');
const misc = require('../utils/misc.js');

exports.run = (client, message, args) => {
    message.channel.send(misc.randomInArray(jojox)+"\n"+misc.randomInArray(jojox));
}
