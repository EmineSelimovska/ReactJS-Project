import { Component } from "react";
import { toast } from "react-toastify";

export default class ErrorBoundary extends Component {
    constructor(){
        super()

        this.state = {
            hasError: false,
        }
    }
    static getDerivedStateFromError(err) {
        console.log('GetDrivedStateFromError');
        return{
            hasError:true,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch');
        //Todo logging
        
        toast.error(errorInfo)
    }


    render() {
        if(this.state.hasError){
            return (
                <h1 style={{margin: '4em'}}>Oop error!</h1>
            )
        }
       return this.props.children;
    }


}