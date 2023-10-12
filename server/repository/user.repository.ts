import mongoose from 'mongoose';
import { connect, disconnect } from '../config/db.config';
import { IUser, UserModel } from '../models/user.model';
import { GetUsersOptions, UpdateUsersStatusDataItem } from './types';

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

  async updateUsersStatus(userData: Array<UpdateUsersStatusDataItem>) {
    const userDataByStatus = userData.reduce((acc, dataItem: UpdateUsersStatusDataItem) => {
      const id = new mongoose.Types.ObjectId(dataItem.id);
      const status = dataItem.status;

      if (!acc[status]) {
        acc[status] = [id];
      }

      if (!acc[status].includes(id)) {
        acc[status].push(id);
      }

      return acc;
    }, {});

    // console.log('userDataByStatus: ', userDataByStatus);

    const statusesToUpdate = Object.keys(userDataByStatus);

    for (const status of statusesToUpdate) {
      try {
        await UserModel.updateMany(
          {
            _id: {
              $in: userDataByStatus[status],
            },
          },
          { status }
        );
      } catch (err) {
        console.log('Error updating: ', err);
      }
    }

    return userData;
  }
}
