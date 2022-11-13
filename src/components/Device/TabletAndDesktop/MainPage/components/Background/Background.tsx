import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

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

export const Background = () => {
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

      <Ellipse ref={el}></Ellipse>
    </Container>
  );
};
