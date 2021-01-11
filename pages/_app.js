import React from 'react';
import App from 'next/app';
import Main from '../components/main/Main';

const Store = React.createContext();

export default class MyApp extends App {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('🚀 ~ file: _app.js ~ line 14 ~ MyApp ~ render ~ this.props', this.props);
    const { Component, pageProps } = this.props;
    return (
      <Store.Provider>
        <Main search={pageProps.search_text}>
          <Component {...pageProps} />
        </Main>
      </Store.Provider>
    );
  }
}
