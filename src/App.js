import Main from './pages/main/main';
import About from "./pages/about";
import Profile from "./pages/profile/profile";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;