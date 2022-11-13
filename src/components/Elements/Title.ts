import React from 'react';
import styled from 'styled-components';

export const Title = styled.h2<{ mode?: string }>`
  font-size: ${(props) =>
    props.mode === 'TabletAndDesktop'
      ? '56px'
      : props.theme.typography.fontSize};

  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  line-height: 120%;

  color: ${(props) => props.theme.pallette.text.primary};
`;
