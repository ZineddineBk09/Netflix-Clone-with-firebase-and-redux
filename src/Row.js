import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const Row = ({ title, api }) => {
  const [movies, setMovies] = useState([])
  const imageLink = 'https://image.tmdb.org/t/p/original'
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(async () => {
    const request = await axios.get(api)
    setMovies(request.data.results)
    console.log('MOVIEEEESSSS: ', request)
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  const handleClick = (movie) => {
    // console.table(movie?.title)
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
        })
        .catch((error) => console.log(error))
    }
  }

  return (
    <div className='row'>
      <h2 className='row__title'>{title}</h2>
      <div
        className={`row__movies ${
          title === 'NETFLIX ORIGINALS' && 'netflix__originals'
        }`}
      >
        {movies.map((movie) => {
          return (
            <div className='row__movie'>
              <img
                src={`${imageLink}${
                  title === 'NETFLIX ORIGINALS'
                    ? movie?.poster_path
                    : movie?.backdrop_path
                }`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
              <h3>{movie?.name || movie?.title}</h3>
            </div>
          )
        })}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
