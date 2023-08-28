import { IGetUsersController, IGetUsersRepository } from "./protocols";

export class GetUsersController implements IGetUsersController {
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
