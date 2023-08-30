import { User } from "../../models/users";
import { badRequest, ok, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IDeleteUserRepository } from "./protocols";

export class DeleteUserController implements IController {
  constructor(private readonly deleteUserRepository: IDeleteUserRepository) {}

  async handle(
    httpRequest: HttpRequest<any>
  ): Promise<HttpResponse<User | string>> {
    try {
      const id = httpRequest?.params?.id; //ponto de interrogação pois pode ser undefined

      if (!id) {
        return badRequest("Missing user id");
      }

      const user = await this.deleteUserRepository.deleteUser(id);
      return ok<User>(user);
    } catch (error) {
      return serverError();
    }
  }
}
