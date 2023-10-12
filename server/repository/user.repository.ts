import { connect, disconnect } from '../config/db.config';
import { IUser, UserModel } from '../models/user.model';
import { GetUsersOptions } from './types';

export class UserRepository {
  constructor() {
    connect();
  }

  async getUsers(options: GetUsersOptions) {
    const { pagination } = options;
    let users = [];

    users = await UserModel.find();
    return users;
  }
}
