import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Wardrobe from './pages/wardrobe';
import Faq from './pages/faq';
import Men from './pages/men';
import Women from './pages/women';
import Cloth from './pages/singleItem';
import Error from './pages/error';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/wardrobe/" component={Wardrobe} />
        <Route exact path="/faq/" component={Faq} />
        <Route exact path="/wardrobe/men" component={Men} />
        <Route exact path="/wardrobe/women" component={Women} />
        <Route exact path="/wardrobe/:phrase" component={Cloth} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
