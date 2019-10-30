const sqlite3 = require('sqlite3').verbose();
const moment = require('moment');
module.exports = {
  addGift: (guild, user, gift, unique) => {
    let db = new sqlite3.Database('./assets/db/rohan.db', (err) => { if (err) return console.message(err.message + ' db.js'); });
    db.run('UPDATE SantaEntries SET gift = (?) WHERE uniqueid = (?) AND userid = (?) AND guildid = (?);', [gift, unique, user, guild], (err) => {
      if (err) console.log(err);
    });
    db.close((err) => {
      if (err)
        return console.error(err.message + ' close db.js');
    });
  },
  addRequest: (guild, user, request, unique) => {
    let db = new sqlite3.Database('./assets/db/rohan.db', (err) => { if (err) return console.message(err.message + ' db.js'); });
    db.run('UPDATE SantaEntries SET request = ? WHERE uniqueid = ? AND userid = ? AND guildid= ?;', [request, unique, user, guild]);
    db.close((err) => {
      if (err)
        return console.error(err.message + ' close db.js');
    });
  },
  addUser: (guild, user, username) => {
    let db = new sqlite3.Database('./assets/db/rohan.db', (err) => { if (err) return console.message(err.message + ' db.js'); });
    db.get('SELECT uniqueid FROM SecretSanta WHERE guildid = ? AND active = "true";', guild, (err, rows) => {
      if (err) return console.log(err.message);
      db.run('INSERT INTO SantaEntries (uniqueid, userid, guildid, username, received) VALUES (? ,? ,?, ?, "false");', [rows.uniqueid, user, guild, username], (err) => {
        if (err) console.log(err);
      });
    });
    db.close((err) => {
      if (err)
        return console.error(err.message + ' close db.js');
    });
  },
  assignUser: (guild, user, assignedid) => {
    let db = new sqlite3.Database('./assets/db/rohan.db', (err) => { if (err) return console.message(err.message + ' db.js'); });
    db.run('UPDATE SantaEntries SET assigneduserid = ? WHERE guildid = ? AND userid = ?;', [assignedid, guild, user], (err) => {
      if (err) console.log(err);
    });
    db.close((err) => {
      if (err)
        return console.error(err.message + ' close db.js');
    });
  },
  checkGuild: (guild, user) => {
    let db = new sqlite3.Database('./assets/db/rohan.db', (err) => { if (err) return console.message(err.message + ' db.js'); });
    let waitpls = new Promise((resolve, reject) => {
      db.all('SELECT * FROM SecretSanta WHERE guildid = ?;', guild, (err, row) => {
        if (row[row.length - 1] === undefined || row.active === 'false'){
          resolve(true);
        } else if (row[row.length - 1].active === 'true' && row[row.length - 1].userid === user){
          resolve(true);
        } else if (row[row.length - 1].active === 'true' && row[row.length - 1].userid !== user){
          resolve('notCreator');
        } else resolve(false);
      });
    })
      .then((result) => {
        db.close((err) => {
          if (err)
            return console.error(err.message + ' close db.js');
        });
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
    return waitpls;
  },
  end: (guild, message) => {
    let db = new sqlite3.Database('./assets/db/rohan.db', (err) => { if (err) return console.message(err.message + ' db.js'); });
    db.run('UPDATE SecretSanta SET active = "false" WHERE guildid = (?);', guild, (err) => {
      if (err) console.log(err);
    });
    db.close((err) => {
      if (err)
        return console.error(err.message + ' close db.js');
    });
  },
  enddate: (end, guild, user) => {
    let db = new sqlite3.Database('./assets/db/rohan.db', (err) => { if (err) return console.message(err.message + ' db.js'); });
    let waitpls = new Promise((resolve, reject) => {
      db.run('UPDATE SecretSanta SET enddate = ? WHERE guildid = (?) AND userid = (?) AND active = "true";', [end, guild, user], (err) => {
        if (err) console.log(err);
        resolve();
      });
    })
      .then(() => {
        db.close((err) => {
          if (err)
            return console.error(err.message + ' close db.js');
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getAll: (guild, uniqueid) => {
    let db = new sqlite3.Database('./assets/db/rohan.db', (err) => { if (err) return console.message(err.message + ' db.js'); });
    let waitpls = new Promise((resolve, reject) => {
      db.all('SELECT * FROM SantaEntries WHERE guildid = ? AND uniqueid = ?;', [guild, uniqueid], (err, row) => {
        if (err) console.log(err);
        resolve(row);
      });
    })
      .then((result) => {
        db.close((err) => {
          if (err)
            return console.error(err.message + ' close db.js');
        });
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
    return waitpls;
  },
  getAllActiveGuilds: () => {
    let db = new sqlite3.Database('./assets/db/rohan.db', (err) => { if (err) return console.message(err.message + ' db.js'); });
    let waitpls = new Promise((resolve, reject) => {
      db.all('SELECT * FROM SecretSanta WHERE active = "true";', (err, row) => {
        resolve(row);
      });
    })
      .then((result) => {
        db.close((err) => {
          if (err)
            return console.error(err.message + ' close db.js');
        });
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
    return waitpls;
  },
  getAllActiveUsers: (uniqueid) => {
    let db = new sqlite3.Database('./assets/db/rohan.db', (err) => { if (err) return console.message(err.message + ' db.js'); });
    let waitpls = new Promise((resolve, reject) => {
      db.all('SELECT * FROM SantaEntries WHERE uniqueid = ?;', uniqueid, (err, row) => {
        resolve(row);
      });
    })
      .then((result) => {
        db.close((err) => {
          if (err)
            return console.error(err.message + ' close db.js');
        });
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
    return waitpls;
  },
  getRequest: (user, guild, uniqueid) => {
    let db = new sqlite3.Database('./assets/db/rohan.db', (err) => { if (err) return console.message(err.message + ' db.js'); });
    let waitpls = new Promise((resolve, reject) => {
      db.get('SELECT request FROM SantaEntries WHERE userid = ? AND guildid = ? AND uniqueid = ?;', [user, guild, uniqueid], (err, row) => {
        resolve(row);
      });
    })
      .then((result) => {
        db.close((err) => {
          if (err)
            return console.error(err.message + ' close db.js');
        });
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
    return waitpls;
  },
  getSanta: (guild, user) => {
    let db = new sqlite3.Database('./assets/db/rohan.db', (err) => { if (err) return console.message(err.message + ' db.js'); });
    let date = moment().format('YYYY/M/D ha');
    let waitpls = new Promise((resolve, reject) => {
      db.all('SELECT * FROM SecretSanta WHERE guildid = ?;', guild, (err, row) => {
        if (row[row.length - 1] !== undefined && row[row.length - 1].active === 'true'){
          resolve(row[row.length - 1]);
        } else {
          db.run('INSERT INTO SecretSanta (guildid, userid, active, started, sent) VALUES(?, ? , "true", ?, "false");', [guild, user, date], (err, row) => {
            if (err)console.log(err);
            db.all('SELECT * FROM SecretSanta WHERE guildid = ?;', guild, (err, row) => {
              if (row[row.length - 1] !== undefined && row[row.length - 1].active === 'true'){
                resolve(row[row.length - 1]);
              }
            });
          });
        }
      });
    })
      .then((result) => {
        db.close((err) => {
          if (err)
            return console.error(err.message + ' close db.js');
        });
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
    return waitpls;
  },
  getStats: () => {
    let db = new sqlite3.Database('./assets/db/rohan.db', (err) => { if (err) return console.message(err.message + ' db.js'); });
    let waitpls = new Promise((resolve, reject) => {
      db.all('SELECT * FROM CommandUsage;', (err, row) => {
        if (err) console.log(err);
        resolve(row);
      });
    })
      .then((result) => {
        db.close((err) => {
          if (err)
            return console.error(err.message + ' close db.js');
        });
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
    return waitpls;
  },
  getUserInfo: (guild, user) => {
    let db = new sqlite3.Database('./assets/db/rohan.db', (err) => { if (err) return console.message(err.message + ' db.js'); });
    let waitpls = new Promise((resolve, reject) => {
      db.serialize((err) => {
        db.all('SELECT * FROM SantaEntries WHERE guildid = ? AND userid = ?;', [guild, user], (err, row) => {
          if (row[row.length - 1] !== undefined){
            resolve(row[row.length - 1]);
          } else resolve(row);
        });
      });
    })
      .then((result) => {
        db.close((err) => {
          if (err)
            return console.error(err.message + ' close db.js');
        });
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
    return waitpls;
  },
  getUserRequest: () => {
    // TODO: Finish this.
    let db = new sqlite3.Database('./assets/db/rohan.db', (err) => { if (err) return console.message(err.message + ' db.js'); });
    let waitpls = new Promise((resolve, reject) => {
      db.serialize((err) => {
        db.get('SELECT request FROM SantaEntries WHERE guildid = ? AND userid = ? AND uniqueid = ?;', guild, (err, row) => {
          resolve(row);
        });
      });
    })
      .then((result) => {
        db.close((err) => {
          if (err)
            return console.error(err.message + ' close db.js');
        });
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
    return waitpls;
  },
  getUserSanta: (guild, user) => {
    let db = new sqlite3.Database('./assets/db/rohan.db', (err) => { if (err) return console.message(err.message + ' db.js'); });
    let waitpls = new Promise((resolve, reject) => {
      db.serialize((err) => {
        db.all('SELECT * FROM SecretSanta WHERE guildid = ?;', guild, (err, row) => {
          if (row[row.length - 1] !== undefined && row[row.length - 1].active === 'true'){
            resolve(row[row.length - 1]);
          } else resolve(row);
        });
      });
    })
      .then((result) => {
        db.close((err) => {
          if (err)
            return console.error(err.message + ' close db.js');
        });
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
    return waitpls;
  },
  informDelete: (guild, unique) => {
    let db = new sqlite3.Database('./assets/db/rohan.db', (err) => { if (err) return console.message(err.message + ' db.js'); });
    let waitpls = new Promise((resolve, reject) => {
      db.all('SELECT * FROM SantaEntries WHERE uniqueid = ?;', unique, (err, rows) => {
        if (err) return console.log(err.message);
        resolve(rows);
      });
    })
      .then((result) => {
        db.close((err) => {
          if (err)
            return console.error(err.message + ' close db.js');
        });
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
    return waitpls;
  },
  removeUser: (guild, user, unique) => {
    let db = new sqlite3.Database('./assets/db/rohan.db', (err) => { if (err) return console.message(err.message + ' db.js'); });
    db.run('DELETE FROM SantaEntries WHERE uniqueid = ? AND userid = ? AND guildid = ? ;', [unique, user, guild], (err) => {
      if (err) return console.log(err.message);
    });
    db.close((err) => {
      if (err)
        return console.error(err.message + ' close db.js');
    });
  },
  startDate: (start, guild, user, name) => {
    let date = moment(start, 'YYYY/M/D ha').subtract(1, 'd').format('YYYY/M/D ha');
    let enddate = moment(start, 'YYYY/M/D ha').add(7, 'd').format('YYYY/M/D ha');
    let db = new sqlite3.Database('./assets/db/rohan.db', (err) => { if (err) return console.message(err.message + ' db.js'); });
    db.run('UPDATE SecretSanta SET startdate = ?, cutoff = ?, enddate = ?, ownername = ? WHERE guildid = (?) AND userid = (?) AND active = "true";', [start, date, enddate, name, guild, user], (err) => {
      if (err) console.log(err);
    });
    db.close((err) => {
      if (err)
        return console.error(err.message + ' close db.js');
    });
  },
  updateCommand: (name) => {
    let result = 0;
    let db = new sqlite3.Database('./assets/db/rohan.db', (err) => { if (err) return console.message(err.message + ' db.js'); });
    let waitpls = new Promise((resolve, reject) => {
      db.get('SELECT uses FROM CommandUsage WHERE command = ?;', name, (err, row) => {
        if (err) return console.message(err.message + ' db.js');
        else if (row.uses === undefined || row.uses === null)
          row.uses = 0;
        result = parseInt(row.uses);
        resolve(result += 1);
      });
    })
      .then((result) => {
        db.run('UPDATE CommandUsage SET uses = ? WHERE command = ?;', [result, name]);
      })
      .then(() => {
        db.close((err) => {
          if (err)
            return console.error(err.message + ' close db.js');
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateRules: (rule, guild, user) => {
    let db = new sqlite3.Database('./assets/db/rohan.db', (err) => { if (err) return console.message(err.message + ' db.js'); });
    let waitpls = new Promise((resolve, reject) => {
      db.run('UPDATE SecretSanta SET rules = ? WHERE guildid = (?) AND userid = (?) AND active = "true";', [rule, guild, user], (err) => {
        if (err) console.log(err);
        resolve();
      });
    })
      .then(() => {
        db.close((err) => {
          if (err)
            return console.error(err.message + ' close db.js');
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  userLeave: (guild, user) => {
    let db = new sqlite3.Database('./assets/db/rohan.db', (err) => { if (err) return console.message(err.message + ' db.js'); });
    db.get('SELECT uniqueid FROM SecretSanta WHERE guildid = ? AND active = "true";', guild, (err, rows) => {
      if (err) return console.log(err.message);
      db.run('DELETE FROM SantaEntries WHERE userid = ? AND uniqueid = ?;', [user, rows.uniqueid], (err) => {
        if (err) console.log(err);
      });
    });
    db.close((err) => {
      if (err)
        return console.error(err.message + ' close db.js');
    });
  },
};

