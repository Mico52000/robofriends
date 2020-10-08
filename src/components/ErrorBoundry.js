import React , {Component} from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

export default class ErrorBoundry extends Component{
    constructor(){
        super();
        this.state={
            hasErrors:false
        }
    }

    componentDidCatch(error,info){

        this.setState({hasErrors:true})
    }
    render()
    {
        if(this.state.hasErrors)
        {
            return <h1>Ooops</h1>
        }
        else{
            return(
                this.props.children
            )
        }

    }
}