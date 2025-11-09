import './App.css';
import Home from './components/home';
import Login from './components/login.jsx';
import Navbar from './components/navbar';
import SignUp from './components/signup.jsx';
// import Mycomponent from './components/Mycomponent.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* 2. Place Navbar outside <Routes> so it stays on every page */}
      <Navbar />

      {/* 3. Define your routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* You will add more routes here, like /login, /profile, etc. */}
      </Routes>

      {/* <Mycomponent/> */}
    </div>
  );
}

export default App;
