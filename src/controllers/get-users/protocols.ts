import { User } from "../../models/users";

export interface IGetUsersRepository {
  getUsers(): Promise<User[]>; //codigo assicrone array lista de usuarios //retornar lista de usuarios
}
