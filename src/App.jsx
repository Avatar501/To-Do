// import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Header from './components/Header';
import { Outlet } from "react-router-dom";


function App() {
  return (
    // <Router>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //   </Routes>
    // </Router>
    <Outlet/>
  );
}

export default App;
