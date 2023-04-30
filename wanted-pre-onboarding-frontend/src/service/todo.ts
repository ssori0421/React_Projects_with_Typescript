import { CreateReq, ITodo, UpdateReq } from '../types/todo';
import { authInstance } from './axios';

const getTodo = async (): Promise<ITodo[]> => {
  const { data } = await authInstance.get('/todos');
  return data;
};

const createTodo = async (body: CreateReq): Promise<ITodo> => {
  const { data } = await authInstance.post('/todos', body);
  return data;
};

const updateTodo = async (id: number, body: UpdateReq): Promise<ITodo> => {
  const { data } = await authInstance.put(`/todos/${id}`, body);
  return data;
};

const deleteTodo = async (id: number) => {
  await authInstance.delete(`/todos/${id}`);
};

export { createTodo, getTodo, updateTodo, deleteTodo };
