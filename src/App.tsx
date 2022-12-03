import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Quotes from "./containers/Quotes/Quotes";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {

  const categories = [
    {name: 'All', id: "/"},
    {name: 'Star Wars', id: "star-wars"},
    {name: 'Super Heroes', id: "super-heroes"},
    {name: 'Motivational', id: "motivational"},
    {name: 'Anime', id: "anime"},
    {name: 'Humor', id: "humor"},
  ];


  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container d-flex mt-5 justify-content-between">
        <Sidebar categories={categories}/>
        <div className="w-75">
          <Routes>
            <Route path="/" element={(
              <Quotes categories={categories}/>
            )}/>
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
