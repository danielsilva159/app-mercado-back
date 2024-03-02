import { Router } from "express";
import usersRouter from "../../../modules/users/routes/users.router";

const router = Router();

router.use("/users", usersRouter);
router.get("/", () => {
  console.log("entrou");
});

export default router;
