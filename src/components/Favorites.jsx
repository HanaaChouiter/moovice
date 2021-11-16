import React, { Component } from 'react';

class Favorites extends Component {
    constructor(){
        super()

        this.state={
            movies: [],
            favIDs: this.getStorage()
        }

    }

    componentDidMount() {
        this.state.favIDs.forEach(favId => (
            this.getMovie(favId)
        ));
    }
    
    getStorage() {
        const id = localStorage.getItem("favorites")
        return (
            JSON.parse(id)
        )
    }
    
    
    getMovie(id){
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=74ff4d5b18f55c304a239fadf716fe2f`)
        .then(result => result.json())
        .then(data => {
            this.setState({movies:[...this.state.movies, data]})
        })
    }
    
    
    
        render() {
            return (
                <div className="container">
                <h1 className="text-light">Favorites</h1> 
                <div className="row">
                {this.state.movies.map((movie) => {
                            return (
                                <div className="col-4  my-3" key={movie.id}>
                                    <div className="m-y h-100">
                                        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=""/>
                                        <h1>{movie.title}</h1>
                                        <p>{movie.release_date}</p>
                                        <p>{movie.overview}</p>
                                    </div>
                                </div>
                                ) 
                            })}
                    </div>
                 </div>
            )
        }
    }


export default Favorites;