import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');

import { UserController } from './controllers/user.controller';

// start loading mock data
// NOTE: Pls uncomment the import and runFixture() code below, save and run only once
// to load appropriate data into the database
import { runFixture } from './common/mock';
runFixture();
// end mock data

class App {
  express: express.Application;
  userController: UserController;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.userController = new UserController();
  }

  // Configure Express middleware.
  private middleware(): void {
    const corsOptions = {
      origin: '*',
      credentials: true, //access-control-allow-credentials:true
      optionSuccessStatus: 200,
    };

    this.express.use(cors(corsOptions));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    // For health check:
    this.express.get('/healthcheck', (req, res, next) => {
      res.send('Ok!');
    });

    this.express.get('/api/users', (req, res, next) => {
      this.userController.getUsers(req, res, next);
    });

    this.express.get('/api/users/by-field', (req, res, next) => {
      this.userController.getUsersByField(req, res, next);
    });

    this.express.put('/api/users/statuses', (req, res, next) => {
      this.userController.updateUsersStatus(req, res, next);
    });

    this.express.delete('/api/user/:id/group/:groupId', (req, res, next) => {
      // this.userController.deleteUserFromGroup(req, res, next);
    });

    // handle undefined routes
    this.express.use('*', (req, res, next) => {
      res.status(404).send('Not found');
    });
  }
}

export default new App().express;
