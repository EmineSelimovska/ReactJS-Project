import { Route, Routes } from "react-router-dom"

import {AuthProvider} from "./contexts/authContext"

import Properties from "./components/Properties"
import Home from "./components/Home"
import Create from "./components/Create"
import Contact from "./components/Contact"
import NotFound from "./components/NotFound"
import Login from "./components/Login"
import Preload from "./components/Preloader"
import Register from "./components/Register"
import PropertyDetails from "./components/PropertyDetails"
import Logout from "./components/Logout"



function App() {
  return (
    <AuthProvider>
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
          <Route path="/search/:searchItem" element={<Properties/>} />
          <Route path="/logout" element={<Logout/>} />


          <Route path="*" element={<NotFound />} />


        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App
