import React from 'react';
import AppLayout from "../components/AppLayout";
import Head from 'next/head'

function Home() {
  return (
    <>
      <Head>
        <title> MainPage | NodeBird</title>
      </Head>
      <AppLayout>
        <div>Hell, Next</div>
      </AppLayout>
    </>
  )
}

export default Home;