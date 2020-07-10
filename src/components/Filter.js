import React from 'react';

const Filter = ({ lists, selected, onSelected }) => (
  <div className='filter-container'>
    {lists.map((list, index) => (
      <button 
        key={index} 
        className={`filter ${selected === list ? 'active' : ''}`}
        onClick={onSelected(list)} 
      >
        {list}
      </button>
    ))}
  </div>
);

export default Filter;