import React from 'react';
import {  NavLink } from 'react-router-dom';

const Categories = ({categories}) => {
    return (
        <div role='tablist' className= "tabs tabs-lifted mt-7">
  {categories.map(category => (
    <NavLink key={category.category} to={`/category/${category.category}`}  className={({isActive}) => `tab text-xl font-semibold  ${isActive ? 'tab-active': ''}`}>{category.category}</NavLink>
  ))

  }
  
</div>
    );
};

export default Categories;