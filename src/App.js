import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route
          path='/'
          element={<Home/>}
        />
      <Route
          path='/login'
          element={<Login/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
