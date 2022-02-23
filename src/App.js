import React from 'react';
import { createGlobalStyle } from 'styled-components';
import MainPage from './MainPage';
import TermPage from './TermPage';
import QuestionsPage from'./QuestionPage';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <MainPage /> */}
       {/* <QuestionsPage /> */}
      <TermPage />
    </>
  );
}

export default App;