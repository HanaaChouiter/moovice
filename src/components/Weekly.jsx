import React, { Component } from 'react';
import Card from './Card.jsx'
import moment from 'moment';

class Weekly extends Component {
    constructor() {
        super()

        this.state = {
            movies: []
        }
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



    render() {
        const { movies } = this.state
        // console.log(movies)
        return (
            <>
                <div className="container">
                    <h1 className="text-light my-3">Weekly</h1>
                    <div className="row">
                        {
                            movies.map(movie => {
                                return <Card
                                    original_title={movie.original_title}
                                    release_date={movie.release_date}
                                    overview={movie.overview}
                                    poster_path={movie.poster_path}
                                    key={movie.id}
                                />
                            })
                        }
                    </div>
                </div>
            </>

        );
    }
}

export default Weekly;