import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Movie from './Components/Movie';
import Details from './Components/Details'
import Home from './Components/Home'
import Contactus from './Components/Contactus';
import MovieSearch from './Components/Search';
import { Provider } from 'react-redux';
import Store from './Store';
import List from './Components/List';



function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <Router>
        <Navbar firstLink='Home'/>
          <Routes>
            <Route path='/' element={<Home/>}/>
              <Route path='/movie/:id' element={<Details />}/>
              <Route path='/searchmovies' element={<MovieSearch/>}/>
              <Route path='/contactus' element={<Contactus/>}/>
              <Route path='/mylist' element={<List/>}/>

          </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
