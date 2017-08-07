'use strict';

module.exports = {
  description: 'Prosody authentication check for bot sessions',
  tags: ['api', 'prosody', 'auth'],
  handler: function (request, reply) {

    return reply('true').type('text/plain').code(200);
  },
  //TODO response swagger
  auth: 'prosody-bots'
};

