const duwang = require('../assets/arrays/duwang.json');
const misc = require('../utils/misc.js');

exports.run = (client, message, args) => { 
    message.channel.send(misc.randomInArray(duwang));
}