let { jojos } = require('../assets/arrays/jojos.json');
let misc = require('../utils/misc.js');

exports.run = (client, message, args) => {
    message.channel.send(misc.randomInArray(jojos)+"\n"+misc.randomInArray(jojos));
}
