import React, { Component } from 'react';

class Movie extends Component {

        render() {
          const {
            Title,
            Year,
            Type,
            Poster,    
          } = this.props.movies;
      
          return (
            <div >
              <img src={Poster} alt="Movie Poster" />
              <section>
                <h2>{Title}</h2>
                <p>
                  <span>{Year}</span>
                  <span>{Type}</span>
                </p>
              </section>
            </div>
          );
        }
      }
export default Movie;