import React from 'react';
import './App.css';
import {About, Work, Header, Skills, Footer, Testimonial} from "./container";

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
