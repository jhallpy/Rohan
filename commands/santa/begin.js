const pool = require('../../utils/db');
const check = require('../../utils/dbMisc');
exports.run = (client, message, args) => {
    if (check.checkStartDate(message) == true){
        console.log('works');
    }
    else
        console.log('does not work');
    
    console.log(check.checkStartDate(message));
    /*pool.query('SELECT GuildID FROM santa_guild_info WHERE GuildID='+ message.guild.id +'', function (err, result, fields){
        if (err) throw new Error(err);
        //console.log(result)
        if(result===undefined || result.length===0) {
            pool.query('INSERT INTO santa_guild_info (GuildID) VALUES (' + message.guild.id + ');',function (err, result, fields){
                if(err){
                    message.channel.send('An error occured.')
                    throw new Error(err);
                    
                } 
                console.log(result);
            })
        }
        else if (result.length == 1){

        }
    });*/
}