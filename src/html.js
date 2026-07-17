import React from 'react';
import * as PropTypes from 'prop-types';

const propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
};

const Html = props => {
  return (
    <html op="news" lang="en">
      <head>
        {props.headComponents}

        <meta name="referrer" content="origin" />
        <meta charSet="utf-8" />
        <meta name="description" content="Sailesh Maharjan is a backend developer from Nepal building reliable web applications, APIs, databases, and scalable systems." />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <meta name="googlebot" content="index,follow" />
        <meta name="theme-color" content="#111827" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.saileshmaharjan63.com.np/" />
        <link rel="shortcut icon" href="/site-icon.png" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <title>Sailesh Maharjan | Portfolio</title>
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
};

Html.propTypes = propTypes;

export default Html;
