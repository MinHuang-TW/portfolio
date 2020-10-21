import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import { Code } from './src/components';
import './src/css/main.css';
import './src/css/language-tabs.css';

const component = {
  pre: preProps => {
    const props = preToCodeBlock(preProps);
    if (props) {
      return <Code {...props} />
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