import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { palette } from '../styles/palette';
import SmallButton from './SmallButton';
import { ITodo } from '../types/todo';

const TodoItem = ({
  value,
  onDeleteTodo: onDelete,
  onUpdateTodo,
}: {
  value: ITodo;
  onDeleteTodo: (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => Promise<void>;
  onUpdateTodo: (
    id: number,
    todo: string,
    isCompleted: boolean
  ) => Promise<void>;
}) => {
  const { id, todo, isCompleted } = value;
  const [inputTodo, setInputTodo] = useState<string>(todo);
  const [isModify, setIsModify] = useState<boolean>(false);

  const onModifyHandler = () => {
    setIsModify((_isModify) => !_isModify);
  };

  const onCompleteHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    onUpdateTodo(id, inputTodo, checked);
  };

  const onUpdate = () => {
    onUpdateTodo(id, inputTodo, isCompleted);
    setIsModify(false);
  };

  const onCancelTodo = () => {
    setInputTodo(todo);
    onModifyHandler();
  };

  const onDeleteTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    onDelete(e, id);
  };

  return (
    <StLi>
      {isModify ? (
        <>
          <StInputLabel>
            <StInputCheckBox
              type='checkbox'
              checked={isCompleted}
              onChange={onCompleteHandler}
            />
            <StInput
              value={inputTodo}
              onChange={(e) => {
                setInputTodo(e.target.value);
              }}
              data-testid='modify-input'
            />
          </StInputLabel>
          <SmallButton data_testid='submit-button' onClick={onUpdate}>
            제출
          </SmallButton>
          <SmallButton
            data_testid='cancel-button'
            varient={'outlined'}
            onClick={onCancelTodo}
          >
            취소
          </SmallButton>
        </>
      ) : (
        <>
          <StInputLabel>
            <StInputCheckBox
              type='checkbox'
              checked={isCompleted}
              onChange={onCompleteHandler}
            />
            <StSpan>{todo}</StSpan>
          </StInputLabel>
          <SmallButton
            data_testid='modify-button'
            value={id}
            onClick={onModifyHandler}
          >
            수정
          </SmallButton>
          <SmallButton
            data_testid='delete-button'
            value={id}
            onClick={onDeleteTodo}
            varient={'outlined'}
          >
            삭제
          </SmallButton>
        </>
      )}
    </StLi>
  );
};
export default TodoItem;

const StLi = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const StSpan = styled.span`
  display: inline-block;
  height: 100%;
  margin-bottom: 2px;
`;

const StInputLabel = styled.label`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  flex: 1 1 0%;
`;

const StInput = styled.input`
  width: 80%;
  margin-right: 16px;
  border-bottom: 2px solid ${palette.mainColor};
  padding: 2px 0px;
`;

const StInputCheckBox = styled.input`
  cursor: pointer;
  appearance: none;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 10px 0 0;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${palette.mainColor};
  }
`;
