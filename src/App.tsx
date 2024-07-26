import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/web-react-portfolio/" element={<Home />} />
        <Route path="/web-react-portfolio/terms" element={<Terms />} />
        <Route path="/web-react-portfolio/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;