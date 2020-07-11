import React, { useState, useCallback } from 'react';
import { Blog } from '../components';
import { graphql, useStaticQuery, Link } from 'gatsby';

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

  const [selected, setSelected] = useState(categories[0].category);
  const handleSelected = useCallback((category) => (event) => {
    setSelected(category);
  }, [setSelected]);

  return (
    <section className='section'>
      {/* <Title title={title} /> */}
      <div className='section-center blogs-center'>
        <div className='blogs-menu'>
          <div>
            <h4>Search Articles</h4>
            <div style={{ display: 'flex' }}>
              <input 
                type='text' 
                name='query' 
                placeholder='enter text...' 
                onChange={handleSelected}
              />
              <button className='btn footer-btn'>Search</button>
            </div>
          </div>

          <div className='category'>
            <h4>categories</h4>
            <div className='category-list'>
              {categories.map(({ category, count }) => (
                <div key={category} style={{ display: 'flex', alignItems: 'center' }}>
                  <div className='category-name'onClick={handleSelected(category)}>
                    {category}
                  </div>
                  <span className='category-count'>{`(${count})`}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4>Recent Posts</h4>
            <div className='category-list'>
              {recent.map(({ id, slug, title, category }) => (
                <Link key={id} to={`/blog/${slug}`}>
                  <div className='recent-post'>
                    <span className='blog-category' style={{ marginBottom: 0, marginRight: 16 }}>{category}</span>
                    <h5>{title}</h5>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {blogs
          .filter(({ category }) => (
            selected === 'all' ? category : category === selected
          ))
          .map((blog) => (<Blog key={blog.id} {...blog} />))}
      </div>
    </section>
  )
};

export const query = graphql`
  {
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        id
        slug
        title
        category
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