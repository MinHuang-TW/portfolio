import React from 'react';
import { Link } from 'gatsby';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Pagination = ({ currentPage, totalPages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;
  const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${currentPage - 1}`;
  const nextPage = `/blog/${currentPage + 1}`;
  const setClasses = (cases) => ['blogs-btn', cases ? ' btn-disable' : ''].join('');

  return (
    <div className='blogs-pagination section-center'>
      <Link 
        to={isFirst ? '/blog' : prevPage} 
        className={setClasses(isFirst)}
      >
        <FiChevronLeft /> <span>previous</span>
      </Link>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        const active = currentPage === page;
        return (
          <Link 
            key={`page-${page}`} 
            to={page === 1 ? '/blog' : `/blog/${page}`}
            className={active ? 'blogs-page-active' : 'blogs-page'}
          >
            {page}
          </Link>
        )
      })}

      <Link 
        to={isLast ? '/blog' : nextPage} 
        className={setClasses(isLast)}
      >
        <span>next</span> <FiChevronRight />
      </Link>
    </div>
  )
};

export default Pagination;