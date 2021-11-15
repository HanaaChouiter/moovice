import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { movies } = this.props
        return (
            <>
            {movies.map(movie => (
            <div className="col-3 my-3" >
                <div className=" my-1 h-100 box"  key={movie.id} >
                    <img className="image mb-3" src={"https://image.tmdb.org/t/p/w300/"+movie.poster_path} alt=""/>
                    <h4 className="text-center text-light">{movie.title}</h4>
                    <p className="text-center text-warning ">{movie.release_date}</p>
                    <p className=" text-light ms-3 ">{movie.overview}</p>
                </div>
            </div>
            ))} 
        </>
        );
    }
}

export default Card;