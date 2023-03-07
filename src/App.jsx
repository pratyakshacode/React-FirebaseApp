import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import BookStore from './components/BookStore';

function App() {

  return (
    
            

      <Router>
      <div>
    <Link to='/'>Home</Link>
    <Link to='/login'>Login</Link>
    <Link to='/register'>Register</Link>
    <Link to={'/bookstore'}>BookStore</Link>
    </div>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/bookstore' element={<BookStore/>}/>
        </Routes>


      </Router>
  )
}

export default App
