const session = require('smartux-connect');
session.transform.version6testing = session.loadTransform('version6testing');
require('./client');
session.start();