import React from 'react';
import {Categories} from "../../types";
import {NavLink} from "react-router-dom";

interface Props {
  categories: Categories[];
}

const Sidebar: React.FC<Props> = ({categories}) => {

  return (
    <div className="w-25">
      <h4 className="mb-3 text-center">Select quotes category</h4>
      <ul className="list-group ">
        <NavLink className="list-group-item bg-gradient" to='/'>All</NavLink>
        {categories.map(category => (
          <NavLink
            to={`/quotes/category/${category.id}`}
            className="list-group-item bg-gradient "
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;