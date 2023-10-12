import { connect, disconnect } from '../config/db.config';
import { IUser, UserModel } from '../models/user.model';
import { GetUsersOptions } from './types';

export class UserRepository {
  constructor() {
    connect();
  }

  async getUsers(options: GetUsersOptions) {
    const { pagination } = options;
    const limit = pagination?.perPage || 0;
    const skip = (pagination?.pageNumber - 1) * limit || 0;

    const users = await UserModel.find().skip(skip).limit(limit);

    return users;
  }

  async getAllUsersByField(options: GetUsersOptions) {
    const { filterBy } = options;
    const fieldName = filterBy?.fieldName || 'name';
    const fieldValue = filterBy?.fieldValue || '';

    const users = await UserModel.find({ [fieldName]: { $regex: fieldValue, $options: 'i' } });

    return users;
  }
}
