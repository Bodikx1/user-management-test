// use js modules to programmatically manipulate fixture data
const ObjectId = require('mongodb').ObjectID;

module.exports = [
  {
    _id: ObjectId('4ed2b809d7446b9a0e000014'),
    name: 'Group 1',
    status: 'notEmpty',
    users: [ObjectId('6528231e41fc6a87000c1337'), ObjectId('6528237741fc6a87000c133a')],
  },
];
