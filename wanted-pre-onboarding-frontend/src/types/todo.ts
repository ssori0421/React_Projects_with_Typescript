export interface ITodo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

// export interface ICreateTodoReq {
//   todo: string;
// }

// export interface IUpdateReq {
//   todo: string;
//   isCompleted: boolean;
// }

export type CreateReq = Pick<ITodo, 'todo'>;
export type UpdateReq = Pick<ITodo, 'todo' | 'isCompleted'>;
