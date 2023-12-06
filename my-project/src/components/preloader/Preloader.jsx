import { Link } from "react-router-dom";

export default function Preload() {
    return (
        <>
            <div id="aa-preloader-area">
                <div className="pulse" />
            </div><Link className="scrollToTop" to="#"><i className="fa fa-angle-double-up" /></Link>
        </>
    )
}