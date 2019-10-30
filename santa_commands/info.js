const util = require('../utils/db.js');
const moment = require('moment');
module.exports = {
  name: 'info',
  usage: '~santa info',
  description: 'Shows event info.',
  async execute(client, message, args){
    if (message.guild === null){
      message.reply('This command does not work in DM\'s');
    } else {
      let row = await util.getUserSanta(message.guild.id, message.author.id);
      if (row.active === undefined || row.active === 'false'){
        let santaEmbed = {
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL,
          },
          color: 0x3a8d31,
          title: 'Santa Help',
          fields: [
            {
              name: '**IMPORTANT NOTICE**',
              value: 'If you **can not** receive DM\'s you *must* turn them on to use most santa commands. And you will **not** receive your gift if you partake in an event.\n'
                  + 'If you have any feedback for these commands or notice any mistakes, please join the help discord and let me know.\n'
                  +'**ALL TIMES ARE LOCAL TO EST/EDT**',
            },
            {
              name: `${client.santaCommands.get('start').name}`,
              value: `${client.santaCommands.get('start').usage}\n`
                + `${client.santaCommands.get('start').description}\n`,
            },
            {
              name: `${client.santaCommands.get('end').name}`,
              value: `${client.santaCommands.get('end').usage}\n`
                + `${client.santaCommands.get('end').description}\n`,
            },
            {
              name: `${client.santaCommands.get('leave').name}`,
              value: `${client.santaCommands.get('leave').usage}\n`
                + `${client.santaCommands.get('leave').description}\n`,
            },
            {
              name: `${client.santaCommands.get('gift').name}`,
              value: `${client.santaCommands.get('gift').usage}\n`
                + `${client.santaCommands.get('gift').description}\n`,
            },
            {
              name: `${client.santaCommands.get('remove').name}`,
              value: `${client.santaCommands.get('remove').usage}\n`
            + `${client.santaCommands.get('remove').description}\n`,
            },
          ],
        };
        message.channel.send({embed: santaEmbed});
      } else {
        let santaEmbed = {
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL,
          },
          color: 0x3a8d31,
          title: 'Event Info',
          fields: [
            {
              name: 'Info',
              value: `Cutoff Date to join: \`${moment(row.cutoff, 'YYYY/M/D ha').format('LLL')}\`\n`
                    + `Starting Date of event: \`${moment(row.startdate, 'YYYY/M/D ha').format('LLL')}\`\n`
                    + `Ending Date when gifts are sent: \`${moment(row.enddate, 'YYYY/M/D ha').format('LLL')}\`\n`
                    + `Rules of event: \`${row.rules}\`\n`
                    + `Event Owner: \`${row.ownername}\`\n`
                    +'**ALL TIMES ARE LOCAL TO EST/EDT**',
            },
            {
              name: `${client.santaCommands.get('join').name}`,
              value: `${client.santaCommands.get('join').usage}\n`
            + `${client.santaCommands.get('join').description}\n`,
            },
            {
              name: `${client.santaCommands.get('leave').name}`,
              value: `${client.santaCommands.get('leave').usage}\n`
            + `${client.santaCommands.get('leave').description}\n`,
            },
            {
              name: `${client.santaCommands.get('gift').name}`,
              value: `${client.santaCommands.get('gift').usage}\n`
            + `${client.santaCommands.get('gift').description}\n`,
            },
            {
              name: `${client.santaCommands.get('remove').name}`,
              value: `${client.santaCommands.get('remove').usage}\n`
            + `${client.santaCommands.get('remove').description}\n`,
            },
          ],
        };
        message.channel.send({embed: santaEmbed});
      }
    }
  },
};
