import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Contact = () => (
  <>
    <ContactPage>Welcome to my boilerplate</ContactPage>
    <LinkTo to='/'>Return to Home</LinkTo>
  </>
);

const ContactPage =  styled.div`
  fontWeight: bold; 
`;

const LinkTo = styled(Link)`
  color: blue;
  text-decoration: none;
  margin-top: 1.125em;
`;