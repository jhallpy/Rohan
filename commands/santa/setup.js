const help = require('../../assets/arrays/text.json');
const misc = require('../../utils/misc');
const pool = require('../../utils/db');
const db = require('../../utils/dbMisc');
exports.run = (client, message, args) => {
    let passcode = misc.generatePasscode();
    pool.query('SELECT Passcode FROM santa_event_info;', function(err,result,fields){
        if(err) throw err;
        console.log(result.length);
        for(var i = 0; i < result.length; i++){
            if(result[i].passcode === passcode){
                //figure out easy way to check against all passcodes to make sure there are no duplicates, if there are get a new passcode!
            }
        }
    })
}