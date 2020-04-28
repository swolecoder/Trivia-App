import React from 'react';
import categories from '../categories';

export default function CategorySelector(props) {
  return (
    <div className="category-selector">
      <p>Select Category</p>
      <select onChange={(e)=> props.chooseCategory(e.target.value)}>
        {categories.map((category, index) => (
          <option key={index} value={category.id} dangerouslySetInnerHTML={{__html: category.name}}>
           
          </option>
        ))}
      </select>
    </div>
  );
}