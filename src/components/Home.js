import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';

class Home extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        axios.get('https://api.tvmaze.com/search/shows?q=robin%20hood')
            .then(res => {
                console.log(res);
                this.setState({
                    movies: res.data
                });
            })
    }

    render() {
        //title, imageLink, Summary
        const moviesList = this.state.movies.map(movie => {
            return (
                <div className="col-3" key={movie.show.id}>
                    <Movie movie={movie} />
                </div>
            )
        })

        return (
            <div className="Home" >
                <div className="container">
                    <div className="row">
                        {moviesList}
                    </div>
                </div>
            </div >
        )
    }
}

export default Home;