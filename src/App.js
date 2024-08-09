import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Navbar from './components/Navbar';
import Notfound from './components/Notfound';
import Detail from './components/Detail';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='*' element={<Notfound/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/home' element={<Navigate to="/"/>}></Route>
          <Route path='/info' element={<Navigate to="/about"/>}></Route>
          <Route path='/blogs' element={<Navigate to="/blog"/>}></Route>
          <Route path='/blog/:id' element={<Detail/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
