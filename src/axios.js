import axios from 'axios'

//base url make requests to the movie database
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

//==>if we send a request like "instance.get('/foo-bar')" the request will be like "https://api.themoviedb.org/3/foo-bar"

export default instance
