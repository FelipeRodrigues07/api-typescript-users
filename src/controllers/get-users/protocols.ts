import { User } from "../../models/users";
import { HttpResponse } from "../protocols";

export interface IGetUsersController {
  handle(): Promise<HttpResponse<User[]>>; //retorna uma lista de usuarios
}

export interface IGetUsersRepository {
  getUsers(): Promise<User[]>; //codigo assicrone array lista de usuarios //retornar lista de usuarios
}
