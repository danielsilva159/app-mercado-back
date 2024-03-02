import { Request, Response } from "express";
import CreateUserService from "../services/createUser.service";
export default class UserController {
  public async create(request: Request, response: Response) {
    console.log(request.body);

    const { name, email, password } = request.body;
    const createUser = new CreateUserService();
    const user = await createUser.execute({ name, email, password });
    return response.json(user);
  }
}
