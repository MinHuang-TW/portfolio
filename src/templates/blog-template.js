import React from 'react';
import { Layout, SEO, Title } from '../components';
import { graphql, Link } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';
import ReactMarkdown from 'react-markdown';

const BlogTemplate = ({ 
  data: { 
    blog: {
      id, 
      slug, 
      title, 
      date, 
      description,
      content, 
    },
  }, 
}) => {
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
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
        <div className='section-center content-container'>
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

export default BlogTemplate;