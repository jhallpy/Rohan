'use strict';
module.exports = {
  // Checks for User ID.
  checkUsers: (message) => {
    if (message.mentions.users.map(u => u.id).length > 1)
      return true;
    else
      return false;
  },
  // Only checks for User IDs to run a different set of instructions.
  checkTwoID: (message) => {
    if (message.mentions.users.map(u => u.id).length === 2)
      return true;
    else
      return false;
  },
  checkRohan: (client, message) => {
    // Must stay as loose comparison, one is string one is int.
    if (message.mentions.users.map(u => u.id) === client.user.id)
      return true;
    else
      return false;
  },
  randomInArray: (array) => {
    return array[Math.floor(Math.random() * array.length)];
  },
  shuffleArray: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
  derange: (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * i); // no +1 here!
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  },
};
