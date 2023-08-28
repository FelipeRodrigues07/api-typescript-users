import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/users";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Felipe",
        lastName: "Rocha",
        email: "felipe@gmail.com",
        password: "123",
      },
    ];
  }
} //quiser mudar o banco de dados
