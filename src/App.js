import React, { Component } from 'react';
import Nav from './components/Nav';
import News from './components/News';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingBar from 'react-top-loading-bar'

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      progress:0
    }
    console.log(process.env.REACT_APP_API);
  }

  setProgress=(temp)=>{
    this.setState(
      {
        progress:temp,
      }
    )
  }
  
  
  render()
  {
    return(
      <>
        <Nav home='Home' about='About' cont='Contacts' email='E-Mail' no='Phone' address='Address'/>
        <LoadingBar color='#f11946' progress={this.state.progress} onLoaderFinished={() => this.setProgress(0)} />
        <News setProgress={this.setProgress}/>
      </>
    );
  }
}

export default App;