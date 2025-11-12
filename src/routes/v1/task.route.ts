import express from "express";
import taskController from "../../controllers/task.controller";
import { validateData } from "../../middlewares/validation";
import { taskSchema } from "../../schema/task.schema";

export const taskRouter = express.Router();

taskRouter.get("/task/list", taskController.findAll);
taskRouter.post("/task/new", validateData(taskSchema), taskController.create);
taskRouter.patch("/task/edit/:id", taskController.update);
taskRouter.delete("/task/delete/:id", taskController.remove);
