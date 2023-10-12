import { UserRepository } from '../repository/user.repository';
import { GetUsersOptions } from '../repository/types';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async getUsers(options: GetUsersOptions) {
    return await this.userRepository.getUsers(options);
  }
}
