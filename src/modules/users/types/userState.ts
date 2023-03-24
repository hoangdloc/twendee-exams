import { IUser } from './user';

export interface IUserState {
  users: IUser[]
  loading: boolean
}
