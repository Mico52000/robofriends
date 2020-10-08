import React , {Component,Fragment} from "react"
import Scroll from '../components/Scroll.js'
import CardList from '../components/CardList.js'
import SearchBox from "../components/SearchBar.js";
import 'tachyons';
import './App.css';
import ErrorBoundry from "../components/ErrorBoundry.js"



export default class App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchField:""
        }
    }
    onSearchChange = (event) =>{
        
        this.setState({ searchField: event.target.value})
        
    

   }

    render(){
        const filteredRobots = this.state.robots.filter((robot)=> {
            return(robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
        })
        return !this.state.robots.length ?
        <h1>Loading</h1> :
        <div className="tc">
            <h1 className="f2">Mochte virtual bots</h1>
            <SearchBox onSearchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
                
            </Scroll>
        </div>
        
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>
             response.json()
        ).then(users =>
            this.setState({robots:users})
        )
        
    }
}