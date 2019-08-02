const pool = require('../../utils/db');
const moment = require('moment');
exports.run = (client, message, args) => {

    pool.query('SELECT * FROM santa_event_info WHERE AdminID = ?',[message.author.id], function(err,results,field){
        if(err) throw err;
        let info = results[0];
        //console.log(info);
        if(info.InitDate !== null){
            //Update the table.
            if(args[1] === undefined) message.reply('Please add a date. Use ~santa info for help.');
            else if(!moment(args[1], "YYYY-MM-DD").isValid(), true) message.reply('Please enter a valid ``YYYY-MM-DD`` formated date.');

        }
        else if(args[1] === undefined) message.reply('Please add a date. Use ~santa info for help.');
        else if(!(moment(args[1], "YYYY-MM-DD", true).isValid())) message.reply('Please enter a valid ``YYYY-MM-DD`` formated date.');
        //moment+7 for 1 week out, can't start the same day, defeats the purpose.
        else if(moment(args[1]).isBefore(moment())) message.channel.send('test');
        else console.log('potato');
    });
}