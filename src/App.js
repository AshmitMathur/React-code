// import logo from './logo.svg';
import React , { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setalert] = useState(null);

  const showalert =(message, type)=>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const togglemode =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743' 
      showalert("Dark mode has been enabled","Success")
      document.title = "Text-Tranform/Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showalert("Light mode has been enabled","Success")
      document.title = "Text-Tranform/Light Mode"
    }
  }

  return (
    <>
      <Router>
    <Navbar mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container">
        <Switch>
          <Route exact path="/aboutus">
            <AboutUs mode={mode}/>
          </Route>
          <Route  path="/">
    <TextForm heading="Enter Text" mode={mode} showalert={showalert}/>
          </Route>
        </Switch>
    </div>
    </Router>
  </>
  );
}

export default App;
