import React, { useState } from 'react';
import styles from "./App.module.scss";
import Search from "./components/searchBar";
import axios from "axios";
import movieList from './components/movieList';

function App () {

const [state, setState] = useState ({
  s: "",
  results: [],
  selected: {}
});


const apiurl = "http://www.omdbapi.com/?s=fresh&y=2010&apikey=2e1d8a0d";

const search = (e) => {
  if (e.key === "Enter"){
    axios(apiurl + "&s=" + state.s).then(({ data }) => {
   let results = data.Search;

   setState(prevState => {
     return { ...prevState, results: results }
   })
    });
  }
}

const handleInput = (e) => {
  let s = e.target.value;


setState(prevState => {
  return {...prevState, s: s }
});

}

  return (
    <div className={styles}>
      <header>
    <h1>Movie Database</h1>
    </header>
    <main>
      <Search handleInput={handleInput} search={search}/>
      <movieList movie={state.movie}/>
    </main>
   </div>
  );
  }


export default App;
