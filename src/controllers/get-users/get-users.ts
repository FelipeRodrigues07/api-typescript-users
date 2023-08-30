import { IController } from "../protocols";
import { IGetUsersRepository } from "./protocols"; //controls que chama o repository

export class GetUsersController implements IController {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {} //esse que vai conectar com o mongoDb conectar ao repository

  async handle() {
    try {
      const users = await this.getUsersRepository.getUsers(); //nosso primeiro controller, pegar nossa lista de usuario

      return {
        statusCode: 200,
        body: users,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong.",
      };
    }
  }
}
