// use js modules to programmatically manipulate fixture data
const ObjectId = require('mongodb').ObjectID;

module.exports = [
  {
    _id: ObjectId(),
    name: 'Carmine',
    email: 'carmine@gmail.com',
    status: 'active',
  },
  {
    _id: ObjectId(),
    name: 'Jimmy',
    email: 'jimmy@gmail.com',
    status: 'pending',
  },
  {
    _id: ObjectId(),
    name: 'Henry',
    email: 'henry@gmail.com',
    status: 'blocked',
  },
  {
    _id: ObjectId(),
    name: 'Samanta',
    email: 'samanta@gmail.com',
    status: 'active',
  },
  {
    _id: ObjectId(),
    name: 'John',
    email: 'john@gmail.com',
    status: 'active',
  },
];
