import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav></Nav>
      <Routes>  
        <Route path="/login" element={<Login/>}/>
        <Route path="/Cart" element={<h1>Cart</h1>}/>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
