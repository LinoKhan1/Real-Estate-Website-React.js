// React
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Styles & CSS
import './styles/Global.scss';

// Pages
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Contact from './pages/contact/Contact.jsx';
import News from './pages/news/News.jsx';

// Components
import Layout from './components/layout/layout.jsx';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App
