import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {

  const [mode, setMode] = useState("light");
  //weather dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#100f0f";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutiles - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutiles - Light Mode";
    }
  };
  return (
    <>
        <Navbar title="TextUtiles " mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />
        
        <div className="container my-4">
              <TextForm
                showAlert={showAlert}
                heading=" Try Textutiles - Word Counter, Character Counter Remove extra spaces"
                mode={mode}
              /> 
      </div>
    </>
  );
}

export default App;
