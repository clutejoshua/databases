var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      let sql = 'SELECT * FROM messages';
      db.query(sql, function (err, result) {
        if (err) {
          throw err;
        } else {
          callback(result);
        }
      });
    },
    // a function which can be used to insert a message into the database
    post: function (params, callback) {
      let sql = `INSERT INTO messages (username, messages, roomname) VALUES (${params})`;
      db.query(sql, function (err, result) {
        if (err) {
          throw err;
        } else {
          callback(result);
        }
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      let sql = 'SELECT * FROM users';
      db.query(sql, function (err, result) {
        if (err) {
          throw err;
        } else {
          callback(result);
        }
      });
    },

    post: function (params, callback) {
      let sql = `INSERT INTO users (username) VALUES (${params})`;
      db.query(sql, function (err, result) {
        if (err) {
          throw err;
        } else {
          callback(result);
        }
      });
    }
  }
};

