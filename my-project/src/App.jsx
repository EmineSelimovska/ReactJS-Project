import { useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"

import * as authService from "./servises/authService"
import AuthContext from "./contexts/authContext"

import Properties from "./components/Properties"
import Home from "./components/Home"
import Create from "./components/Create"
import Contact from "./components/Contact"
import NotFound from "./components/NotFound"
import Login from "./components/Login"
import Preload from "./components/Preloader"
import Register from "./components/Register"
import PropertyDetails from "./components/PropertyDetails"



function App() {
  const navigate = useNavigate()
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);
    setAuth(result)

     navigate('/');
  }

  return (

    <AuthContext.Provider value={{ loginSubmitHandler }}>
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
