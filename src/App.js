import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Notification from './components/Notification';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import { ColorThemeProvider } from './contexts/ColorThemeContext';

function App() {

  const [notifmsg, setNotifmsg] = useState('');

  const showNotif = (msg) => {
    setNotifmsg(msg);
    setTimeout(() => {
      setNotifmsg('');
    }, 1500)
  }

  return (
    <ThemeProvider>
      <ColorThemeProvider>
        <BrowserRouter>
          <Navbar title="StringCraft" showNotif={showNotif} />
          <Notification notifmsg={notifmsg} />
          <Routes>
            <Route exact path="/" element={<Home showNotif={showNotif} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ColorThemeProvider>
    </ThemeProvider>
  );
}

export default App;
