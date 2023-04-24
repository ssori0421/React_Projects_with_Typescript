import { authInstance } from './axios';

const getTodo = async () => {
  const { data } = await authInstance.get('/todos');
  return data;
};

const createTodo = async (body) => {
  const { data } = await authInstance.post('/todos', body);
  return data;
};

const updateTodo = async (id, body) => {
  const { data } = await authInstance.put(`/todos/${id}`, body);
  return data;
};

const deleteTodo = async (id) => {
  await authInstance.delete(`/todos/${id}`);
};

export { createTodo, getTodo, updateTodo, deleteTodo };
