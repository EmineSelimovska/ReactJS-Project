import AboutUs from "./AboutUs";
import AdvanceSearch from "./AdvanceSearch";
import Agents from "./Agents";
import Header from "./Header";
import Menu from "./Menu-area";
import Preload from "./Preloader";
import PromoBanner from "./PromoBanner";
import Service from "./Service";
import Slider from "./Slider";

export default function Home(){
    return(
       <>
       <Preload/>
        <Header/>
        <Menu/>
        <Slider/>
        <AdvanceSearch/>
        <AboutUs/>
        <Service/>
        <PromoBanner/>
        <Agents/>
        </>
    )
}