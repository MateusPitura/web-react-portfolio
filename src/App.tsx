// import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'

// const Terms = lazy(() => import('./pages/Terms'))
// const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
// const NotFound = lazy(() => import('./pages/NotFound'))

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      {/* <Suspense fallback={<div className='min-h-[100vh] bg-surface-light dark:bg-surface-dark w-full'/>}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      {/* </Suspense> */}
      <Footer />
    </Router>
  );
};

export default App;