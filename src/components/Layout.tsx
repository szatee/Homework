import { memo } from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
`;

const Card = styled('div')`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  font-family: 'Montserrat', sans-serif;
  min-width: 300px;
  max-width: 460px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Layout = memo(({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Card>{children}</Card>
    </Container>
  );
});
