import React, { Component } from 'react';

class Card extends Component {
    render() {
        const {  original_title, release_date, overview, poster_path} = this.props
        
        return (
            <>
            
            <div className="col-3 my-3" >
                <div className=" my-1 h-100 box"  >
                    <img className="image mb-3" src={"https://image.tmdb.org/t/p/w300/"+poster_path} alt=""/>
                    <h4 className="text-center text-light">{original_title}</h4>
                    <p className="text-center text-warning ">{release_date}</p>
                    <p className=" text-light ms-3 ">{overview}</p>
                </div>
            </div>
            
        </>
        );
    }
}

export default Card;