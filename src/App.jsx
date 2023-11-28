import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';


function App(props) {

  return (
    <div className='app'>
      <Nav />
      <Banner />
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow></Row>
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} ></Row>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} ></Row>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} ></Row>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} ></Row>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} ></Row>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} ></Row>
    </div>
  )
}

export default App
