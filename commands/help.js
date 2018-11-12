const { help } = require('../assets/arrays/text.json')
exports.run = (client, message, args) => {
    message.reply('Sent you a DM with information!');
    message.author.send({embed : {
        color: 0xfff,
        author :{
            name: client.user.username,
            icon_url: client.user.avatarURL
        },
        title: "Help",
        description: help
    }}
        );
}