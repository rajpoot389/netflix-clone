import React from 'react';
import Banner from './Component/Banner';
import Row from './Component/Row';
import requests from './requests';
import './App.css';
import Nav from './Component/Nav';




const App = () => {

  return (
    <div className="app">
      <Nav />
      <Banner />


      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Top Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
      <Row title="Movies By Marvel Studio" fetchUrl={requests.fetchMarvelMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentries} />
      <div style={{ height: '10px' }}></div>

    </div>
  )
}

export default App
