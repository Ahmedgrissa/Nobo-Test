import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import MovieDetails from './components/MovieDetails';
import Home from './components/Home'
import { Route, BrowserRouter, Redirect } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/MovieDetails:movieId' component={MovieDetails} />
          <Route exact path="/" component={Home} />
          <Redirect to='/' />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
