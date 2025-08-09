import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

// Import your Layout component
import Layout from './components/Layout'; // Adjust path if your Layout.js is elsewhere

import Ramdhura from './pages/otherplaces/Ramdhura';
import Sillerygaon from './pages/otherplaces/Sillerygaon';
import Rockyisland from './pages/otherplaces/Rockyisland';
import Sittong from './pages/otherplaces/Sittong';
import Takdahpage from './pages/otherplaces/Takdahpage';
import Gallery from './pages/Gallery';
import Travelpack from './pages/Travelpack';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Jhandi from './pages/otherplaces/Jhandi';
import Purbasthali from './pages/otherplaces/Purbasthali';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        // Render Layout and wrap Routes inside it
        <Layout>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/aboutpage' element={<About />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/travelpackage' element={<Travelpack />} />

            <Route path="/jhandi" element={<Jhandi />} />
            <Route path="/purbasthali" element={<Purbasthali />} />
            <Route path="/takdah" element={<Takdahpage />} />
            <Route path="/ramdhura" element={<Ramdhura />} />
            <Route path="/sillerygaon" element={<Sillerygaon />} />
            <Route path="/sittong" element={<Sittong />} />
            <Route path="/rockyisland" element={<Rockyisland />} />
          </Routes>
          <Footer />
        </Layout>
      )}
    </BrowserRouter>
  );
}

export default App;