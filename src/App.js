import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <header className="App-header">
        <Link className="site-logo" to='/'>Author</Link>
        <nav>
        <Link to='/about'>About</Link>
        </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}
export default App;
