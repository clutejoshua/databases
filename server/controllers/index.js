var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get((err, result) => {
        if (err) {
          throw err;
        }

        res.json(result);
        res.send();
      });
    },

    post: function (req, res) {
      var message = req.body;
      console.log('post message var', message);
      models.messages.post(message, (err, result) => {
        if (err) {
          throw err;
        }

      });
      res.end();

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, result) => {
        if (err) {
          throw err;
        }
        res.send(result);
      });
    },

    post: function (req, res) {
      models.users.post((err, result) => {
        if (err) {
          throw err;
        }
      });
      res.end();
    }
  }
};

