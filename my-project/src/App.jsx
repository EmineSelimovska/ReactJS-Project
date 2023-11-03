import Preload from "./components/Preloader"
import Header from "./components/Header"
import Menu from "./components/Menu-area"
import Slider from "./components/Slider"
import AdvanceSearch from "./components/AdvanceSearch"
import AboutUs from "./components/AboutUs"
import LatestProperty from "./components/LatestProperty"
import Service from "./components/Service"
import PromoBanner from "./components/PromoBanner"
import Agents from "./components/Agents"
import LatestBlog from "./components/LatestBlog"
import Footer from "./components/Footer"
function App() {

  return (
    <div>
      <Preload/>
      <Header/>
    <Menu/>
      <Slider/>
      <AdvanceSearch/>
     <AboutUs/>
    <LatestProperty/>
     <Service/>
      <PromoBanner/>
      <Agents/>
    <Footer/>
    </div>

  )
}

export default App
