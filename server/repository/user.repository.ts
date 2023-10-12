import { connect, disconnect } from '../config/db.config';
import { UserModel } from '../models/user.model';
import { GetUsersOptions, UpdateUsersStatusDataItem } from './types';

export class UserRepository {
  constructor() {
    connect();
  }

  async getUsers(options: GetUsersOptions) {
    const { pagination } = options;
    const limit = pagination?.perPage || 0;
    const skip = (pagination?.pageNumber - 1) * limit || 0;

    const users = await UserModel.find().populate('group').skip(skip).limit(limit);

    return users;
  }

  async getAllUsersByField(options: GetUsersOptions) {
    const { filterBy } = options;
    const fieldName = filterBy?.fieldName || 'name';
    const fieldValue = filterBy?.fieldValue || '';

    const users = await UserModel.find({ [fieldName]: { $regex: fieldValue, $options: 'i' } }).populate('group');

    return users;
  }

  async updateUsersStatus(userData: Array<UpdateUsersStatusDataItem>) {
    const userDataByStatus = userData.reduce((acc, dataItem: UpdateUsersStatusDataItem) => {
      const id = dataItem.id;
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

  async deleteUserFromGroup(userId: string, groupId: string) {
    const user = await UserModel.findById(userId).populate('group').exec();
    const group = user.group as any;

    if (group?._id?.toString() !== groupId) {
      throw new Error('No such group');
    }

    // unset user group
    user.group = null;

    const result = await UserModel.updateOne({ _id: userId }, user);

    return result;
  }
}
