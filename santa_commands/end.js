const util = require('../utils/db.js');
module.exports = {
  name: 'end',
  usage: '~santa end',
  description: 'Allows the event owner and owner of the server to end the event at any time.',
  async execute(client, message, args){
    // TODO: Inform all users in the event of event end.
    if (message.guild === null){
      message.reply('This command does not work in DM\'s');
    } else {
      const row = await util.getUserSanta(message.guild.id, message.author.id);
      if (row.active === undefined || row.active === 'false'){
        message.reply('There is no active event in this guild.');
      } else if (row.userid === message.author.id || message.author.id === message.guild.owner.id){
        message.reply('Event aborted.');
        let cancel = await util.informDelete(message.guild.id, row.uniqueid);
        cancel.forEach(user => {
          client.users.get(user.userid).send(`${row.ownername}'s event has been canceled. `);
        });
        util.end(message.guild.id, message);
      } else
        message.reply('You are not the event owner.');
    }
  },
};
