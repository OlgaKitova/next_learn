import Head from 'next/head';
import React from 'react';
import MainContainer from '../components/MainContainer';

export default function Index() {
  return <MainContainer>
     <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Главная</h1>
  </MainContainer>;
}
