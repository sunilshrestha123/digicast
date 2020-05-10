import React, { Component } from 'react';
import './App.css';
import Cardlist from './components/card-list/card-list.components';
import SearchBox from './components/search-box/search-box';
import Hello from './page/hello';
import NavBar from './components/navbar/navbar.components';
import Homepage from './page/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './page/shop-page/shop-page.component';
import Header from './components/header/header-component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nameDetails: [],
      searchfield: '',
      // name: 'sunil shrestha',
      // age: 12,
      // text: 'helllo nepali ',
      // status: true,
    };
    // this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((user) => this.setState({ nameDetails: user }));
  }
  onChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };
  ///rsponse.json in the method which return jason data javascript readable formate
  render() {
    const { nameDetails, searchfield } = this.state;
    const filternameDetails = nameDetails.filter((details) =>
      details.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return (
      <div className='App'>
        <header className='App-header'>
          {/* <SearchBox
            placeholder='please enter the name '
            onChange={this.onChange}
          /> */}
          <Header />
          <Homepage />
          {/* <p>
            {this.state.nameDetails.map((namedetails) => (
              <h1>
                {namedetails.name}
                {namedetails.age}
              </h1>
            ))}
          </p>

          <p>{name}</p>
          <p>{age}</p>
          <p>{status}</p> */}

          {/* <p>{this.state.age}</p> */}

          {/* <p onMouseOverCapture={() => this.setState({ text: 'fuck ' })}>
            {this.state.text}
          </p> */}

          {/* <button onClick={() => this.setState({ name: 'mina tamang' })}>
            click me to change name
          </button> */}
          {/* <h1>{filtername.name}</h1> */}

          {/* <Cardlist monsters={filternameDetails}>mina tamang</Cardlist> */}

          <Switch>
            <Route exact path='/shop' component={ShopPage} />
          </Switch>
          <div></div>
        </header>
      </div>
    );
  }
}
export default App;
