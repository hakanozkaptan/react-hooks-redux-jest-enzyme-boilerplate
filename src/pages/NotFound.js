import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFound = () => (
  <>
    <NotFoundPage>404 page not found :(</NotFoundPage>
    <LinkTo to='/'>Return to Home</LinkTo>
  </>
);

const NotFoundPage =  styled.div`
  font-style: italic; 
`;

const LinkTo = styled(Link)`
  color: blue;
  text-decoration: none;
  margin-top: 1.125em;
`;