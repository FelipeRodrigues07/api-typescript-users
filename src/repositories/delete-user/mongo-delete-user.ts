import { ObjectId } from "mongodb";
import { IDeleteUserRepository } from "../../controllers/delete-user/protocols";
import { MongoClient } from "../../database/mongo";
import { User } from "../../models/users";

export class MongoDeleteUserRepository implements IDeleteUserRepository {
  async deleteUser(id: string): Promise<User> {
    const user = await MongoClient.db
      .collection<Omit<User, "id">>("users")
      .findOne({ _id: new ObjectId(id) });

    if (!user) {
      throw new Error("user not found");
    }

    const { deletedCount } = await MongoClient.db
      .collection("users")
      .deleteOne({ _id: new ObjectId(id) });
    if (!deletedCount) {
      throw new Error("User not deleted"); //se o usuario não foi deletado
    }

    const { _id, ...rest } = user;

    return { id: _id.toHexString(), ...rest };
  }
}
