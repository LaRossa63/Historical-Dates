import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { useDateContext } from 'store/Context';

interface Props {
  device?: string;
}

const Container = styled.div<{ device?: string }>`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;

  margin-top: 56px;
  padding: 0 10px;
  gap: 30px;

  ${(props) =>
    props.device === 'TabletAndDesktop'
      ? css`
          width: 100%;
          flex-wrap: wrap;

          gap: 86px;

          position: absolute;
          top: 365px;
          z-index: 10;
          right: 10px;
        `
      : null}
`;

const Text = styled.span<{ mode: string; device?: string }>`
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  font-size: 56px;
  line-height: 72px;

  letter-spacing: -0.02em;

  color: ${(props) => (props.mode === 'start' ? '#3877ee' : '#f178b6')};

  ${(props) =>
    props.device === 'TabletAndDesktop'
      ? css`
          font-weight: 700;
          font-size: 200px;
          line-height: 160px;
        `
      : null}
`;

export const SelectedYear: FC<Props> = ({ device }) => {
  const { currentList } = useDateContext();

  return (
    <Container device={device}>
      <Text mode="start" device={device}>
        {currentList?.startYear}
      </Text>

      <Text mode="end" device={device}>
        {currentList?.endYear}
      </Text>
    </Container>
  );
};
