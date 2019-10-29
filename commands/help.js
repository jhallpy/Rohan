module.exports = {
  name: 'help',
  description: 'test',
  execute(client, message, args){
  // message.reply('I have sent you a DM with information.');
    if (args.length === 0){
      const helpEmbed = {
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL,
        },
        color: 0x3a8d31,
        title: 'Rohan Help',
        fields: [
          {
            name: 'Help',
            value: 'To see a list of commands use `~help commands`.\n' +
              'Or use `~help <command>` if you know the command you\'re looking for.\n' +
              '\nJoin Rohan\'s Discord: https://discord.gg/c5F7Zjz There you can request help, see planned features and updates, as well as make suggestions!',
          },
        ],
      };
      message.channel.send({embed: helpEmbed});
    } else if (args[0] === 'commands'){
      const commandEmbed = {
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL,
        },
        color: 0x3a8d31,
        title: 'Command List',
        fields: [
          {
            name: 'Description',
            value: 'To see how to use an individual command use `~help <command>` minus the <>\'s.',
          },
          {
            name: 'Commands: ',
            value: '\n crackship, dj, duwang, fanfmk, fmk, hd, jojo, jojox,' +
              ' prompt, random, rarepair, ship, sp',
          },
        ],
      };
      message.channel.send({embed: commandEmbed});
    } else if (client.commands.has(args[0])){
      const commandEmbed = {
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL,
        },
        color: 0x3a8d31,
        title: '~' + args[0] + ' info',
        fields: [
          {
            name: 'Description',
            value: client.commands.get(args[0]).description,
          },
          {
            name: 'Usage: ',
            value: client.commands.get(args[0]).usage,
          },
        ],
      };
      message.channel.send({embed: commandEmbed});
    }
  },
};
