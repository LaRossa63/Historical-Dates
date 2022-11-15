import React from 'react';
import styled, { css } from 'styled-components';

export const Title = styled.h2<{ device?: string }>`
  font-size: ${(props) =>
    props.device === 'TabletAndDesktop'
      ? '56px'
      : props.theme.typography.fontSize};

  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  line-height: 120%;

  color: ${(props) => props.theme.pallette.text.primary};

  ${(props) =>
    props.device === 'TabletAndDesktop' &&
    css`
      margin-left: 98px;
      padding-top: 170px;
    `}
`;
