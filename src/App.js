
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Nav from './components/layout/Nav/Nav';
import MyProfil from './components/myProfil/myProfil';
import ShoppingList from './components/shoppingList/shoppingList';
import Mylink from './components/Link/link';
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
          <Route path="/myProfil">
            <MyProfil />
          </Route>
          <Route path="/link">
            <Mylink />
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

