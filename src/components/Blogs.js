import React, { useState } from 'react';
import { Blog } from '../components';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { RiSearchLine } from 'react-icons/ri';

export const Blogs = ({ blogs, total }) => {
  const { 
    allStrapiBlogs: { nodes: recent }, 
    code: { totalCount: code }, 
    design: { totalCount: design }, 
    life: { totalCount: life },
  } = useStaticQuery(query);

  const categories = [
    { category: 'all', count: total }, 
    { category: 'code', count: code }, 
    { category: 'design', count: design }, 
    { category: 'life', count: life }
  ];

  const [state, setState] = useState({
    filteredPosts: blogs,
    query: '',
  });

  const handleSelected = (selected) => (event) => {
    const filteredPosts = blogs.filter(({ category }) => (
      selected === 'all' ? category : category === selected
    ));
    setState({ query: '', filteredPosts })
  };

  const handleInputChange = (event) => {
    const query = event.target.value;
    const filteredPosts = blogs.filter(({ title, description, content }) => (
      title.toLowerCase().includes(query.toLowerCase()) ||
      description.toLowerCase().includes(query.toLowerCase()) ||
      content.toLowerCase().includes(query.toLowerCase())
    ));
    setState({ query, filteredPosts });
  };

  return (
    <section className='section'>
      <div className='section-center blogs-center'>
        <div className='blogs-menu'>
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

          <div className='category'>
            <h4>categories</h4>
            <div className='category-list'>
              {categories.map(({ category, count }) => (
                <div key={category} style={{ display: 'flex', alignItems: 'center' }}>
                  <button 
                    className='category-name'
                    onClick={handleSelected(category)}
                  >
                    {category}
                  </button>
                  <span className='category-count'>{`(${count})`}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='recent-block'>
            <h4>Featured Posts</h4>
            <div className='recent-list'>
              {recent.map(({ id, slug, title, category }) => (
                <Link key={id} to={`/blog/${slug}`}>
                  <div className='recent-post'>
                    <span className='blog-category'>{category}</span>
                    <h5>{title}</h5>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {state.filteredPosts.length > 0
          ? state.filteredPosts.map((post) => (<Blog key={post.id} {...post} />)
        ) : (
          <div className='notFound'>
            <h1>No matching posts</h1>
          </div>
        )}
      </div>
    </section>
  )
};

const query = graphql`
  {
    allStrapiBlogs(
      sort: {fields: date, order: DESC}, 
      filter: {featured: {eq: true}},
      limit: 8
    ) {
      nodes {
        id
        slug
        title
        category
        featured
      }
    },
    code: allStrapiBlogs(filter: {category: {eq: "code"}}) {
      totalCount
    },
    design: allStrapiBlogs(filter: {category: {eq: "design"}}) {
      totalCount
    },
    life: allStrapiBlogs(filter: {category: {eq: "life"}}) {
      totalCount
    },
  }
`

export default Blogs;