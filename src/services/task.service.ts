
import { Task } from "@prisma/client";
import { prisma } from "../lib/client";

const createTask = async (data: Task): Promise<any> => {
  const { title, author, details, status } = data;

  const task = await prisma.task.create({
    data: {
      title,
      author,
      details,
      status,
    },
  });

  return task;
};

const findAllTasks = async (): Promise<Task[]> => {
  const taskList = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return taskList;
};

const updateTask = async (
  id: number,
  data: Partial<Task>
): Promise<any> => {
  const task = await prisma.task.findUnique({ where: { id } });

  if (!task) {
    throw new Error("Tarefa não encontrado");
  }

  if (task) {
    const updatedTask = await prisma.task.update({
      where: { id },
      data,
    });

    return updatedTask;
  }
};

const deleteTask = async (id: number): Promise<any> => {
  const task = await prisma.task.findUnique({ where: { id } });

  if (!task) {
    throw new Error("Curso não encontrado");
  }

  if (task) {
    const deletedTask = await prisma.task.delete({ where: { id } });

    return deletedTask;
  }
};

export default {
  createTask,
  findAllTasks,
  updateTask,
  deleteTask,
};
