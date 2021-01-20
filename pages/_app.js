import React from 'react';
import App from 'next/app';
import { StoreProvider } from '../store/Store';
import '../css/fonts.css';
import '../css/reset.css';
import Main from '../components/main/main';

const Store = React.createContext();

export default class MyApp extends App {
  constructor(props) {
    super(props);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <StoreProvider>
        <Main>
          <Component {...pageProps} />
        </Main>
      </StoreProvider>
    );
  }
}
