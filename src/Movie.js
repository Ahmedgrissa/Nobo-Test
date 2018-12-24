import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Movie = ({ movie }) => {
    let link = movie.show.image ? movie.show.image.original : null
    return (
        <NavLink className="card" to={{ pathname: `/MovieDetails${movie.show.id}`, state: { movie: movie } }} >
            <div className="text-center">
                <img src={link || require('../assets/images/missing-item.png')} className="card-img-top" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{movie.show.name}</h5>
                <div dangerouslySetInnerHTML={{ __html: movie.show.summary }} />
            </div>
        </NavLink>
    )
}

export default withRouter(Movie);