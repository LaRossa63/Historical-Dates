import React, { FC } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination as SwiperPagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import { useDateContext } from 'store/Context';
import { PaginationCounter } from './PaginationCounter';

interface Props {
  device?: string;
}

const Container = styled.div<{ device?: string }>`
  ${(props) =>
    props.device === 'TabletAndDesktop'
      ? css`
          margin-top: 78px;
        `
      : null}
`;

const SwiperStyled = styled(Swiper)<{ device?: string }>`
  & .swiper-pagination-bullet {
    opacity: 0.4;

    font-weight: 400;
    font-size: 20px;
    line-height: 30px;

    color: #42567a;
    background-color: #42567a;
  }

  & .swiper-pagination-bullet-active {
    opacity: 1;

    ${(props) =>
      props.device === 'TabletAndDesktop'
        ? css`
            width: 56px;
            height: 56px;

            padding-top: 12px;

            background-color: #f4f5f9;
            border: 1px solid rgba(48, 62, 88, 0.5);
          `
        : null}
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

const TextPage = styled.span`
  display: none;
`;

export const Pagination: FC<Props> = ({ device }) => {
  const { handleChangeIndexPage, allList } = useDateContext();

  const pagination = {
    clickable: true,

    renderBullet: function (index: any, className: any) {
      return ReactDOMServer.renderToStaticMarkup(
        <div className={className}>
          <TextPage>{index + 1}</TextPage>
        </div>
      );
    },
  };

  return (
    <Container device={device}>
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
