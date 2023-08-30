import { User } from "../../models/users";
import { HttpRequest, HttpResponse } from "../protocols";

export interface IDeleteUserContoller {
  handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User>>;
}

export interface IDeleteUserRepository {
  deleteUser(id: string): Promise<User>;
}
