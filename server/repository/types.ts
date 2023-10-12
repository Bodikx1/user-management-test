export interface GetUsersOptions {
  pagination?: { pageNumber: number; perPage: number };
  filterBy?: { fieldName: string; fieldValue: string };
}
