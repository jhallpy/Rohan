'use strict';
const util = require('../utils/db.js');
const moment = require('moment');
module.exports = {
  name: 'start',
  usage: '~santa start',
  description: 'The entry point to the event. The user that runs this will be the event owner. They will be in charge of handling any issues with the event.',
  async execute(client, message, args){
    const date = moment().format('YYYY/M/DD ha');

    const filter = m => m.author.id === message.author.id;
    if (message.guild === null){
      message.reply('This command does not work in DM\'s');
    } else {
      const active = await util.checkGuild(message.guild.id, message.author.id);
      const row = await util.getSanta(message.guild.id, message.author.id);
      if (active === 'notCreator'){
        message.channel.send('You are not the creator of the event.');
      } else if (row !== undefined && moment(row.startdate, 'YYYY/M/D ha').isBefore(moment(date, 'YYYY/M/D ha'))) {
        message.reply('The event has already started. You can end this event by using the `~santa end` command.');
      } else if (active === true || active === false){
      // Fucky conditional but, still works. The problems in the db.js file. It works correctly just, not programmed so nicely.
        message.reply('Please enter a starting date for your event. The cutoff to join will be **ONE** day before the start date. Use the format `YYYY/MM/DD Ham/pm`. ex. 2019/11/30 5pm\n'
                + 'To skip to the next section type `next` or to cancel use `cancel`.');
        const collector = message.channel.createMessageCollector(filter, {time: 60000});
        collector.on('collect', m => {
        // Needed to ensure user can't open infinite collectors.
          if (m.content.startsWith('~')){
            message.reply('You can\'t use commands during the setup. to start again use `~santa start`.');
            collector.stop('Error.');
          } else if (m.content.toLowerCase() === 'cancel'){
            collector.stop('Cancel.');
          } else if (!moment(m.content, 'YYYY/M/D ha', true).isValid() && m.content.toLowerCase() !== 'next'){
            message.reply('Please enter a valid `YYYY/MM/DD Ham/pm` format. ex. 2019/11/30 5pm');
          } else if (moment(m.content, 'YYYY/M/D ha').isBefore(moment(date, 'YYYY/M/D ha').add(3, 'd')) || moment(m.content, 'YYYY/M/D ha').isBefore(moment(date, 'YYYY/M/D ha'))){
            message.reply(`Please enter a valid date at least three days from \`${moment(row.started, 'YYYY/M/D ha').format('LLL')}\`.`);
          } else if (moment(m.content, 'YYYY/M/D ha').isAfter(moment(date, 'YYYY/M/D ha').add(5, 'M'))){
            message.reply('You must start an event within 5 months of today.');
          } else if (moment(m.content, 'YYYY/M/D ha', true).isValid() || m.content.toLowerCase() === 'next'){
            if (m.content.toLowerCase() === 'next' && row.startdate !== null){
              message.reply(`Current starting date: \`${moment(row.startdate, 'YYYY/M/D ha').format('LLL')}\`\n`
                            + 'Next enter an end date when the bot will send out the gifts. \n'
                            + `End date must be at least seven days from start date. \nCurrent end date is: \`${moment(row.enddate).format('LLL')}\`\n`
                            + 'You can leave the end date as is or enter your own with the valid `YYYY/M/D ha` format. ex. 2019/11/30 5pm\n'
                            + 'You can also skip to `rules` by typing `next` or cancel out by using `cancel`.');
              collector.stop('Success.');
            } else if (m.content.toLowerCase() !== 'next'){
              util.startDate(m.content, m.guild.id, m.author.id, m.author.username);
              message.reply(`You have selected the date: \`${moment(m.content, 'YYYY/M/D ha').format('LLL')}\``
                            + 'Next enter an end date when the bot will send out the gifts. \n'
                            + `End date must be at least seven days from start date. \nCurrent end date is: \`${moment(m.content, 'YYYY/M/D ha').add(7, 'd').format('LLL')}\`\n`
                            + 'You can leave the end date as is or enter your own with the valid `YYYY/M/D ha` format. ex. 2019/11/30 5pm\n'
                            + 'You can also skip to `rules` by typing `next` or cancel out by using `cancel`.');
              collector.stop('Success.');
            } else {
              message.reply('You must enter a starting date to continue.');
              // return required here so that the rest of the code below does not run.
              return;
            }
            const collectorTwo = message.channel.createMessageCollector(filter, {time: 60000});
            collectorTwo.on('collect', m2 => {
              if (m2.content.startsWith('~')){
                message.reply('You can\'t use commands during the setup. to start again use `~santa start`.');
                collectorTwo.stop('Error.');
              } else if (m2.content.toLowerCase() === 'cancel'){
                collectorTwo.stop('Cancel.');
              } else if (!moment(m2.content, 'YYYY/M/D ha', true).isValid() && m2.content.toLowerCase() !== 'next'){
                message.channel.send('Please enter a valid `YYYY/MM/D Ham/pm` format. ex. 2019/11/30 5pm');
              } else if (moment(m2.content, 'YYYY/M/D ha').isBefore(moment(row.startdate, 'YYYY/M/D ha').add(7, 'd')) || moment(m2.content, 'YYYY/M/D ha').isBefore(moment(date, 'YYYY/M/D ha'))){
                message.channel.send(`Please enter a valid date at least seven days from \`${moment(row.startdate, 'YYYY/M/D ha').format('LLL')}\`.`);
              } else if (moment(m2.content, 'YYYY/M/D ha').isAfter(moment(date, 'YYYY/M/D ha').add(6, 'M'))){
                message.reply('You must start an event end within 6 months of today.');
              } else if (moment(m2.content, 'YYYY/M/D ha', true).isValid() || m2.content.toLowerCase() === 'next'){
                if (m2.content.toLowerCase() !== 'next' && row.enddate !== null){
                  message.reply(`You have selected the end date: \`${moment(m2.content, 'YYYY/M/D ha').format('LLL')}\``);
                  util.enddate(m2.content, m2.guild.id, m2.author.id);
                  collectorTwo.stop('Success.');
                } else if (row.enddate === null){
                  message.reply(`Current ending date: \`${moment(m.content, 'YYYY/M/D ha').add(7, 'd').format('LLL')}\``);
                  collectorTwo.stop('Success.');
                }
                message.reply('Please enter rules you wish to have for this event. Character limit is 1000.');
                const collectorThree = message.channel.createMessageCollector(filter, {time: 60000});
                collectorThree.on('collect', m3 => {
                  if (m3.content.startsWith('~')){
                    message.reply('You can\'t use commands during the setup. to start again use `~santa start`.');
                    collectorThree.stop('Error.');
                  } else if (m3.content.length > 1000){
                    message.reply(`Your character count was ${m3.content.length}. Please keep it to 1000 or less.`);

                  } else if (m3.content.length <= 1000){
                    collectorThree.stop('Success.');
                    util.updateRules(m3.content, m3.guild.id, m2.author.id);
                    message.reply(`Your rules are: \`${m3.content}\` If you would like to change anything run \`~santa start\`.`
                  + '\nCheck your DM from Rohan for more information.');
                    const santaEmbed = {
                      author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL,
                      },
                      color: 0x3a8d31,
                      title: 'Secret Santa',
                      fields: [
                        {
                          name: `${client.santaCommands.get('check').name}`,
                          value: `${client.santaCommands.get('check').usage}\n`
                        + `${client.santaCommands.get('check').description}\n`,
                        },
                        {
                          name: `${client.santaCommands.get('end').name}`,
                          value: `${client.santaCommands.get('end').usage}\n`
                        + `${client.santaCommands.get('end').description}\n`,
                        },
                        {
                          name: `${client.santaCommands.get('info').name}`,
                          value: `${client.santaCommands.get('info').usage}\n`
                        + `${client.santaCommands.get('info').description}\n`,
                        },
                        {
                          name: `${client.santaCommands.get('remove').name}`,
                          value: `${client.santaCommands.get('remove').usage}\n`
                        + `${client.santaCommands.get('remove').description}\n`,
                        },
                        {
                          name: 'Additional Info',
                          value: 'Once the event starts, remove no longer works. End will still work and then send everyone a message saying the event has ended.',
                        },
                      ],
                    };
                    try {
                      message.author.send({embed: santaEmbed});
                    } catch (err){
                      if (err){
                        console.log(err);
                        message.channel.send({embed: santaEmbed});
                      }
                    }
                  }

                });
                collectorThree.on('end', (collected, reason) => {
                  if (reason === 'Canceled'){
                    message.reply('User canceled operation.');
                    return;
                  } else if (reason === 'Error.'){
                    return;
                  } else if (reason !== 'Success.'){
                    message.reply('Exiting, if you want to start again use `~santa start`.');
                    console.log('three');
                    return;
                  }
                });
              }


            });
            collectorTwo.on('end', (collected, reason) => {
              if (reason === 'Canceled'){
                message.reply('User canceled operation.');
                return;
              } else if (reason === 'Error.'){
                return;
              } else if (reason !== 'Success.'){
                message.reply('Exiting, if you want to start again use `~santa start`.');
                console.log('two');
                return;
              }
            });
          }

        });
        collector.on('end', (collected, reason) => {
          if (reason === 'Cancel.'){
            message.reply('User canceled operation.');
            return;
          } else if (reason === 'Error.'){
            return;
          } else if (reason !== 'Success.'){
            message.reply('Exiting, if you want to start again use `~santa start`.');
            console.log('one');
            return;
          }
        });
      }
    }
  },
};
