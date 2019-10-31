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
            name: `${client.commands.get('crackship').name}`,
            value: `${client.commands.get('crackship').usage}\n`
              + `${client.commands.get('crackship').description}\n`,
          },
          {
            name: `${client.commands.get('dj').name}`,
            value: `${client.commands.get('dj').usage}\n`
              + `${client.commands.get('dj').description}\n`,
          },
          {
            name: `${client.commands.get('duwang').name}`,
            value: `${client.commands.get('duwang').usage}\n`
              + `${client.commands.get('duwang').description}\n`,
          },
          {
            name: `${client.commands.get('fanfmk').name}`,
            value: `${client.commands.get('fanfmk').usage}\n`
              + `${client.commands.get('fanfmk').description}\n`,
          },
          {
            name: `${client.commands.get('fmk').name}`,
            value: `${client.commands.get('fmk').usage}\n`
              + `${client.commands.get('fmk').description}\n`,
          },
          {
            name: `${client.commands.get('hd').name}`,
            value: `${client.commands.get('hd').usage}\n`
              + `${client.commands.get('hd').description}\n`,
          },
          {
            name: `${client.commands.get('help').name}`,
            value: `${client.commands.get('help').usage}\n`
              + `${client.commands.get('help').description}\n`,
          },
          {
            name: `${client.commands.get('jojo').name}`,
            value: `${client.commands.get('jojo').usage}\n`
              + `${client.commands.get('jojo').description}\n`,
          },
          {
            name: `${client.commands.get('jojox').name}`,
            value: `${client.commands.get('jojox').usage}\n`
              + `${client.commands.get('jojox').description}\n`,
          },
          {
            name: `${client.commands.get('prompt').name}`,
            value: `${client.commands.get('prompt').usage}\n`
              + `${client.commands.get('prompt').description}\n`,
          },
          {
            name: `${client.commands.get('random').name}`,
            value: `${client.commands.get('random').usage}\n`
              + `${client.commands.get('random').description}\n`,
          },
          {
            name: `${client.commands.get('rarepair').name}`,
            value: `${client.commands.get('rarepair').usage}\n`
              + `${client.commands.get('rarepair').description}\n`,
          },
          {
            name: `${client.commands.get('santa').name}`,
            value: `${client.commands.get('santa').usage}\n`
              + `${client.commands.get('santa').description}\n`,
          },
          {
            name: `${client.commands.get('ship').name}`,
            value: `${client.commands.get('ship').usage}\n`
              + `${client.commands.get('ship').description}\n`,
          },
          {
            name: `${client.commands.get('sp').name}`,
            value: `${client.commands.get('sp').usage}\n`
              + `${client.commands.get('sp').description}\n`,
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
