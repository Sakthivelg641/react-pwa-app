import React, { Component } from 'react';
import './App.css';
import Details from './components/profileCard';

class App extends Component {

    // State to store the response from the API call
    constructor() {
        super();
        this.state = {
            profile: []
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then((data) => {
            this.setState({ profile: data.results});
        })
    }

    render() {
        return (
            <Details profile={this.state.profile} />
        )
    }

}

export default App;