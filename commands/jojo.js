let { jojos } = require('../assets/arrays/jojos.json');
const misc = require('../utils/misc.js');

exports.run = (client, message, args) => {
    message.channel.send(misc.randomInArray(jojos));
}
