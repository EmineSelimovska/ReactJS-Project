import { Route, Routes } from "react-router-dom"

import {AuthProvider} from "./contexts/authContext"

import Properties from "./components/properties/Properties"
import Home from "./components/home/Home"
import Create from "./components/create/Create"
import Contact from "./components/contact/Contact"
import NotFound from "./components/not-found/NotFound"
import Login from "./components/login/Login"
import Preload from "./components/preloader/Preloader"
import Register from "./components/register/Register"
import PropertyDetails from "./components/property-details/PropertyDetails"
import Logout from "./components/logout/Logout"
import Edit from "./components/edit/Edit"



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
          <Route path="/properties/:propertyId/edit" element={<Edit />} />

          <Route path="/search/:searchItem" element={<Properties/>} />
          <Route path="/logout" element={<Logout/>} />


          <Route path="*" element={<NotFound />} />


        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App
