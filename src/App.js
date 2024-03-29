// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";

import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alerts, setAlerts] = useState(null);

  const showAlerts = (message, type) => {
    setAlerts({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlerts(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlerts("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white;";
      showAlerts("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
   
      {/* <Navbar title="TextUtils" aboutText ="About TextUtils" /> */}
      {/* <Navbar/>  */}
 
  <Navbar title=" TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alerts alerts={alerts} />
      <div className="container my-3">
      
         
          <TextForm
          showAlerts={showAlerts}
          heading="Enter the text to analyze below"
          mode={mode}
        />
        
      </div>
      <About  mode={mode}/>
     
    </>
  );
}

export default App;
