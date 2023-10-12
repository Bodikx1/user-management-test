import { connect, disconnect } from '../config/db.config';
import { GroupModel } from '../models/group.model';
import { IGroup } from './types';

export class GroupRepository {
  constructor() {
    connect();
  }

  async update(groupId: string, data: IGroup) {
    const result = await GroupModel.updateOne({ _id: groupId }, data);
    return result;
  }

  async removeUserFromGroup(groupId: string, userId: string) {
    const group = await GroupModel.findById(groupId);
    let groupUsers = (group?.users || []) as any;

    if (groupUsers.toString().includes(userId)) {
      groupUsers = groupUsers.filter((user) => user?._id?.toString() !== userId);
    }

    // Remove the user from list of users
    group.users = groupUsers;

    if (!group.users.length) {
      group.status = 'empty';
    }

    const result = await GroupModel.updateOne({ _id: groupId }, group);
    return result;
  }
}
