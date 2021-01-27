/* eslint-disable react/no-danger */
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const BaseHead = ({ description, keywords, title, imageUrl }) => (
  <Head>
    <title>{`${title} | S.O.M`}</title>
    <meta name="title" content={`${title} | S.O.M`} />
    <meta charset="utf-8" />

    <meta
      name="keywords"
      content={[...keywords, title, 'S.O.M', 'Sistema', 'Operacional', 'Música'].join(', ')}
    />
    <meta name="language" content="en-us" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="description" content={description} />

    <meta name="image" content={imageUrl} />

    <meta property="og:title" content={`${title} | S.O.M`} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:image:width" content="200" />
    <meta property="og:image:height" content="200" />

    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  </Head>
);

BaseHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string)
};

BaseHead.defaultProps = {
  keywords: [],
  imageUrl: '',
  title: 'Sistema Operacional da Música Brasileira',
  description: ''
};

export default BaseHead;
