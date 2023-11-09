import AboutUs from "./AboutUs";
import AdvanceSearch from "./AdvanceSearch";
import Agents from "./Agents";
import Footer from "./Footer";
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
       
        <Slider/>
        <AdvanceSearch/>
        <AboutUs/>
        <Service/>
        <PromoBanner/>
        <Agents/>
       
        </>
    )
}