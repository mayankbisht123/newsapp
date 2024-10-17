import React, { Component } from 'react';
import Nav from './components/Nav';
import NewsItems from './components/NewsItem';
import './App.css';

class App extends Component
{
  render()
  {
    return(
      <>
        <Nav home='Home' about='About' cont='Contacts' email='E-Mail' no='Phone' address='Address'/>
        <div className='News'>
          <NewsItems/>
          <NewsItems/>
          <NewsItems/>
        </div>
      </>
    );
  }
}

export default App;