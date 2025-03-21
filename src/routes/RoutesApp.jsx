import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import Home from '../pages/Home';
import MyJobEvents from '../pages/MyJob';
import Profile from '../pages/Profile';
import Navbar from '../components/Nav';

function RoutesBrowser() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myJobEvents" element={<MyJobEvents />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    );
  }
  
  export default RoutesBrowser;