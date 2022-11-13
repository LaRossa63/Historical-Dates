import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useDateContext } from 'store/Context';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

interface Props {
  device?: string;
}

const ContainerSwiperStyled = styled(Swiper)<{ device?: string }>`
  display: flex;

  margin-top: 56px;
  padding-top: 20px;
  gap: 15px;

  border-top: 1px solid #c7cdd9;

  & .swiper-button-disabled {
    display: none;
  }

  & .swiper-button-prev {
    width: 40px;
    height: 40px;

    position: absolute;
    left: 0;

    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0px 0px 15px rgba(56, 119, 238, 0.1);

    &::after {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 15px;
      font-weight: 800;
    }
  }

  & .swiper-button-next {
    width: 40px;
    height: 40px;

    position: absolute;
    right: 0;

    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0px 0px 15px rgba(56, 119, 238, 0.1);

    &::after {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 15px;
      font-weight: 800;
    }
  }

  ${(props) =>
    props.device === 'TabletAndDesktop'
      ? css`
          margin: 0 100px;
          margin-top: 56px;
          margin-left: 50px;

          border: none;
        `
      : null};
`;

const SwiperSlideStyled = styled(SwiperSlide)<{ device?: string }>`
  height: 110px;

  display: flex;
  flex-direction: column;

  gap: 15px;

  @media (max-width: 768px) {
    &.swiper-slide-next {
      opacity: 0.4;
    }
  }

  ${(props) =>
    props.device === 'TabletAndDesktop'
      ? css`
          &.swiper-slide-next {
            opacity: 1;
          }
        `
      : null}
`;

const Title = styled.span<{ device?: string }>`
  font-family: 'Bebas Neue';
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;

  text-transform: uppercase;

  color: #3877ee;

  ${(props) =>
    props.device === 'TabletAndDesktop'
      ? css`
          font-size: 25px;
        `
      : null}
`;

const Text = styled.p<{ device?: string }>`
  font-weight: 400;
  font-size: 14px;
  line-height: 145%;

  color: #42567a;

  ${(props) =>
    props.device === 'TabletAndDesktop'
      ? css`
          font-size: 20px;
          line-height: 30px;
        `
      : null}
`;

export const List: FC<Props> = ({ device }) => {
  const { currentList } = useDateContext();

  return (
    <ContainerSwiperStyled
      slidesPerView={device === 'TabletAndDesktop' ? 3 : 1.5}
      spaceBetween={15}
      navigation={device === 'TabletAndDesktop'}
      modules={[Navigation]}
      device={device}
    >
      {currentList &&
        currentList.list.map((element) => (
          <SwiperSlideStyled key={element.id}>
            <Title device={device}>{element.date}</Title>
            <Text device={device}>{element.text}</Text>
          </SwiperSlideStyled>
        ))}
    </ContainerSwiperStyled>
  );
};
