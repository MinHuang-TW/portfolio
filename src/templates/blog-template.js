import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Title from '../components/Title';
import SEO from '../components/SEO';
import ReactMarkdown from 'react-markdown';

const ComponentName = ({ data }) => {
  const { content, title, date, description } = data.blog;

  return (
    <Layout>
      <SEO title={title} description={description} />
      <header className='project-head'>
        <Title title={title} />
        <p className='blog-subtitle'>{date}</p>
      </header>
      
      <section className='blog-template'>
        <div className='section-center'>
          <article className='blog-content'>
            <ReactMarkdown source={content} />
          </article>
          <Link to='/blog/' className='btn center-btn'>
            back to blog
          </Link>
        </div>
      </section>
    </Layout>
  )
};

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM D, YYYY")
      description
      content
    }
  }
`

export default ComponentName;