import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from './context/AuthContext';

// pages
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login"
import { Customers } from './pages/customer/Customers'


const App = () => {

  const { darkMode } = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext)


  const RequiredAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>
  }

  console.log(currentUser)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />

            <Route index element={
              <RequiredAuth>
                <Home />
              </RequiredAuth>} />

              <Route path="customers">
              <Route index
                element={
                  <RequiredAuth>
                    <Customers />
                  </RequiredAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    )
}

export {App};
