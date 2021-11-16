import React, { Component } from 'react';
import moment from 'moment';

class WeeklyBattle extends Component {
    constructor() {
        super()

        this.state = {
            movies: [],
            currentBattle: 0,
            favorites: []
        }

        this.handleMovie = this.handleMovie.bind(this)
    }

    componentDidMount() {
        fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${moment().subtract(7, "d").format('YYYY-MM-DD')}&primary_release_date.lte=${moment().format('YYYY-MM-DD')}&api_key=74ff4d5b18f55c304a239fadf716fe2f`)
            .then(result => result.json())
            .then(data => {
                this.setState({ movies: data.results })
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleMovie(id) {
        let { favorites, currentBattle } = this.state

        // if ( currentBattle === 18 ){
        //   alert('OOGA BOOGA')
        // }
        // else{
        this.setState({
            currentBattle: currentBattle = currentBattle + 2,
            favorites: [id, ...favorites]
        })
        // console.log(favorites)
    }

    render() {
        const film = this.state.movies.filter((film, index) =>
            index === this.state.currentBattle || index === this.state.currentBattle + 1)
        localStorage.setItem("favorites", JSON.stringify(this.state.favorites))
        // console.log(this.state.currentBattle);
        return (
            <div>
                <div className="container">
                    <h1 className="text-light my-3">PopularBattle</h1>
                    <div className="row">
                        {
                            film.map((movie) => {
                                return (
                                    <>
                                        <div className="col-3 my-3" key={movie.id} onClick={() => this.handleMovie(movie.id)} >
                                            <div className=" my-1 h-100 box" >
                                                <img className="image mb-3" src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} alt="" />
                                                <h4 className="text-center text-light">{movie.original_title}</h4>
                                                <p className="text-center text-warning ">{movie.release_date}</p>
                                                <p className=" text-light ms-3 ">{movie.overview}</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                        {this.state.currentBattle === 20 && <p className="text-light">Vous avez parcouru tous les films !</p>}
                    </div>
                </div>
            </div>

        );
    }
}

export default WeeklyBattle;