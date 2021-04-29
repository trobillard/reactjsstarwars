
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Nav from './components/layout/Nav/Nav';
import Homepage from './components/homepage/homepage';
import ShoppingList from './components/shoppingList/shoppingList';
import Spe from './components/spe/spe';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div>
    <Header/>
    <Router>
    <Nav/>
    <main className = "container my-5">
    <Switch>
          <Route path="/myList">
            <ShoppingList />
          </Route>
          <Route path="/homepage">
            <Homepage />
          </Route>
          <Route path="/spe">
            <Spe />
          </Route>
          <Route path="/">
            <ShoppingList />
          </Route>
        </Switch>
    </main>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;

