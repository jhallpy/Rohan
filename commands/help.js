const { help } = require('../assets/arrays/text.json');

exports.run = (client, message, args) => {
  message.reply('I have sent you a DM with information.');
  message.author.send({embed: {
    color: 0x3a8d31,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL,
    },
    title: 'Help',
    description: help
  }}
  );
};
