import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ITodo } from 'models/todo';

const Wrapper = styled('div')<{ background: string }>`
  background-color: ${({ background }) => background};
  color: #ffffff;
  padding: 10px 20px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const Todo = memo((props: { background: string } & ITodo) => {
  const navigate = useNavigate();

  const { id, title, background } = props;

  const handleOnClick = useCallback(
    () => navigate(`detail/${id}`),
    [navigate, id],
  );

  return (
    <Wrapper background={background} onClick={handleOnClick}>
      {title}
    </Wrapper>
  );
});
