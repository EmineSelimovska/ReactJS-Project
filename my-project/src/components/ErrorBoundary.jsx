import { Component } from "react";
import { toast } from "react-toastify";

export default class ErrorBoundary extends Component {
    constructor(){
        super()

        this.state = {
            hasError: false,
        }
    }
    static getDrivedStateFromError(err) {
        console.log('GetDrivedStateFromError');
        return{
            hasError:true,
        }
    }

    componentDidCatch(error, errorIfo) {
        console.log('componentDidCatch');
        //Todo logging
        
        toast.error(error)
    }


    render() {
        if(this.state.hasError){
            return (
                <h1 style={{margin: '4em'}}>404</h1>
            )
        }
       return this.props.children;
    }


}