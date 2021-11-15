import React, { Component } from 'react';
import Card from './Card.jsx'

class Popular extends Component {
    constructor(){
        super()

            this.state={
                movies: []
            }
        
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f")
        .then(result => result.json())
          .then(data => {
            this.setState({ movies: data.results })
            // console.log(result)
          })
          .catch(err => {
            console.log(err)
          })
        }

    render() {
      const { movies} = this.state
        return (
          <>
          <div className="container">
          <h1 className="text-light my-3">Popular</h1>
            <div className="row">
                <Card movies={movies}/>
              </div>
            </div>
          </>
        
        );
    }
}

export default Popular;