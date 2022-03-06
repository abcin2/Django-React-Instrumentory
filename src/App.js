import { Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';

import './App.css';
// import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';

import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

function App() {

  // add all routes to 'models.py'  

  return (
    <div id="test" className="App">
      {/* <Header /> */}
      <Routes>
        {/* Example of using Header on only certain pages */}
        {/* <Route exact path="/" element={<><Header /><ExampleListPage /></>} /> */}
        {/* Auth Routes */}
        <Route exact path="login/" element={<AuthProvider><Login /></AuthProvider>} />
        <Route exact path="register/" element={<Register />} />
        <Route exact path="forgot_password/" element={<ForgotPassword />} />
        {/* Teacher Routes */}
        <Route exact path="dashboard/" element={<AuthProvider><PrivateRoute><Dashboard /></PrivateRoute></AuthProvider>} />
        <Route exact path="dashboard_test/" element={<AuthProvider><Dashboard /></AuthProvider>} />
        {/* EXAMPLE ROUTE FOR SPECIFIC ID */}
        {/* <Route exact path="example/:id" element={<ExamplePage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
