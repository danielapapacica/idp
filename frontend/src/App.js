import React, {useState, useEffect} from 'react';
import './App.scss';
import Layout from './Layout/Layout';
import Navbar from './Bar/Bar';
import Account from './Account/Account';
import Register from './Account/Register';
import FilterPage from './Filter/FilterPage';
import AdPage from './AdPage/AdPage';
import NewAdPage from './NewAd/NewAdPage';


import {BrowserRouter, Switch, Route} from "react-router-dom";

import Categories from './Layout/CategoriiMenu/GetCategories';
import GDPRpage from './GDPR/GDPRpage';
import FAQpage from './FAQ/FAQpage';
import ProfilePage from './Profile/ProfilePage';


function App() {

  let mycategories = Categories.categories;

  return (
    <div className="App">

      
    <BrowserRouter basename="/">
      <Navbar/>

      <Switch>
        <Route exact path={`/`} exact component={Layout}/>
        <Route exact path={`/account`} exact component={Account}/>
        <Route exact path={`/account/register`} exact component={Register}/>
        <Route exact path={`/filter`} exact component={FilterPage}/>
        <Route exact path={`/ad/:id`} exact component={AdPage}/>

        {mycategories.map(element => 
          <Route exact path={`/filter/${element.link}`}>
            <FilterPage categorytitle={element.title}/>
          </Route>
        )}

        <Route exact path={`/ad`} exact component={AdPage}/>
        <Route exact path={`/new`} exact component={NewAdPage}/>
        <Route exact path={`/gdpr`} exact component={GDPRpage}/>
        <Route exact path={`/faq`} exact component={FAQpage}/>
        <Route exact path={`/profile`} exact component={ProfilePage}/>

      </Switch>

    </BrowserRouter>



    </div>
  );
}

export default App;
