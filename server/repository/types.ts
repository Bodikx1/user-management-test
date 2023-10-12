export interface GetUsersOptions {
  pagination?: { pageNumber: number; perPage: number };
  filterBy?: { fieldName: string; fieldValue: string };
}

export interface UpdateUsersStatusDataItem {
  id: string;
  status: string;
}
