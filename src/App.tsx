import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Quotes from "./containers/Quotes/Quotes";
import AddQuote from "./containers/AddQuote/AddQuote";
import EditQuote from "./containers/EditQuote/EditQuote";

function App() {
  const categories = [
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
      <main className="container mt-5 ">
        <Routes>
          <Route path="/" element={(
            <Quotes categories={categories}/>
          )}/>
          <Route path="/quotes/category/:id" element={(
            <Quotes categories={categories}/>
          )}/>
          <Route path="/quotes/edit/:id" element={(
            <EditQuote categories={categories}/>
          )}/>
          <Route path="/add-quote" element={(
            <AddQuote categories={categories}/>
          )}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
