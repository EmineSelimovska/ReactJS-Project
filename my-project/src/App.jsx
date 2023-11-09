
import Menu from "./components/Menu-area"
import Properties from "./components/Properties"
import Footer from "./components/Footer"
import {Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import Gallery from "./components/Gallery"
import Header from "./components/Header"
import Slider from "./components/Slider"
import Contact from "./components/Contact"
import Blog from "./components/Blog"
import NotFound from "./components/NotFound"
function App() {

  return (
    <div>
     <Header/>
    
     <Menu/>
   
      <Routes>
    
      <Route  path="/" element={<Home/>}/> 
     <Route path="/properties" element={<Properties/>}/>
     <Route path="/gallery" element={<Gallery/>}/>
     <Route path="/blog" element={<Blog/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="*" element={<NotFound/>}/>


      </Routes>
    
    <Footer/>
    </div>

  )
}

export default App
