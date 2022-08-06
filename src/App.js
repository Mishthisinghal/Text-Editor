import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mymode, setmymode] = useState('light');
  const [type, settype] = useState(null);
  const [msg, setmsg] = useState(null);

  const showalert = (message, typo) => {
    setmsg(message);
    settype(typo);

    setTimeout(() => {
      settype(null);
      setmsg(null);
    }, 1700);
  }

  const changemode = () => {
    if (mymode === 'light') {
      setmymode('dark');
      document.body.style.backgroundColor = '#343333';
      showalert("Dark Mode Enabled", "success");
    } else {
      setmymode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode Enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Text Editor" mode={mymode} togglemode={changemode} />
        <Alert alerttype={type} alertmsg={msg} />

        <Routes>
          <Route exact path="/about" element={<About mode={mymode}/>} />
          <Route exact path="/" element={<Textarea mode={mymode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
