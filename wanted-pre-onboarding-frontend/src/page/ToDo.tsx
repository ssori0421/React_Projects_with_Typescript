import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import useRedirect from '../hooks/useRedirect';
import PageLayout from '../components/PageLayout';
import styled from 'styled-components';
import { createTodo, deleteTodo, getTodo, updateTodo } from '../service/todo';
import TodoItem from '../components/TodoItem';
import { palette } from '../styles/palette';
import { ITodo } from '../types/todo';

const ToDo = () => {
  const [todoList, setTodoList] = useState<ITodo[]>();
  const [todoInput, setTodoInput] = useState<string>('');
  useRedirect();

  const getTodoList = useCallback(async () => {
    const data = await getTodo();
    setTodoList(data);
  }, []);

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  const onSubmitTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      todo: todoInput,
    };
    try {
      const data = await createTodo(body);
      setTodoInput('');
      if (todoList) {
        setTodoList([...todoList, data]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onUpdateTodo = async (
    id: number,
    todo: string,
    isCompleted: boolean
  ) => {
    const body = {
      todo,
      isCompleted,
    };
    await updateTodo(id, body);
    if (todoList) {
      const updatedTodoList = todoList.map((item) => {
        if (item.id === id) {
          return { ...item, todo, isCompleted };
        }
        return item;
      });
      setTodoList(updatedTodoList);
    }
  };

  const onDeleteTodo = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    try {
      await deleteTodo(id);
      if (todoList) {
        const filteredTodo = todoList.filter((todo) => todo.id !== id);
        setTodoList(filteredTodo);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  return (
    <PageLayout title={'Todo'}>
      <StTodoContainer>
        <StFormContainer onSubmit={onSubmitTodo}>
          <StInput
            data-testid='new-todo-input'
            value={todoInput}
            onChange={onChangeInputHandler}
          />
          <StTodoButton data-testid='new-todo-add-button' type='submit'>
            추가
          </StTodoButton>
        </StFormContainer>
        <StTodoListContainer>
          <StUl>
            {todoList &&
              todoList.map((v) => (
                <TodoItem
                  key={v.id}
                  value={v}
                  onDeleteTodo={onDeleteTodo}
                  onUpdateTodo={onUpdateTodo}
                />
              ))}
          </StUl>
        </StTodoListContainer>
      </StTodoContainer>
    </PageLayout>
  );
};

export default ToDo;

const StTodoContainer = styled.div`
  width: 380px;
`;
const StFormContainer = styled.form`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;
const StInput = styled.input`
  padding: 8px 15px 9px;
  width: 280px;
  border-bottom: 1px solid ${palette.black};
`;
const StUl = styled.ul`
  margin-top: 16px;
`;

const StTodoListContainer = styled.div`
  padding: 8px;
`;
const StTodoButton = styled.button`
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 4px;
  background-color: ${palette.mainColor};
  color: ${palette.white};
  border: none;
  width: 60px;
`;
