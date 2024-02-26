import Navbar from './Componet/Navbar/Navbar';
import Header from './Componet/Header/Header';
import JobDiscription from './Componet/JobDesription/JobDiscription';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/job-details/:jobId" element={<JobDiscription />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
