import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: calc(100% - 30px);
  height: 100%;

  display: flex;
  flex-wrap: wrap;

  margin: 0 15px;

  position: absolute;
  opacity: 0.2;

  border: 0.5px solid ${(props) => props.theme.pallette.background.border};
`;

const ContainerBlock = styled.div`
  width: 50%;
  height: 50%;

  border: 0.5px solid ${(props) => props.theme.pallette.background.border};
`;

export const Background = () => {
  return (
    <Container>
      <ContainerBlock />
      <ContainerBlock />
      <ContainerBlock />
      <ContainerBlock />
    </Container>
  );
};
