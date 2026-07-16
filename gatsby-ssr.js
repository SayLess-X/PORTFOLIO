/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';
import { Analytics } from '@vercel/analytics/react';

export const wrapPageElement = ({ element }) => {
  return (
    <>
      {element}
      <Analytics />
    </>
  );
};
