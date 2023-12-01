import express from "express";
const router = express.Router();
import UserController from "../controllers/user-controller.js";
import TeamController from "../controllers/team-controller.js";

// Users ----->
router.post("/users", UserController.addUser);
router.get("/users", UserController.getUsers);
router.get("/users/:id", UserController.getDetails);
router.put("/users/:id", UserController.editUser);
router.delete("/users/:id", UserController.deleteUser);

// Teams ------>
router.post("/team", TeamController.addTeam);
router.get("/team/:id", TeamController.getTeam);

export default router;
