import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

import { useDateContext } from 'store/Context';

const Container = styled.div`
  width: calc(100% - 30px);
  height: 100%;

  display: flex;
  flex-wrap: wrap;

  margin: 0 15px;

  position: absolute;
  opacity: 0.1;

  border: 0.5px solid ${(props) => props.theme.pallette.background.border};
`;

const ContainerBlock = styled.div`
  width: 50%;
  height: 50%;

  border: 0.5px solid ${(props) => props.theme.pallette.background.border};
`;

const Ellipse = styled.ul`
  width: 530px;
  height: 530px;

  display: flex;
  justify-content: space-between;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  border: 2px solid ${(props) => props.theme.pallette.background.border};
  border-radius: 50%;
`;

const Item = styled.li`
  width: 8px;
  height: 8px;

  background-color: ${(props) => props.theme.pallette.background.border};

  position: absolute;
  z-index: 2;

  border-radius: 50%;

  &:nth-child(1) {
    right: 97px;
    top: 50px;
  }

  &:nth-child(2) {
    right: -5px;
    top: 49.5%;
  }

  &:nth-child(3) {
    bottom: 91px;
    right: 55px;
  }

  &:nth-child(4) {
    left: 80px;
    bottom: 64px;
  }

  &:nth-child(5) {
    bottom: 49%;
    left: -4px;
  }

  &:nth-child(6) {
    left: 97px;
    top: 50px;
  }
`;

export const Background = () => {
  const { allList } = useDateContext();

  const el = useRef() as any;

  useEffect(() => {
    if (!el.current) {
      return;
    }

    gsap.to(el.current, {
      // полный поворот
      rotation: '+=180',
    });
  });

  return (
    <Container>
      <ContainerBlock />
      <ContainerBlock />
      <ContainerBlock />
      <ContainerBlock />

      <Ellipse ref={el}>
        {allList &&
          allList.map((element) => <Item key={element.id}>{element.id}</Item>)}
      </Ellipse>
    </Container>
  );
};
