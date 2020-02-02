import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import { store } from 'stores';
import { Counter } from 'components';

const App = () => {
  return (
    <Container>
      <Provider store={store}>
        <Counter />
      </Provider>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 2em;
`;
