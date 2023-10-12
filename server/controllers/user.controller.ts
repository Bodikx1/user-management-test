import { Request, Response, NextFunction } from 'express';

import { UserService } from '../services/user.service';

import handleResponse from '../common/response';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async getUsers(req: Request, res: Response, next: NextFunction): Promise<any> {
    const perPage = Number(req.query?.perPage) || 5;
    const pageNumber = Number(req.query?.pageNumber) || 1;

    const users = await this.userService.getUsers({ pagination: { pageNumber, perPage } });

    return handleResponse(res, 200, 'Users retrieved successfully', {
      users,
    });
  }

  async getUsersByField(req: Request, res: Response, next: NextFunction): Promise<any> {
    const filterByField = req.query?.filterByField?.toString() || '';
    const filterValue = req.query?.filterValue?.toString() || '';

    const users = await this.userService.getUsersByField({
      filterBy: { fieldName: filterByField, fieldValue: filterValue },
    });

    return handleResponse(res, 200, 'Users retrieved successfully', {
      users,
    });
  }

  async updateUsersStatus(req: Request, res: Response, next: NextFunction): Promise<any> {
    const userData = req.body || [];

    const users = await this.userService.updateUsersStatus(userData);

    return handleResponse(res, 200, 'Users status updated successfully', {
      users,
    });
  }

  async deleteUserFromGroup(req: Request, res: Response, next: NextFunction): Promise<any> {
    const { userId, groupId } = req.params;

    await this.userService.deleteUserFromGroup(userId, groupId);

    return handleResponse(res, 200, 'User was successfully deleted from group', {});
  }
}
