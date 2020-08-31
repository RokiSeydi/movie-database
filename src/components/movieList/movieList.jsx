import React from 'react';
import Movie from '../movie';

function movieList ({ movieList }) {
        return (    
            <section className="findings">
                {movieList.map(movie => (
                    <Movie movie={movie}/>
                ))}
          </section>
         );
    }

 
export default movieList;