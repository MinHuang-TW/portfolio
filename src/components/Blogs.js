import React, { useState } from 'react';
import { Blog } from '../components';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { RiSearchLine } from 'react-icons/ri';
import { FaGhost } from 'react-icons/fa';

export const Blogs = ({ blogs, totalCount }) => {
  const {
    allMdx: { nodes: recent },
    codeCount: { totalCount: codeCount },
    designCount: { totalCount: designCount },
    lifeCount: { totalCount: lifeCount },
  } = useStaticQuery(query)

  const categories = [
    { category: 'all', count: totalCount },
    { category: 'code', count: codeCount },
    { category: 'design', count: designCount },
    { category: 'life', count: lifeCount },
  ];

  const [state, setState] = useState({
    filteredPosts: blogs,
    query: '',
  });

  const handleSelected = selected => event => {
    const filteredPosts = blogs.filter(({ frontmatter: { categories } }) =>
      selected === 'all' ? categories : categories.includes(selected)
    );
    setState({ query: '', filteredPosts });
  };

  const handleInputChange = event => {
    const query = event.target.value;
    const filteredPosts = blogs.filter(
      ({ frontmatter: { title, description }, body }) =>
        title.toLowerCase().includes(query.toLowerCase()) ||
        description.toLowerCase().includes(query.toLowerCase()) ||
        body.toLowerCase().includes(query.toLowerCase())
    );
    setState({ query, filteredPosts });
  };

  return (
    <section className='section'>
      <div className='section-center blogs-center'>
        {state.filteredPosts.length > 0 ? (
          state.filteredPosts.map(post => <Blog key={post.id} {...post} />)
        ) : (
          <div className='blogs-main'>
            <FaGhost /> <h1>No matching posts</h1>
          </div>
        )}

        <div className='blogs-menu'>
          <div className='category'>
            <h4>categories</h4>
            <div className='category-list'>
              {categories.map(
                ({ category, count }) =>
                  count !== 0 && (
                    <div
                      key={category}
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <button
                        className='category-name'
                        onClick={handleSelected(category)}
                      >
                        {category}
                      </button>
                      <span className='category-count'>{`[${count}]`}</span>
                    </div>
                  )
              )}
            </div>
          </div>

          <div className='recent-block'>
            <h4>Featured Posts</h4>
            <div className='recent-list'>
              {recent.map(
                ({ id, slug, frontmatter: { title } }) => (
                  <Link key={id} to={`/blog/${slug}`}>
                    <h5 className='recent-post'>{title}</h5>
                  </Link>
                )
              )}
            </div>
          </div>
          
          <div>
            <h4>Search Posts</h4>
            <div className='search-input'>
              <input
                type='text'
                name='query'
                aria-label='Search'
                placeholder='Search...'
                onChange={handleInputChange}
              />
              <RiSearchLine size='1.25rem' />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

const query = graphql`
  {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { featured: { eq: true } }
      }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 6
    ) {
      nodes {
        id
        slug
        frontmatter {
          title
          categories
          featured
        }
      }
    }
    codeCount: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { categories: { in: "code" } }
      }
    ) {
      totalCount
    }
    designCount: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { categories: { in: "design" } }
      }
    ) {
      totalCount
    }
    lifeCount: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { categories: { in: "life" } }
      }
    ) {
      totalCount
    }
  }
`

export default Blogs;