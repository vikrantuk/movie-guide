import React from 'react';

const Card = ({ movies }) => {
    // const {id} = props;
    // const {name,email} = id;
    // console.log(movies);
    return(
        <div className="bg-black white dib tc br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='Movie Name' src={movies.Poster} />
            <div>
                <h2>{movies.Title}</h2>
                <p>Genre: {movies.Genre}</p>
                <p>Released Date: {movies.Released}</p>
                <p>Movie Length: {movies.Runtime}</p>
                <p>IMDB Rating: {movies.imdbRating}</p>
                <p>Actors: {movies.Actors}</p>
                {/* <p>Plot: {movies.Plot}</p> */}
            </div>
        </div>
    );
}

export default Card;