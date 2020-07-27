import React from 'react';
import { Layout, SEO, Title } from '../components';
import { graphql, Link } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogTemplate = ({
  data: {
    post: {
      id,
      slug,
      body,
      frontmatter: { title, date, description },
    },
  },
}) => {
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: {
      url: `https://minhuang.netlify.app/blog/${slug}`,
      identifier: id,
      title,
    },
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
            <MDXProvider>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
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
}

export const query = graphql`
  query GetSingleBlog($id: String) {
    post: mdx(id: { eq: $id }) {
      id
      slug
      body
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        description
      }
    }
  }
`

export default BlogTemplate;