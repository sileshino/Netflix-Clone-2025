import React from 'react'
import Row from '../Row/Row'
import requests from '../../utils/requests'
const RowList = () => {
  return (
    <>
      <Row
      Title= "NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}
       />
     <Row Title="Trending Now" fetchUrl={requests.fetchTrending} />

     <Row Title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
     <Row Title="Action Movies" fetchUrl={requests.fetchActionMovies} />
     <Row Title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
     <Row Title="Horreor Movies" fetchUrl={requests.fetchHorrorMovies} />
     <Row Title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
     <Row Title="Tv Shows" fetchUrl={requests.fetchTvShow} />
     <Row Title="Documentaries" fetchUrl={requests.fetchDocumentaryMovies} />

    </>

  )
}

export default RowList
