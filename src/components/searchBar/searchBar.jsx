import React from 'react';
import styles from './searchBar.module.scss';

function Search ({handleInput, search}){  
    
return ( 
    <section>
    <input type="text" placeholder="what are we watching today?" className={styles.searchbox} onChange={handleInput} onKeyPress={search}/>
    </section>
    );
 }

export default Search;
