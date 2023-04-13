import React, { Component } from 'react';
import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import './App.css';
import Scroll from '../components/Scroll';



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                response.json();
            })
            .then(users => {
                this.setState({ robots: users })
                this.setState({ robots: robots });
            });
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return (


            // We can only return one single component/parent
            // We need to wrap it in a div
            <div className='tc'>
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />

                </Scroll>
            </div>

        );
    }

}


export default App; 