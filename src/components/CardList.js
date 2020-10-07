import React, { Component, Fragment } from 'react'
import  Card from './Card.js';


export default class CardList extends Component{
    
    render(){
        const {robots} = this.props;
        const components = robots.map((robot,i) => {
            return <Card key={robot.id} name ={robot.name} id={robot.id} email={robot.email}/>
        }
        )
        
        return(
           
           <Fragment>{components}</Fragment>
        )
    }
}