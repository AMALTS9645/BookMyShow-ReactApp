import './App.css';
import Header from './components/Header'
import SliderImages from './components/SliderImages';
import CardSlider from './components/CardSlider'; 
import Premieres from './components/Premieres';
import Footer from './components/Footer';
// import AllMovies from './components/AllMovies';
import AllMoviesFetch from './components/AllMoviesFetch';
// import SingleMovie from './components/SingleMovie';
import SingleMovieFeth from './components/SingleMovieFetch';
import Registration from './components/Registration';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
            <Route exact path="/"  element={<><SliderImages/><CardSlider/><Premieres/></>}/>
            <Route exact path="/movies" element={<AllMoviesFetch />}></Route> 
            <Route exact path="/movies/:movid" element={<SingleMovieFeth />}></Route> 
            <Route exact path="/register" element={<Registration />}></Route> 
         </Routes>
        <Footer/>
      </div>
    </Router>
   
  );
}

export default App;
