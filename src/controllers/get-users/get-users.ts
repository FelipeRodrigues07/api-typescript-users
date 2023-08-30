import { User } from "../../models/users";
import { ok, serverError } from "../helpers";
import { HttpResponse, IController } from "../protocols";
import { IGetUsersRepository } from "./protocols"; //controls que chama o repository

export class GetUsersController implements IController {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {} //esse que vai conectar com o mongoDb conectar ao repository

  async handle(): Promise<HttpResponse<User[] | string>> {
    try {
      const users = await this.getUsersRepository.getUsers(); //nosso primeiro controller, pegar nossa lista de usuario

      return ok<User[]>(users);
    } catch (error) {
      return serverError();
    }
  }
}
