import { Request, Response, NextFunction } from 'express';

import { UserService } from '../services/user.service';

import handleResponse from '../common/response';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async getUsers(req: Request, res: Response, next: NextFunction): Promise<any> {
    const pageNumber = Number(req.query?.pageNumber) || 1;
    const perPage = Number(req.query?.perPage) || 1;

    const users = await this.userService.getUsers({ pagination: { pageNumber, perPage } });

    return handleResponse(res, 200, 'Users retrieved successfully', {
      users,
    });
  }
}
