import React from 'react';
import styled from 'styled-components';

import { List, Pagination, SelectedYear, Title } from 'components/Elements';

const Container = styled.div`
  padding: 20px;
  overflow: hidden;
`;

const ContainerTitle = styled.div`
  margin-top: 60px;
`;

export const MainPage = () => {
  return (
    <Container>
      <ContainerTitle>
        <Title mode="Mobile">
          Исторические
          <br />
          даты
        </Title>
      </ContainerTitle>

      <SelectedYear />

      <List />

      <Pagination />
    </Container>
  );
};
