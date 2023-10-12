import { UserRepository } from '../repository/user.repository';
import { GetUsersOptions, UpdateUsersStatusDataItem } from '../repository/types';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
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
}
