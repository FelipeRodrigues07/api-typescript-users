import {
  CreateUserParams,
  ICreateUserRepository,
} from "../../controllers/create-users/protocols";
import { MongoClient } from "../../database/mongo";
import { User } from "../../models/users";
import { MongoUser } from "../mongo-protocols";

export class MongoCreateUserRepository implements ICreateUserRepository {
  async createUser(params: CreateUserParams): Promise<User> {
    const { insertedId } = await MongoClient.db //criando usuario
      .collection("users")
      .insertOne(params);

    const user = await MongoClient.db //buscando usuario
      .collection<MongoUser>("users")
      .findOne({ _id: insertedId });

    if (!user) {
      throw new Error("User not created"); //se ele não for criado vai dar um erro
    }

    const { _id, ...rest } = user;

    return { id: _id.toHexString(), ...rest }; //retorna sem erro
  }
}
