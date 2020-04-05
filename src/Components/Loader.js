import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 1.8rem;
  margin-top: 0.5em;
`;

export default () => {
  return (
    <Container>
      <span role='img' aria-label='Loading'>
        ⏰
      </span>
    </Container>
  );
};
