import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/LoginPage/Login';
import SignUp from './Components/SignUpPage/SignUp';
import MainPage from './Components/MainPage/MainPage'
import Todo from './Components/Todo/Todo';


const App = () => {
  return (
    <>
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/login" element={<Login />}/>
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default App;



