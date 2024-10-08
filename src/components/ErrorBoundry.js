import React, { Component } from 'react';

class ErrorBoundry extends Component{
    constructor(props){
        supper(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({ hasError: true })
    }

    render(){
        if(this.state.hasError){
            return <h1>Oooops that is not good</h1>
        }else{
            return this.props.children
        }
    }
}

export default ErrorBoundry;