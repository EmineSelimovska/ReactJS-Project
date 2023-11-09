
import Menu from "./components/Menu-area"
import Properties from "./components/Properties"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Gallery from "./components/Gallery"
import Header from "./components/Header"
import Contact from "./components/Contact"
import Blog from "./components/Blog"
import NotFound from "./components/NotFound"
import Login from "./components/Login"
import Preload from "./components/Preloader"
import Register from "./components/Register"
function App() {

  return (
    <div>
      <Preload />
    
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />



        <Route path="*" element={<NotFound />} />


      </Routes>

     
    </div>

  )
}

export default App
