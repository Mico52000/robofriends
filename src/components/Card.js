import React, { Component } from 'react';

export default class Card extends Component{
    
    render()
    {
        const {id,name,email} = this.props
    return(

        <div className="tc bg-light-green dib br3 ma2 pa3 grow shadow-5 ">
            <img alt="robo" src={`https://robohash.org/${id}?size=200x200`}></img>
            <h3>{name}</h3>
            <p>{email}</p>
            
        </div>
    )
    }
}

