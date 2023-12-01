import { useEffect, useState } from "react"
import * as propertyService from "../servises/propertyService";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

AdvanceSearch.defaultProps = {
    searchRoute: '/search/',
    defaultRoute: '/',
};
export default function AdvanceSearch({ searchRoute, defaultRoute }) {
    const navigate = useNavigate();
    const [options, setOption] = useState('');
    const { searchItem } = useParams();

    useEffect(() => {
        setOption(searchItem ?? '')
    }, [searchItem])

    const search = async () => {
        options ? navigate(searchRoute + options ) : navigate(defaultRoute);
    }

    return (
        <section id="aa-advance-search">
            <div className="container">
                <div className="aa-advance-search-area">
                    <div className="form">
                        <div className="aa-advance-search-top">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="aa-single-advance-search">
                                        <input
                                            type="text"
                                            placeholder="Search property"
                                            onChange={e => setOption(e.target.value)}
                                            onKeyUp={e => e.key === 'Enter' && search()}
                                            value={options}
                                        />
                                        <button className="aa-search-btn" onClick={search}>Search</button>
                                    </div>
                                </div>

                              
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}