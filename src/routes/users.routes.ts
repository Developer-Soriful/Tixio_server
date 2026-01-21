import app from "../app";
import { usersController } from "../controllers/users.controller";

// FOR USER
app.get("/", usersController.getUsers);

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
