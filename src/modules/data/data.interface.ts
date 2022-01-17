export interface ICreateData {
  content: string;
}

export interface IUpdateData {
  _id: string;
  content: string;
  locked?: boolean;
}
