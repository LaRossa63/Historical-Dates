import React, { FC, useEffect, useRef } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination as SwiperPagination } from 'swiper';
import gsap from 'gsap';

import 'swiper/css';
import 'swiper/css/pagination';
import { useDateContext } from 'store/Context';
import { PaginationCounter } from './PaginationCounter';

interface Props {
  device?: string;
}

const Container = styled.div`
  position: relative;
  z-index: 100;
`;

const SwiperStyled = styled(Swiper)<{ device?: string }>`
  position: relative;

  & .swiper-wrapper {
    ${(props) =>
      props.device === 'TabletAndDesktop'
        ? css`
            height: 690px;
            position: relative;
          `
        : null}
  }

  & .swiper-pagination {
    ${(props) =>
      props.device === 'TabletAndDesktop'
        ? css`
            width: 530px;
            height: 530px;

            display: flex;
            gap: 10px;

            position: absolute;
            top: 470px;
            left: 50%;
            transform: translate(-50%, -50%);

            border: 1px solid rgba(61, 78, 109, 0.4);
            border-radius: 50%;
          `
        : null}
  }

  & .swiper-pagination-bullet {
    opacity: 0.4;

    font-weight: 400;
    font-size: 20px;
    line-height: 30px;

    color: #42567a;
    background-color: #42567a;

    ${(props) =>
      props.device === 'TabletAndDesktop'
        ? css`
            opacity: 1;
          `
        : null};
  }

  & .swiper-pagination-bullet-active {
    opacity: 1;

    &:nth-child(1),
    &:nth-child(2) {
      top: 20px;
    }

    &:nth-child(3) {
      top: 52%;
      bottom: 50%;
      left: -30px;
    }

    &:nth-child(4) {
      top: 52%;
      bottom: 50%;
      right: -30px;
    }

    &:nth-child(5),
    &:nth-child(6) {
      bottom: 10px;
    }

    ${(props) =>
      props.device === 'TabletAndDesktop'
        ? css`
            width: 56px;
            height: 56px;

            padding-top: 12px;

            background-color: #f4f5f9;
            border: 1px solid rgba(48, 62, 88, 0.5);
          `
        : null};
  }

  & .swiper-pagination-bullet-active > * {
    ${(props) =>
      props.device === 'TabletAndDesktop'
        ? css`
            display: block;
          `
        : null}
  }
`;

const PaginationItem = styled.div<{ device?: string }>`
  ${(props) =>
    props.device === 'TabletAndDesktop'
      ? css`
          position: absolute;

          z-index: 200;

          &:nth-child(1) {
            top: 60px;
            left: 82px;
          }

          &:nth-child(2) {
            top: 60px;
            right: 82px;
          }

          &:nth-child(3) {
            top: 56.3%;
            bottom: 50%;
            left: -6px;
          }

          &:nth-child(4) {
            top: 56.3%;
            bottom: 50%;
            right: -6px;
          }

          &:nth-child(5) {
            bottom: 46px;
            left: 100px;
          }

          &:nth-child(6) {
            bottom: 46px;
            right: 100px;
          }
        `
      : null};
`;

const TextPage = styled.span`
  display: none;

  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  color: #42567a;
`;

const TextTitle = styled.span`
  display: none;

  font-weight: 700;
  font-size: 20px;
  line-height: 30px;

  position: absolute;
  top: 10px;

  margin-left: 65px;

  color: #42567a;
`;

export const Pagination: FC<Props> = ({ device }) => {
  const { handleChangeIndexPage, allList, currentIndexPage } = useDateContext();

  useEffect(() => {
    if (device !== 'TabletAndDesktop') {
      return;
    }

    gsap.to('.swiper-pagination', {
      rotation: '+=360',
    });
  }, [currentIndexPage]);

  const pagination = {
    clickable: true,

    renderBullet: function (index: number, className: string) {
      return ReactDOMServer.renderToStaticMarkup(
        <PaginationItem device={device} className={className}>
          <TextPage>{index + 1}</TextPage>
          <TextTitle>{allList && allList[index].title}</TextTitle>
        </PaginationItem>
      );
    },
  };

  return (
    <Container>
      <SwiperStyled
        pagination={pagination}
        modules={[SwiperPagination]}
        onSlideChange={handleChangeIndexPage}
        device={device}
      >
        {allList &&
          allList.map((element) => (
            <SwiperSlide key={element.id}>&nbsp;</SwiperSlide>
          ))}

        <PaginationCounter device={device} />
      </SwiperStyled>
    </Container>
  );
};
