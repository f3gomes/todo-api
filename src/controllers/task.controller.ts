import taskService from "../services/task.service";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { Task } from "@prisma/client";

const create = async (
  req: Request,
  res: Response
): Promise<Task | any> => {
  try {
    const task = await taskService.createTask(req.body);

    return res.status(StatusCodes.CREATED).json({ task });
  } catch (error: any) {
    const errorMessages = error.message.split("\n");
    const lastErrorMessage = errorMessages[errorMessages.length - 1];

    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: lastErrorMessage });
    console.log(error);
  }
};

const findAll = async (
  req: Request,
  res: Response
): Promise<Task[] | any> => {
  try {
    const tasks = await taskService.findAllTasks();

    return res.status(StatusCodes.OK).json({ tasks });
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    console.log(error);
  }
};

const update = async (
  req: Request,
  res: Response
): Promise<Task[] | any> => {
  try {
    const updatedTask = await taskService.updateTask(
      Number(req.params.id),
      req.body
    );

    return res.status(StatusCodes.OK).json({ updatedTask });
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    console.log(error);
  }
};

const remove = async (
  req: Request,
  res: Response
): Promise<Task[] | any> => {
  try {
    const deletedTask = await taskService.deleteTask(Number(req.params.id));

    return res.status(StatusCodes.OK).json({ deletedTask });
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    console.log(error);
  }
};

export default {
  create,
  findAll,
  update,
  remove,
};
