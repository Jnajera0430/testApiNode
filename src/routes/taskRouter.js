import { Router } from "express";
import { deleteTask, getTask, patchTask, postTask } from "../controllers/task/taskController.js";
const taskRouter = Router();

taskRouter.get('',getTask);
taskRouter.post('',postTask);
taskRouter.patch(':id',patchTask);
taskRouter.delete(':id',deleteTask);

export default taskRouter;