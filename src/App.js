import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Movie from './Components/Movie';
import Details from './Components/Details'
import Home from './Components/Home'
import Contactus from './Components/Contactus';
import MovieSearch from './Components/Search';
import {Provider} from 'react-redux'
import store from './store2';
import MovieList from './Components/MovieList';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Navbar firstLink='Home'/>
          <Routes>
            <Route path='/' element={<Home/>}/>
              <Route path='/movie/:id' element={<Details />}/>
              <Route path='/searchmovies' element={<MovieSearch/>}/>
              <Route path='/movielist' element={<MovieList/>}/>
              <Route path='/contactus' element={<Contactus/>}/>
          </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
