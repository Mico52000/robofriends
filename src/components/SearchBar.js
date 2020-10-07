import React , {Component} from 'react'
import './SearchBar.css'


export default class SearchBox extends Component{
    render(){
        const {onSearchChange}= this.props
        return(
            <div className="pa2 ">
                <input type="search" placeholder="search Robots" className=" tc pa3 ba  b--dark-green bg-lightest-blue"
                
                

                onChange={onSearchChange}></input>
            </div>
            
        )
    }
}