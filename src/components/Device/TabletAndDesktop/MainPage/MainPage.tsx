import React from 'react';
import styled from 'styled-components';

import { List, Pagination, SelectedYear, Title } from 'components/Elements';
import { Background } from './components';

const Container = styled.div`
  width: 100%;
  max-width: 1440px;

  height: 100%;

  position: relative;

  margin: 0 auto;

  padding-bottom: 50px;
`;

const ContainerTitle = styled.div`
  position: absolute;
`;

const BorderTitle = styled.div`
  width: 3px;
  height: 120px;

  position: absolute;
  left: 13.5px;
  top: 178px;

  background: linear-gradient(#3877ee, #ef5da8);
`;

export const MainPage = () => {
  return (
    <Container>
      <Background />

      <ContainerTitle>
        <BorderTitle />

        <Title device="TabletAndDesktop">
          Исторические
          <br />
          даты
        </Title>
      </ContainerTitle>

      <SelectedYear device="TabletAndDesktop" />

      <Pagination device="TabletAndDesktop" />

      <List device="TabletAndDesktop" />
    </Container>
  );
};
