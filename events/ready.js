module.exports = client => {
  console.log(`I, ${client.user.username}, am ready.`);
  client.user.setActivity('~help');
};
