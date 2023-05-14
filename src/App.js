import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Movie from './Components/Movie';
import Details from './Components/Details'
import Home from './Components/Home'
import Contactus from './Components/Contactus';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
              <Route path='/movie/:id' element={<Details />}/>
              <Route path='/contactus' element={<Contactus  />}/>
            
          </Routes>
      </Router>
    </div>
  );
}

export default App;
