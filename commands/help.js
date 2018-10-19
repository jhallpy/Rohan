const { help } = require('../assets/arrays/text.json')
exports.run = (client, message, args) => {
    message.channel.send(help);
}