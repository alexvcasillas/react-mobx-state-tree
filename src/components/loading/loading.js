import React from 'react';
import styled, { keyframes } from 'styled-components';

const foregroundCircle = keyframes`
  0% {
    ransform: scale(0.3) rotate(0deg);
  }
  12.5% {
    transform: scale(0.3) rotate(180deg);
  }
  25%, 50% {
    opacity: 1;
  }
  50% {
    transform: scale(1) rotate(720deg);
  }
  100% {
    transform: scale(0.3) rotate(1800deg);
    opacity: 0.5;
  }
`;

const backgroundCircle = keyframes`
  12.5% {
    transform: scale(0.3);
  }
  90%, 100% {
  transform: scale(2);
    opacity: 0;
  }
`;

const Loader = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  margin: auto;

  &:before,
  &:after {
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    animation-duration: 3s;

    animation-timing-function: linear;

    animation-iteration-count: infinite;
  }

  &:before {
    top: -2px;
    left: -2px;
    border-style: solid;
    border-width: 3px 3px 3px 0;
    border-color: #fff transparent transparent;
    transform: scale(0.3) rotate(0deg);
    opacity: 0.5;
    animation-name: ${foregroundCircle};
  }

  &:after {
    background: #fff;
    opacity: 0.5;
    transform: scale(0);
    animation-name: ${backgroundCircle};
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const Loading = () =>
  <Wrapper>
    <Loader />
  </Wrapper>;

export default Loading;
