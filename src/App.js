
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import React, { useState } from 'react'; //imrs
//React Router
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// import About from './components/About';

function App() {
  const [mode, setMode] = useState('dark'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); //alert is object
  const [redText, setRedText] = useState('Enable RedMode');

  const showAlert = (message, type) =>{ //showAlert is function
      setAlert({
        mesg: message,
        type: type
      })
      setTimeout(() =>{
        setAlert(null);
        }, 15000);
  } 

  const toogleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled" , "success" );
      //document.title = 'TextUtils - darkmode';
    //   setInterval(() => {
    //      document.title = 'TextUtils Is amazing';
    //   }, 2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light  mode has been enabled" ,"success");
      //document.title = 'TextUtils - lightmode';
      
    }
  }

  const RedMode = () =>{
    if(mode === 'danger'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setRedText('Enable RedMode');
    }
    else{
      setMode('danger')
      setRedText('Enable DarkMode')
      document.body.style.backgroundColor = 'dark';
    }
  }

  return (
    
  <>

{/* <Router> */}
  <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode}  RedMode={RedMode} redText={redText}/>

  <Alert alert={alert}/>

  <div className="container my-3">
    {/* <Routes> */}
      {/* <Route exact path="/about" element={<About />} /> */}
      {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} /> */}
    {/* </Routes> */}
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
  </div>
  {/* </Router> */}

     

    
  </>

  );
}

export default App;
