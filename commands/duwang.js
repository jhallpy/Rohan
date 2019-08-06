let { duwang } = require('../assets/arrays/duwang.json');
let misc = require('../utils/misc.js');

exports.run = (client, message, args) => { 
    message.channel.send(misc.randomInArray(duwang));
}