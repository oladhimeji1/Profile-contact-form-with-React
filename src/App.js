import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
    <div className="content">
        <Routes>
          <Route element={ <HomePage /> } exact path="/" />
          <Route element={ <Contact /> } path="/contact" />
        </Routes>
    </div>
  </Router>
  );
}

export default App;
