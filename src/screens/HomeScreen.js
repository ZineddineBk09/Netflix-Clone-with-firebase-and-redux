import React, { useEffect, useState } from 'react'
import Nav from '../Nav'
import Banner from '../Banner'
import Row from '../Row'
import axios from '../axios'
import requests from '../requests'
import './HomeScreen.css'
const HomeScreen = () => {
  const [movies, setMovies] = useState({})
  const imageLink = 'https://image.tmdb.org/t/p/original'

 

  return (
    <div className='homeScreen'>
      <Nav />
      <Banner />
      <h1>Netflix</h1>
      <Row title={'NETFLIX ORIGINALS'} api={requests.fetchNetflixOriginals} />
      <Row title={'TRENDING NOW'} api={requests.fetchTrending} />
      <Row title={'TOP RATED'} api={requests.fetchTopRated} />
      <Row title={'ACTION MOVIES'} api={requests.fetchActionMovies} />
      <Row title={'COMEDY MOVIES'} api={requests.fetchComedyMovies} />
      <Row title={'HORROR MOVIES'} api={requests.fetchHorrorMovies} />
      <Row title={'ROMANCE MOVIES'} api={requests.fetchRomanceMovies} />
      <Row title={'DOCUMENTARIES'} api={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen
