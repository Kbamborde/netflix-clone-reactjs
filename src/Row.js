import React, { useState, useEffect } from 'react';
import axios from './axios';

const base_url = "https://images.tmdb.org/t/p/original/";

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    /* Fetching data through API */
    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            const data = await request.data.results;
            setMovies(data);
            return request;
        };
        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return(
        <div className='row'>
            <h2>{title}</h2>

            <div className="rows__posters">
                {movies.map((movie, index)=>{
                    return(
                        <img key={index} src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                    )
                })}
            </div>
        </div>
    )
}

export default Row;