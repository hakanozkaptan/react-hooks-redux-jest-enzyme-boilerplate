import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { increaseCount, decreaseCount } from 'actions';

export const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const handleIncreaseClick = () => dispatch(increaseCount());
  const handleDecreaseClick = () => dispatch(decreaseCount());

  return (
    <div className='app'>
      <h3>Count: {count}</h3>
      <Button id='increase' onClick={handleIncreaseClick}>
        Increase Count
      </Button>
      <Button id='decrease' onClick={handleDecreaseClick} disabled={count <= 0}>
        Decrease Count
      </Button>
    </div>
  );
};

const Button = styled.button`
  padding: 1em 2em;
  color: #000;
  border: 1px solid #0d5bab;
  cursor: pointer;
  font-size: 0.875em;
  margin-right: 0.225em;

  ${props =>
    props.disabled &&
    css`
      background: #c9c9c9;
      border-color: #c9c9c9;
    `};

  &:focus {
    outline: none;
  }
`;
