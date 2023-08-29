import validator from "validator";

import { User } from "../../models/users";
import { HttpRequest, HttpResponse } from "../protocols";
import {
  CreateUserParams,
  ICreateUserRepository,
  IcreteUserController,
} from "./protocols";

export class CreateUserController implements IcreteUserController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handle(
    httpRequest: HttpRequest<CreateUserParams>
  ): Promise<HttpResponse<User>> {
    try {
      //verificar campos obrigatorios
      const requiredFields = ["firstName", "lastName", "email", "password"];

      for (const field of requiredFields) {
        //para cada campo que os campos são obrigatorios, se não for enviado dar erro
        if (!httpRequest?.body?.[field as keyof CreateUserParams]?.length) {
          //se eler for undefined não da erro
          return {
            statusCode: 400,
            body: `Field ${field} is required`,
          };
        } //se passa do if todos os campos ja existe
      }

      //verificar se o email é evalido
      const emailIsValid = validator.isEmail(httpRequest.body!.email);

      if (!emailIsValid) {
        return {
          statusCode: 400,
          body: "E-mail is invalid",
        };
      }

      //validaer se body existe
      if (!httpRequest.body!) {
        return {
          statusCode: 400,
          body: "Please specify a body",
        };
      }

      const user = await this.createUserRepository.createUser(httpRequest.body);
      return {
        statusCode: 201,
        body: user,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}