// use js modules to programmatically manipulate fixture data
const UsetObjectId = require('mongodb').ObjectID;
const GroupObjectId = require('mongodb').ObjectID;

const groups = [
  {
    _id: GroupObjectId('4ed2b809d7446b9a0e000014'),
    name: 'Group 1',
    status: 'notEmpty',
  },
];

module.exports = [
  {
    _id: UsetObjectId('6528231e41fc6a87000c1337'),
    name: 'Carmine',
    email: 'carmine@gmail.com',
    status: 'active',
    group: groups[0]._id,
  },
  {
    _id: UsetObjectId('6528237741fc6a87000c133a'),
    name: 'Jimmy',
    email: 'jimmy@gmail.com',
    status: 'pending',
    group: groups[0]._id,
  },
  {
    _id: UsetObjectId('6528238141fc6a87000c133b'),
    name: 'Henry',
    email: 'henry@gmail.com',
    status: 'blocked',
  },
  {
    _id: UsetObjectId('6528238a41fc6a87000c133c'),
    name: 'Samanta',
    email: 'samanta@gmail.com',
    status: 'active',
  },
  {
    _id: UsetObjectId('6528239741fc6a87000c133d'),
    name: 'John',
    email: 'john@gmail.com',
    status: 'active',
  },
];
