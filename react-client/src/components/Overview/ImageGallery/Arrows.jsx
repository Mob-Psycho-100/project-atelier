import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// Assets
import upArrowSrc from './up-arrow-icon.svg';
import downArrowSrc from './down-arrow-icon.svg';
import leftArrowSrc from './left-arrow-icon.svg';
import rightArrowSrc from './right-arrow-icon.svg';

function UpArrow({ className, clickHandler }) {
  return (
    <input type="image" src={upArrowSrc} alt="scroll-up-button" className={className} onClick={() => clickHandler()} />
  );
}

const StyledUpArrow = styled(UpArrow)`
  cursor: pointer;
  margin: 20px 0;
  ${({ visible }) => !visible && 'visibility: hidden;'}
`;

UpArrow.propTypes = {
  className: propTypes.string.isRequired,
  clickHandler: propTypes.func.isRequired,
};

function DownArrow({ className, clickHandler }) {
  return (
    <input type="image" src={downArrowSrc} alt="scroll-down-button" className={className} onClick={() => clickHandler()} />
  );
}

const StyledDownArrow = styled(DownArrow)`
  cursor: pointer;
  margin: 20px 0;
  ${({ visible }) => !visible && 'visibility: hidden;'}
`;

DownArrow.propTypes = {
  className: propTypes.string.isRequired,
  clickHandler: propTypes.func.isRequired,
};

const ArrowBody = styled.div`
  position: absolute;
  height: 4px;
  background-color: black;
  width: 15px;
  ${({ right }) => right && 'left: 8px;'}
  ${({ left }) => left && 'right: 8px;'}
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 20px;
  width: 20px;
  cursor: pointer;
  z-index: 99;
`;

function LeftArrow({ className, clickHandler }) {
  return (
    <ArrowContainer onClick={() => clickHandler()}>
      <input type="image" src={leftArrowSrc} alt="scroll-down-button" className={className} />
      <ArrowBody right />
    </ArrowContainer>
  );
}

const StyledLeftArrow = styled(LeftArrow)`
  position: absolute;
  cursor: pointer;
  object-fit: cover;
  width: 100%;
  height: 100%;
  ${({ visible }) => !visible && 'visibility: hidden;'}
`;

LeftArrow.propTypes = {
  className: propTypes.string.isRequired,
  clickHandler: propTypes.func.isRequired,
};

function RightArrow({ className, clickHandler }) {
  return (
    <ArrowContainer onClick={() => clickHandler()}>
      <input type="image" src={rightArrowSrc} alt="scroll-down-button" className={className} />
      <ArrowBody left />
    </ArrowContainer>
  );
}

const StyledRightArrow = styled(RightArrow)`
  position: absolute;
  cursor: pointer;
  object-fit: cover;
  width: 100%;
  height: 100%;
  right: 0;
  ${({ visible }) => !visible && 'visibility: hidden;'}
`;

RightArrow.propTypes = {
  className: propTypes.string.isRequired,
  clickHandler: propTypes.func.isRequired,
};

export {
  StyledUpArrow, StyledDownArrow, StyledLeftArrow, StyledRightArrow,
 };
