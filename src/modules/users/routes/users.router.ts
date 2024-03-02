import { Router } from "express";
import { Joi, Segments, celebrate } from "celebrate";
import UserController from "../controller/user.controller";

const usersRouter = Router();
const userController = new UserController();

usersRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  userController.create
);

export default usersRouter;
