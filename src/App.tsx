import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Quotes from "./containers/Quotes/Quotes";

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
      <main className="container mt-5">
        <Routes>
          <Route path="/" element={(
            <Quotes categories={categories}/>
          )}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
