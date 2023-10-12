import { UserRepository } from '../repository/user.repository';
import { GroupRepository } from '../repository/group.repository';
import { GetUsersOptions, UpdateUsersStatusDataItem } from '../repository/types';

export class UserService {
  private userRepository: UserRepository;
  private groupRepository: GroupRepository;

  constructor() {
    this.userRepository = new UserRepository();
    this.groupRepository = new GroupRepository();
  }

  async getUsers(options: GetUsersOptions) {
    return await this.userRepository.getUsers(options);
  }

  async getUsersByField(options: GetUsersOptions) {
    return await this.userRepository.getAllUsersByField(options);
  }

  async updateUsersStatus(userData: Array<UpdateUsersStatusDataItem>) {
    return await this.userRepository.updateUsersStatus(userData);
  }

  async deleteUserFromGroup(userId: string, groupId: string) {
    let result = null;
    try {
      result = await this.userRepository.deleteUserFromGroup(userId, groupId);
      // console.log('deleteUserFromGroup: ', result);
      result = await this.groupRepository.removeUserFromGroup(groupId, userId);
      // console.log('removeUserFromGroup: ', result);
    } catch (err) {
      console.log(err);
      throw new Error('Failed to delete user from group');
    }
    return result;
  }
}
