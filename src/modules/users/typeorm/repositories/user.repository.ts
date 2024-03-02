import { AppDataSource } from "../../../../shared/typeorm";
import User from "../entities/user";

export const UserRepository = AppDataSource.getRepository(User).extend({
  findByName(name: string) {
    return this.createQueryBuilder("user")
      .where("user.name = :name", { name })
      .getMany();
  },

  findByEmail(email: string) {
    return this.createQueryBuilder("user")
      .where("user.email = :email", { email })
      .getMany();
  },
});
