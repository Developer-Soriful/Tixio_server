import app from "../app";
import { usersController } from "../controllers/users.controller";
import { getUsersQuerySchema } from "../dtos/users.dto";
import { validate } from "../middlewares/validate.middleware";
// FOR USER
app.get("/", validate(getUsersQuerySchema), usersController.getUsers);

// FOR PARTICULAR USER
app.get("/:id", usersController.getUserById);

// FOR USER CRETE
app.post("/", usersController.createUser);

// USER EDIT
app.patch("/:id", usersController.updateUser);

// USER DELETE
app.delete("/:id", usersController.deleteUser);

// TOOGGLE ACTIVE
app.patch("/:id/toggle-active", usersController.toggleActive);

// CHANGGE PASSWORD
app.post("/:id/change-password", usersController.changePassword);

export default app;
