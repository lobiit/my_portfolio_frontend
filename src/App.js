import React from 'react';
import './App.css';
import {About, Work, Header, Skills, Footer, Testimonial} from "./container";
import {Navbar} from "./components";

function App() {
  return (
    <div className="App">
        <Navbar />
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
