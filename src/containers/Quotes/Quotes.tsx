import React from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import {Categories} from "../../types";

interface Props {
  categories: Categories[];
}

const Quotes: React.FC<Props> = ({categories}) => {
  return (
    <>
      <Sidebar categories={categories}/>
      <div className="w-75"></div>
    </>

  );
};

export default Quotes;