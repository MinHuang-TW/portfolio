import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const contact = () => (
  <Layout>
    <SEO title='Contact' description='send me a message' />
    <section className='contact-page'>
      <article className='contact-form'>
        <h3>get in touch</h3>
        <form action='https://formspree.io/mzbjjrrd' method='POST'>
          <div className='form-group'>
            <input 
              type='text'
              name='name'
              placeholder='name'
              className='form-control' 
            />
            <input 
              type='email'
              name='email'
              placeholder='email'
              className='form-control' 
            />
            <textarea 
              name='message' 
              rows='5'
              placeholder='message'
              className='form-control'
            />
            <button type='submit' className='submit-btn btn'>
              submit
            </button>
          </div>
        </form>
      </article>
    </section>
  </Layout>
)

export default contact;