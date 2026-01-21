import app from "../app";
import { usersController } from "../controllers/users.controller";
import { getUsersQuerySchema, userIdParamSchema } from "../dtos/users.dto";
import { validate } from "../middlewares/validate.middleware";

app.get("/", validate(getUsersQuerySchema), usersController.getUsers);

app.get("/:id", validate(userIdParamSchema), usersController.getUserById);

app.post("/", usersController.createUser);

app.patch("/:id", usersController.updateUser);

app.delete("/:id", usersController.deleteUser);

app.patch(
  "/:id/toggle-active",
  validate(userIdParamSchema),
  usersController.toggleActive,
);

app.post("/:id/change-password", usersController.changePassword);

export default app;
