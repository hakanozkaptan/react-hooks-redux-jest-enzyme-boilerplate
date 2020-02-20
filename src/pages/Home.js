import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Counter } from 'components';

export const Home = () => {
  return (
    <>
      <Counter />
      <LinkContainer>
        <LinkTo to='/contact'>Contact Page</LinkTo>
      </LinkContainer>
    </>
  );
};

const LinkContainer = styled.div`
  display: flex;
`;

const LinkTo = styled(Link)`
  color: blue;
  text-decoration: none;
  margin-top: 1.125em;
`;