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
            localStorage.setItem('PROFILE', data.results);
        })

    }

    render() {
        return (
            <Details profile={this.state.profile} />
        )
    }

}

export default App;

class PWAConfApp {
  constructor() {
    this.speakersDiv = document.querySelector('.speakers');
    this.scheduleDiv = document.querySelector('.schedule');
    this.init();
  }
  async init() {
    await this.loadSpeakers();
    this.loadSchedule();
    this.registerSW();
  }
   async fetchJSON(url) {
    const res = await fetch(url);
    return res.json();
  }
  async registerSW() {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('./customWorker.js');
      } catch (e) {
        alert('ServiceWorker registration failed. Sorry about that.');
      }
    } else {
      document.querySelector('.alert').removeAttribute('hidden');
    }
  }
}

window.addEventListener('load', e => {
  new PWAConfApp();
});


