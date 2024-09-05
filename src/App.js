import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import "./App.css"
import MiscUnderMaintenance from './Pages/MiscUnderMaintenance';
import MiscError from './Pages/MiscError';
import VerticalForm from './Components/VerticalForm';
import AuthLogin from './Pages/AuthLogin';
import AuthRegister from './Pages/AuthRegister';
import AuthForgotPassword from './Pages/AuthForgotPassword';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/misc-error-page' element={<MiscError />} />
          <Route path='/misc-under-maintenance-page' element={<MiscUnderMaintenance />} />
          <Route path='/vertical-form' element={<VerticalForm />} />
          <Route path='/auth-login' element={<AuthLogin />} />
          <Route path='/auth-register' element={<AuthRegister />} />
          <Route path='/auth-forgot-password' element={<AuthForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
