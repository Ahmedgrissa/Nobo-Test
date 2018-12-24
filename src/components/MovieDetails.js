import React from "react";

const MovieDetails = props => {
  console.log(props);
  const movie = props.location.state.movie;
  let link = movie.show.image ? movie.show.image.original : null;
  let typeList = [];
  if (movie.show.genres.length) {
    typeList = [
      <h3>Genres:</h3>,
      movie.show.genres.map(genre => {
        return (
          <div key={Math.random()}>
            <p>{genre}</p>
          </div>
        );
      })
    ];
  }

  let language = movie.show.language ? (
    <div><h3>Language: </h3>{movie.show.language}</div>
  ) : null;
  let url = movie.show.url ? (
    <div><h3>
      Url: </h3><a href={movie.show.url}>{movie.show.url}</a>
      </div>
  ) : null;
  let name = movie.show.name ? <h2>Title: {movie.show.name}</h2> : null;

  return (
    <div>
      <div className="row">
        <div className="col-md-4 offset-md-4">{name}</div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-1">
          <h3>Summary :</h3>
          <div dangerouslySetInnerHTML={{ __html: movie.show.summary }} />
          {typeList}
          {language}
          <br></br>
          {url}
        </div>
        <div className="col-md-auto">
          <img
            src={link || require("../assets/images/missing-item.png")}
            width="300"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
