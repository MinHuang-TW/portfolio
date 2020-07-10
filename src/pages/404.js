import React from 'react';
import { Link } from 'gatsby';
import { SEO, Layout} from '../components';

const Error = () => (
  <Layout>
    <SEO title='Error' description='404 page' />
    <main className='error-page'>
      <div className='error-container'>
        <h1>Page does not exist.</h1>
        <Link to='/' className='btn'>back home</Link>
      </div>
    </main>
  </Layout>
);

export default Error;