import React, { Component } from 'react';
import Movie from "./components/movie";
// import data from "./data/movies";
import styles from "./App.module.scss";
import Search from "./components/searchBar";

// class  extends Component {
//   state = {  }
//   render() { 
//     return (  );
//   }
// }
 
class App extends Component {
state = {
  search: "",
  results: [],
}

handleInput = (e) => {
  let search = e.target.value;


movieFinder = async (e) => {

const apiurl = "http://www.omdbapi.com/?s=fresh&y=2010&apikey=2e1d8a0d"


try {
  const res = await fetch(apiurl);
  const data = await res.json()
  console.log(data)

  this.setState(data.results)
  } catch(err){
    console.error(err); 
  }
}
}

render () {
  return (
    <div className={styles}>
      <header>
    <h1>Movie Database</h1>
    </header>
    <main>
      <Search handleInput={this.handleInput} movieFinder={this.movieFinder}/>
      <Movie />
    </main>
   </div>
  );
  }
}

export default App;
