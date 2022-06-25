//import logo from './logo.svg';
import './App.css';
import React from 'react';
// We import our Welcome component from our components folder so that we can eventually return it.
import Header from './components/header';
import Footer from './components/footer';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">
     
  <Header /> 
  <Navigation/>
  <Footer/>
      
    </div>
  );
}

export default App;
