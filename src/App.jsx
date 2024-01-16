import Home from "./pages/Home"
import "../src/App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HeaderSocial from "./components/headerSocial/HeaderSocial"
import Login from "./pages/Login"
import Header from "./components/Header/Header"
import Regsister from "./pages/Register"
function App() {
  return (
    <>
      <Router>
        <HeaderSocial />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Regsister />}></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
