import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Title from '../components/Title';
import SEO from '../components/SEO';
import ReactMarkdown from 'react-markdown';
import { DiscussionEmbed } from 'disqus-react';

const ComponentName = ({ data }) => {
  const { id, slug, content, title, date, description } = data.blog;
  const disqusConfig = {
    shortname: 'minhuang',
    config: {
      url: `https://minhuang.netlify.app/blog/${slug}`,
      identifier: id,
      title,
      // language: 'zh_TW',
    }
  };
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

          <div style={{ margin: '5rem auto' }}>
            <Link to='/blog/' className='btn center-btn'>
              back to blog
            </Link>
          </div>

          <DiscussionEmbed {...disqusConfig} />
        </div>
      </section>
    </Layout>
  )
};

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      id
      title
      date(formatString: "MMMM D, YYYY")
      description
      content
    }
  }
`

export default ComponentName;