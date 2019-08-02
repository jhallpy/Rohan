const help = require('../../assets/arrays/text.json');
const misc = require('../../utils/misc');
const pool = require('../../utils/db');
const db = require('../../utils/dbMisc');
const shortid = require('shortid');
const moment = require('moment');

exports.run = (client, message, args) => {
    let newPasscode = shortid.generate();
    pool.query('SELECT * FROM santa_event_info WHERE AdminID=?', [message.author.id] ,function(err,result,fields){
        console.log(result);
        if(err) throw err;
        else if(result === undefined || result.length === 0){
            pool.query('INSERT INTO santa_event_info (Passcode,AdminID,InitDate,Complete) VALUES (?,?,?,?)', [newPasscode,message.author.id, moment().format('YYYY-MM-DD'), false], function(err,result,fields){
                if(err){ 
                    message.channel.send('There was an error. Please try again or submit a bug report.');
                    throw err;
                }
                else{
                    if(message.guild === null)
                        message.author.send('Will be a json pull from help file explaining what steps to take next. From there users can continue on to setup the event. also passcode: ``'+newPasscode+ '`` Also make this a reply you retard');
                    else{
                        message.reply('I will send you a DM with more info.');
                        message.author.send('Will be a json pull from help file explaining what steps to take next. From there users can continue on to setup the event. also passcode: ``'+newPasscode+ '`` Also make this a reply you retard');
                    }
                }
            });
            return;
        }
        //checks result object for each entry, some suers will have multiple. If all come back as not null, continue to next if statement.
        else if (result[result.length -1].Complete === 0){
            message.channel.send('You haven\'t completed setup of another event. Sending a DM with further instructions.' );
            message.author.send('This is the passcode.: ``' + result[result.length-1].Passcode + '`` \nPlease use ``~santa info`` and finish the event setup first.');
        }
        //Checks current date vs end date of users last event. If last even isn't over, go to else statement.
        else if(Date.parse(new Date())>Date.parse(result[result.length - 1].EndDate)){
            pool.query('INSERT INTO santa_event_info (Passcode,AdminID,Complete) VALUES (?,?,?)', [newPasscode,message.author.id, false], function(err,result,fields){
                if(err){ 
                    //should add a way to log these
                    message.channel.send('There was an error. Please try again or submit a bug report.');
                    throw err;
                }
                else
                    message.channel.send('Will be a json pull from help file explaining what steps to take next. From there users can continue on to setup the event. also passcode:'+newPasscode);
            });
        }
        else
            message.channel.send('Your last event isn\'t over! Use ``~santa info`` for more details.');
    });
}