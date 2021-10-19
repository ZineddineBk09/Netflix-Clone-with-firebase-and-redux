import axios from './axios'
import React, { useEffect, useState } from 'react'
import requests from './requests'
import './Banner.css'

const Banner = () => {
  const [movie, setMovie] = useState({})
  const imageLink = 'https://image.tmdb.org/t/p/original'

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  useEffect(async () => {
    const request = await axios.get(requests.fetchNetflixOriginals)
    setMovie(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ]
    )
    // console.log('MOVIEEEESSSS: ', request)
  }, [])
  console.log('MOVIEEE : ', movie)
  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <h1 className='banner__title'>{movie.name}</h1>
      <div className='banner__buttons'>
        <button className='banner__btn'>Play</button>
        <button className='banner__btn'>My list</button>
      </div>
      <p className='banner__description'>{truncate(movie.overview, 150)}</p>
      <div className='banner--fadeBottom'></div>
    </header>
  )
}

export default Banner
