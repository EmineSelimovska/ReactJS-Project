
import Menu from "./components/Menu-area"
import Properties from "./components/Properties"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Create from "./components/Create"
import Header from "./components/Header"
import Contact from "./components/Contact"
import Blog from "./components/Blog"
import NotFound from "./components/NotFound"
import Login from "./components/Login"
import Preload from "./components/Preloader"
import Register from "./components/Register"
import PropertyDetails from "./components/PropertyDetails"
import { useState } from "react"
import AuthContext from "./contexts/authContext"
function App() {
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values);
  }

  return (

    <AuthContext.Provider value={ {loginSubmitHandler} }>
      <div>
        <Preload />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/create" element={<Create />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/properties/:propertyId" element={<PropertyDetails />} />



          <Route path="*" element={<NotFound />} />


        </Routes>
      </div>
    </AuthContext.Provider>
  )
}

export default App
