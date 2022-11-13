import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { useSwiper } from 'swiper/react';

import { ArrowLeft, ArrowRight } from 'images';
import { useDateContext } from 'store/Context';

interface Props {
  device?: string;
}

const Container = styled.div<{ device?: string }>`
  width: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;

  ${(props) =>
    props.device === 'TabletAndDesktop' &&
    css`
      width: 120px;
      height: 88px;

      margin-top: 150px;
      margin-left: 60px;
      gap: 20px;
    `}
`;

const ContainerText = styled.span`
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  font-size: 14px;
  line-height: 18px;

  color: ${(props) => props.theme.pallette.text.primary};
`;

const ContainerControls = styled.div<{ device?: string }>`
  display: flex;

  gap: 10px;

  ${(props) =>
    props.device === 'TabletAndDesktop' &&
    css`
      gap: 20px;
    `}
`;

const Button = styled.button<{ device?: string; disabled: boolean }>`
  width: 25px;
  height: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 10;

  border: 1px solid rgba(66, 86, 122, 0.5);
  border-radius: 50%;

  ${(props) =>
    props.device === 'TabletAndDesktop' &&
    css`
      width: 50px;
      height: 50px;
    `}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.4;
    `}
`;

export const PaginationCounter: FC<Props> = ({ device }) => {
  const { currentIndexPage, counterPages } = useDateContext();

  const swiper = useSwiper();

  return (
    <Container device={device}>
      <ContainerText>
        {currentIndexPage + 1}/{counterPages}
      </ContainerText>

      <ContainerControls device={device}>
        <Button
          device={device}
          disabled={swiper.isBeginning}
          onClick={() => swiper.slidePrev()}
        >
          <ArrowLeft />
        </Button>
        <Button
          device={device}
          disabled={swiper.isEnd}
          onClick={() => swiper.slideNext()}
        >
          <ArrowRight />
        </Button>
      </ContainerControls>
    </Container>
  );
};
