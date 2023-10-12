export interface IUser extends Document {
  name: string;
  email: string;
  status: 'active' | 'pending' | 'blocked';
  group?: IGroup | null;
}

export interface IGroup extends Document {
  name: string;
  status: 'empty' | 'notEmpty';
  users: Array<IUser>;
}

export interface GetUsersOptions {
  pagination?: { pageNumber: number; perPage: number };
  filterBy?: { fieldName: string; fieldValue: string };
}

export interface UpdateUsersStatusDataItem {
  id: string;
  status: IUser['status'];
}
