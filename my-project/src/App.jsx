import { Route, Routes } from "react-router-dom"

import { AuthProvider } from "./contexts/authContext"

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
import ErrorBoundary from "./components/ErrorBoundary"
import AuthGuard from "./components/guards/AuthGuard"
import AuthUserGuard from "./components/guards/AuthUserGuard"

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <div>
          <Preload />

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/properties/:propertyId" element={<PropertyDetails />} />

            <Route element={<AuthGuard />}>
              <Route path="/create" element={<Create />} />
              <Route path="/properties/:propertyId/edit" element={<Edit />} />
              <Route path="/logout" element={<Logout />} />
            </Route>

            <Route element={<AuthUserGuard />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>


            <Route path="*" element={<NotFound />} />


          </Routes>
        </div>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
