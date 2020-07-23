import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head'

_App.propTypes = {
  Component: PropTypes.elementType.isRequired
};

function _App({ Component }) {
  return (
    <>
      <Head>
        <title>NodeBirdNext</title>
        <meta charSet="utf-8" />
      </Head>
      <Component />
    </>
  );
}

export default _App;