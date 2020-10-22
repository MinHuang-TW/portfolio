import React, { Suspense } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import './src/css/main.css';
import './src/css/language-tabs.css';

const Code = React.lazy(() => import('./src/components/Code'));

const component = {
  pre: preProps => {
    const props = preToCodeBlock(preProps);
    if (props) {
      return (
        <Suspense fallback={<div className='gatsby-highlight'>Loading...</div>}>
          <Code {...props} />
        </Suspense>
      )
    }
    return <pre {...preProps} />
  },
  wrapper: ({ children}) => <>{children}</>,
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={component}>
    {element}
  </MDXProvider>
);