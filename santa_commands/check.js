const util = require('../utils/db.js');
const discord = require('discord.js');
module.exports = {
  name: 'check',
  usage: '~santa check',
  description: 'Will send you every user in your events progress. This will show you who their present is for, their request, their submitted gift if there is one.'
    + ' This will remove all secret to secret santa. Only to be used to manage your own event and ensure gifts are being completed.',
  async execute(client, message, args){
    if (message.guild === null){
      message.reply('This command does not work in DM\'s');
    } else {
      let row = await util.getUserSanta(message.guild.id, message.author.id);
      if (message.author.id !== row.userid){
        message.reply('You are not the owner of the event.');
      } else {

        let data = await util.getAll(message.guild.id, row.uniqueid);
        console.log(data);
        data.forEach((x) => {
          let embed = new discord.RichEmbed()
            .setColor(0x3a8d31)
            .setAuthor(client.user.username, client.user.avatarURL)
            .setTitle(`${x.username}`)
            .addField(`${x.username}'s Assigned Users id:`, ` \`${x.assigneduserid}\``)
            .addField(`${x.username}'s request:`, ` \`${x.request}\``)
            .addField(`${x.username}'s gift:`, ` \`${x.null}\``)
            .addField(`${x.username}'s User ID:`, `\`${x.userid}\``)
            .addField('Additional information', 'Any field that shows as \`null\` is blank.');
          try { message.author.send(embed); } catch (err){ message.channel.send('Could not send information through DM.'); }
        });
      }
    }
  },
};
