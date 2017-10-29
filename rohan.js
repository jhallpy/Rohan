/*
Hello and welcome to Rohan!
*/
const Discord = require('discord.js');
const client = new Discord.Client();
//authentication token
const auth = require ("./config.js");
//universal command prefix
const prefix = "~";
//this allows me to import functions from that file.
var app = require('./functions/app.js');
//when bot is started
client.on('ready', () => {
  console.log(`I, ${client.user.username}, am ready.`);
});
//when getting messaged
client.on('message', message => {
//aborts commands without the prefix & from bot Users
if (!message.content.startsWith(prefix)) return;
if (message.author.bot) return;
//shorten following commands with this
//let command = message.content.split(" ")[0];
let command = message.content;
command = command.slice(prefix.length);
command = command.toLowerCase();
//ping!
if (command === 'ping') {
  message.reply(`go away! \`${Date.now() - message.createdTimestamp} ms\``);
}
//help guide.
else if (command === 'help') {
  message.channel.send("To access my prompt library, type any of the following category letters in any order preceded by a tilde(~):\n`(A)djectives(J)obs(E)xpressions(V)erbs(T)ransitiveVerbs(C)lothing(S)trange nouns(F)auna(U)nreal/unusual animals(P)lants(M)eals(O)bjects(L)ocales`\nExample: typing `~aj` might return `abducted basketballer`\n\n`~hd @mention` to activate the power of my stand. Alternatively: `~sp` or `~dj`\n`~duwang` to don't be dong.\n\nPlease forward bug reports (non-responsive commands, spelling errors, etc.) or suggestions to #Furiianda2657.");
}
//Duwang
else if (command === 'duwang') {
  var duwang = ["ALSO NEED TO TASTE IT.", "use my ability to open the door that leads to the heaven.", "what the fuck.", "哈 ♥", "LET ME SEE YOUR NEXT PAGE OF EXPERIENCE", "I will change you to my material also...", "HA HA..... JOSUKE, YOUR HAIR IS REALLY FUCKED UP MAN....", "GET THE FUCK OUTTA MY FACE!!", "啊 !", "...if I can make Rohan my cookie, I will become like Rohan...", "you have only won once, and started waddling already", "am I illusional?", "you cheap, untruthful duper!",
  "how did it?", "shit! all over me", "Fuck! slipped into my body!", "um.... so itchy!", "嗎 !", "That guy must have slept over clock."];
  var rand = duwang[Math.floor(Math.random() * duwang.length)];
  message.channel.send(rand);
}
//HEAVEN'S DOOR!
  //@mention a User and it makes up a secret about them
else if(command.slice(0,2) === 'hd'){
  var input = message.content.slice(4, message.content.length);
  message.channel.send(app.hd(input));
}
//heaven's door experimental addition (fave object)
else if(command.slice(0,2) === 'sp'){
  var input = message.content.slice(4, message.content.length);
  message.channel.send(app.sp(input));
}
//heaven's door experimental addition (dream job)
else if(command.slice(0,2) === 'dj'){
  var input = message.content.slice(4, message.content.length);
  message.channel.send(app.dj(input));
}
//I need alcohol.
else if(command.slice(0,4) === 'ship'){
  var input = message.cleanContent;
  message.channel.send(app.ship(input));
}
else if(command.slice(0,3) === 'fmk'){
  var input = message.content.slice(5, message.content.length);
  message.channel.send(app.fmk(input));
}
//prompt commands. KEEP THIS AT THE BOTTOM. otherwise these letters will activate on other commands starting with the letters.
//if you really need to put something after, use " && !command === 'ping' " (ping replaced with any conflicting command) after " (command.charAt(0)) " in the following line
else if (/^(a|j|e|v|s|f|u|p|o|l|c|t|m)$/.exec(command.charAt(0))){
  var input= message.content;
  message.channel.send(app.combined(input));
}
});

//oauth login
client.login(auth.config.authToken.token);
