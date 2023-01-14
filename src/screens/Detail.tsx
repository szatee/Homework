import { memo, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectTodoById } from 'store/todos';
import back from 'assets/back.png';

const Wrapper = styled('div')`
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BackButton = styled('img')`
  position: absolute;
  left: 10px;
  cursor: pointer;
`;

export const Detail = memo(() => {
  const navigate = useNavigate();
  const { id } = useParams();
  const todo = useSelector(selectTodoById(id));

  const handleBack = useCallback(() => navigate(-1), [navigate]);

  return (
    <Wrapper>
      {todo.title}
      <BackButton src={back} alt="backIcon" onClick={handleBack} />
    </Wrapper>
  );
});
