'use strict';
module.exports = {
  name: 'help',
  usage: '~help or ~help <command>',
  description: 'Well ... it\'s helpful.',
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
            value: 'Use `~help <command>` to see a single command.\n\n'
            + '**Join Rohan\'s Discord: https://discord.gg/c5F7Zjz There you can request help, see planned features and updates, as well as make suggestions!**',
          },
          {
            name: 'List of Commands',
            value: `${client.commands.get('crackship').name},\t${client.commands.get('dj').name},\t${client.commands.get('duwang').name},\t\t${client.commands.get('fanfmk').name},\t`
                  + `${client.commands.get('fmk').name},\t${client.commands.get('hd').name},\t${client.commands.get('help').name},\t${client.commands.get('jojo').name},\t`
                  + `${client.commands.get('jojox').name},\t${client.commands.get('prompt').name},\t${client.commands.get('random').name},\t${client.commands.get('rarepair').name},\t`
                  + `${client.commands.get('santa').name},\t${client.commands.get('ship').name},\t${client.commands.get('sp').name}\t`,
          },
        ],
      };
      message.channel.send({embed: helpEmbed});
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
            name: `${client.commands.get(args[0]).name}`,
            value: `${client.commands.get(args[0]).usage}\n`
              + `${client.commands.get(args[0]).description}\n`,
          },
        ],
      };
      message.channel.send({embed: commandEmbed});
    }
  },
};
