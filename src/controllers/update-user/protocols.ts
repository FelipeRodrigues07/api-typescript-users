import { User } from "../../models/users";

export interface UpdateUserParams {
  firstName?: string; //?como opcional pode so passar um
  lastName?: string;
  password?: string;
}

export interface IUpdateUserRepository {
  updateUser(id: string, params: UpdateUserParams): Promise<User>;
}
