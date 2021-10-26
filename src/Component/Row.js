import React, { useState, useEffect } from 'react'
import axios from '../axios';
import movieTrailer from 'movie-trailer';
import "./CSS/row.css";
import Youtube from 'react-youtube';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movie, setMovie] = useState([]);
    const [trailer, setTrailer] = useState();
    const base_url = 'https://image.tmdb.org/t/p/original'
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(fetchUrl);
            setMovie(response.data.results);
        }
        fetchData();

    }, []);


    // movieTrailer('wanted').then((data) => {
    //     console.log(data);
    // }).catch((e) => {
    //     console.log(e);
    // })


    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const [isMovieClicked, setIsMovieClicked] = useState(false);
    const handleClick = (movie) => {
        const movie_name = (movie.original_title || movie.title || movie.name);

        movieTrailer(movie_name).then((data) => {
            if (data) {
                const genUrl = data.split("?")[1];
                const trailerId = new URLSearchParams(genUrl);
                setTrailer(trailerId.get('v'));
                if (!isMovieClicked) {
                    console.log("enter the game");
                    setIsMovieClicked(true);
                } else if (isMovieClicked) {
                    setIsMovieClicked(false);
                }
            }
            else if (isMovieClicked) {
                setIsMovieClicked(false)
            }

        }).catch((e) => {
            console.log(e);
        })
    }



    console.log(isMovieClicked);
    return (
        <div className="row my-5">
            <h5>{title}</h5>
            <div className="row_poster">
                {movie.map((movie) => (
                    <img onClick={() => handleClick(movie)} key={movie.id} className={isLargeRow ? "large_row_img" : "row_poster_image"} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name || movie.original_name}></img>
                ))}

            </div>

            {isMovieClicked && <Youtube videoId={trailer} opts={opts} />}
        </div >
        // <Youtube videoId='XtMThy8QKqU' opts={opts} />
    )
}

export default Row
