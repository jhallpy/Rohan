const util = require('../utils/db.js');
const moment = require('moment');
module.exports = {
  name: 'join',
  usage: '~santa join',
  description: 'Placeholder',
  async execute(client, message, args){
    let date = moment().format('YYYY/MM/DD ha');
    if (message.guild === null){
      message.reply('This command does not work in DM\'s');
    } else {
      let row = await util.getUserSanta(message.guild.id, message.author.id);
      let userinfo = await util.getUserInfo(message.guild.id, message.author.id);
      if (row.active === undefined || row.active === 'false'){
        message.reply('There is no active event in this guild.');
      } else if (moment(row.cutoff, 'YYYY/M/D ha').isBefore(moment(date, 'YYYY/M/D ha'))){
        message.reply('The cutoff date to join has passed.');
      } else if (userinfo.uniqueid === row.uniqueid){
        message.reply('You have already joined this event.');
      } else {
        message.reply(`You have successfully joined the event. The current starting date is: \`${moment(row.startdate, 'YYYY/M/D ha').format('LLL')}\`. The current ending date is: \`${moment(row.enddate, 'YYYY/M/D ha').format('LLL')}\`.\n`
            + `Rules of the event: \`${row.rules}\``)
            + 'To see the dates or rules again in the future use the `~santa info` command.\n'
            + 'Each user should define an ideal gift they\'d like to receive. Run the `~santa request` command to input your ideal gift and follow the instructions.';
        util.addUser(message.guild.id, message.author.id, message.author.username);
      }
    }
  },
};
