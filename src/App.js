import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Movie from './Components/Movie';
import Details from './Components/Details'
import Home from './Components/Home'
import Contactus from './Components/Contactus';
import MovieSearch from './Components/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar firstLink='Home'/>
          <Routes>
            <Route path='/' element={<Home/>}/>
              <Route path='/movie/:id' element={<Details />}/>
              <Route path='/searchmovies' element={<MovieSearch/>}/>
            
          </Routes>
      </Router>
    </div>
  );
}

export default App;
