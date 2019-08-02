const pool = require('./db')
module.exports = {
    checkStartDate: (message) => {
        //init setup, currently unstable
        pool.query('SELECT  FROM santa_guild_info WHERE GuildID='+ message.guild.id +'', function (err, result, fields){
            if (err) throw new Error(err);
            //console.log(result)
            else if (result.length>0){
                return true;
            }
            else{
                console.log('false')
            }
        })
    }
}