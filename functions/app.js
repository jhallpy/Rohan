const Discord = require('../node_modules/discord.js/src/index.js');
//prompt file 1
var descripts = require('../promptlib/descripts.js');
var adjectives = descripts.adjectives;
var jobs = descripts.jobs;
var expressions = descripts.expressions;
var verbs = descripts.verbs;
var transitive = descripts.transitive;
var clothing = descripts.clothing;
//prompt file 2
var subjects = require('../promptlib/subjects.js');
var strange = subjects.strange;
var fauna = subjects.fauna;
var unreals = subjects.unreals;
var plants = subjects.plants;
var meals = subjects.meals;
var objects = subjects.objects;
var locales = subjects.locales;
//Heaven's Door
var heaven = [" shot JFK.", " likes vore.", " did 9/11.", " sniffs glue.", " liked to eat worms as a child. I can appreciate that.", " played chess against a dog... and lost.", " likes to cover themselves in mud, and squeal like a pig.", "... collects stamps. (Really? That's all? How boring.)", " keeps a diary detailing their extensive criminal record.", " tries to summon a demon now and then, just for company.", " is a furry...", " woke up two hours late today.", " once murdered ten people using only a balloon, a paperclip, and six packets of bubble gum.", " farted on your pillow."
];
//HEAVEN'S DOOR!
//@mention a User and it makes up a secret about them
function hd(userMessage){
    var msg = userMessage;
    var output;
    if(msg === '<@285203261936369667>'){
        output = 'Get out of my house!!';
      }
    else if(msg.length >= 10){
          var hdoor = heaven[Math.floor(Math.random() * heaven.length)];
          output = msg + hdoor;
        }
    else
        output = 'Who? Where?';
    return output;
}
//heaven's door experimental addition (fave object)
function sp(userMessage){
    var msg = userMessage;
    var output;
    if(msg === '<@285203261936369667>'){
        output = ('Get out of my house!!');
      }
    else if(msg.length >= 10){
        var robj = objects[Math.floor(Math.random() * objects.length)];
        output = (msg + "'s favourite thing is a very special `" + robj + "`.");
        }
    else
        output = ('Who? Where?');
    return output;
}
//heaven's door experimental addition (dream job)
function dj(userMessage){
    var msg = userMessage;
    var output;
    if(msg === '<@285203261936369667>'){
        output = ('Get out of my house!!');
      }
    else if(msg.length >= 10){
          var rjob = jobs[Math.floor(Math.random() * jobs.length)];
          output = (msg + " wishes they were the world's greatest `" + rjob + "`.");
        }
    else
        output = ('Who? Where?');
    return output;
}
//I need alcohol.
function ship(userMessage){
    var msg = userMessage;
    var output;
    msg = msg.slice(5,msg.length+1);
    var desired = msg.replace(/[^\w\s]/gi, '');
    desired = desired.split(" ")
    var final='';
    for (var i = 0; i < desired.length; i++){
      var tempArray;
      var tempStr;
      if(desired[i]===desired[0]){
        tempArray = desired.slice(0,2);
        tempStr = tempArray.join('');
        tempStr = tempStr.slice(0,3);
        final = tempStr;
      }
      else{
        tempArray = desired.slice(i+1, i+2);
        tempStr = tempArray.join('');
        tempStr = tempStr.slice(tempStr.length-3 , tempStr.length).toLowerCase();
        final = final + tempStr;
      }
      tempArray='';
    } 
    output = final;
    return output;
}
function fmk(userMessage){
    var msg = userMessage;
    //msg = msg.replace(/\s/g, '');
    var output;
    var fmk = [];
    fmk = msg.split(',');
    if (fmk.length === 1){ 
      fmk = msg.split(/(?=<)/g);
      if (fmk.length === 3){
          function shuffleArray(array) {
              for (var i = array.length - 1; i > 0; i--) {
                  var j = Math.floor(Math.random() * (i + 1));
                  [array[i], array[j]] = [array[j], array[i]];
              }
              return array;
              }
          fmk = shuffleArray(fmk);
          output = (`Fuck: ${fmk[0]} \n Marry: ${fmk[1]} \n Kill: ${fmk[2]}`);
      }
      else 
        output = "Please use 3 names. :thinking:" //you can change this to whatever.
  }
  else if (fmk.length === 3){
    if (fmk.length === 3){
      function shuffleArray(array) {
          for (var i = array.length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
          }
      fmk = shuffleArray(fmk);
      output = (`Fuck: ${fmk[0]} \n Marry: ${fmk[1]} \n Kill: ${fmk[2]}`);
    }
    else 
      output = "Please use 3 names. :thinking:" //you can change this to whatever.
  }
  else
    output = "Please use 3 names. :thinking:" //you can change this to whatever.
  return output;
}
function combined(userMessage){
    var msg = userMessage;
    var output = '';
    msg = msg.replace(/\s+/g, '');
    for(i=0;i<msg.length;i++)
    {
      if (msg.charAt(i) === 'a') {
        var rand = adjectives[Math.floor(Math.random() * adjectives.length)];
        output += rand + ' ';
      }
      else if (msg.charAt(i) === 'j') {
        var rand = jobs[Math.floor(Math.random() * jobs.length)];
        output += rand + ' ';
      }
      else if (msg.charAt(i) === 'e') {
        var rand = expressions[Math.floor(Math.random() * expressions.length)];
        output += rand + ' ';
      }
      else if (msg.charAt(i) === 'v') {
        var rand = verbs[Math.floor(Math.random() * verbs.length)];
        output += rand + ' ';
      }
      else if (msg.charAt(i) === 's') {
        var rand = strange[Math.floor(Math.random() * strange.length)];
        output += rand + ' ';
      }
      else if (msg.charAt(i) === 'f') {
        var rand = fauna[Math.floor(Math.random() * fauna.length)];
        output += rand + ' ';
      }
      else if (msg.charAt(i) === 'u') {
        var rand = unreals[Math.floor(Math.random() * unreals.length)];
        output += rand + ' ';
      }
      else if (msg.charAt(i) === 'p') {
        var rand = plants[Math.floor(Math.random() * plants.length)];
        output += rand + ' ';
      }
      else if (msg.charAt(i) === 'm') {
        var rand = meals[Math.floor(Math.random() * meals.length)];
        output += rand + ' ';
      }
      else if (msg.charAt(i) === 'o') {
        var rand = objects[Math.floor(Math.random() * objects.length)];
        output += rand + ' ';
      }
      else if (msg.charAt(i) === 'l') {
        var rand = locales[Math.floor(Math.random() * locales.length)];
        output += rand + ' ';
      }
      else if (msg.charAt(i) === 'c') {
        var rand = clothing[Math.floor(Math.random() * clothing.length)];
        output += rand + ' ';
      }
      else if (msg.charAt(i) === 't') {
        var rand = transitive[Math.floor(Math.random() * transitive.length)];
        output += rand + ' ';
      }
    }
    return output;
}
//module exports
//For you Furii, these are needed to import the function on the main rohan.js app.
// node.js doesn't allow imports yet. 
module.exports.hd = hd;
module.exports.sp = sp;
module.exports.dj = dj;
module.exports.ship = ship;
module.exports.fmk = fmk;
module.exports.combined = combined;