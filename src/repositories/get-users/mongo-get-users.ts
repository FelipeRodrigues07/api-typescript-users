import { IGetUsersRepository } from "../../controllers/get-users/protocols"; //classe que implementa o repository e pega os usuarios do mongoDb
import { MongoClient } from "../../database/mongo";
import { User } from "../../models/users";
import { MongoUser } from "../mongo-protocols";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    const users = await MongoClient.db
      .collection<MongoUser>("users") //tira o id remove a propriedade da interface
      .find({})
      .toArray(); //vai pegar todos dados

    return users.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
} //quiser mudar o banco de dados
