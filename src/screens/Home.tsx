import { Todo } from 'components/Todo';
import { ITodo } from 'models/todo';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from 'store/todos';
import { randomColor } from 'utils/color';

export const Home = memo(() => {
  const todos: ITodo[] = useSelector(selectTodos());
  return (
    <>
      {todos.map((todo, index, array) => (
        <Todo key={index} {...todo} background={randomColor(array.length)} />
      ))}
    </>
  );
});
