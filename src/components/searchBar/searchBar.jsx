import React, { Component } from 'react';
import styles from './searchBar.module.scss';

class Search extends Component{  
    render (){  
return ( 
    <section>
    <input type="text" placeholder="what are we watching today?" className={styles.searchbox} onChange={this.handleInput} onKeyPress={this.movieFinder}/>
    </section>
    );
 }
}
export default Search;
