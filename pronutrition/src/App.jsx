import React, { Component } from 'react';
import FoodBox from './components/FoodBox';
import FoodData from '../resources/FoodData';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  change_inp = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    // Filter food items based on the user input
    let filterdata = FoodData.filter((item) => {
      return item.name.includes(this.state.value);
    });

    return (
      <>
        {/* Search input section */}
        <div className='search'>Search</div>
        <input
          type='text'
          className=''
          value={this.state.value}
          placeholder=' Search by item'
          onChange={(e) => this.change_inp(e)}
        />

        {/* Render filtered food items or display a message if no results */}
        {filterdata.length !== 0 ? (
          <div>
            {filterdata.map((item) => (
              <FoodBox key={item.id} food={item} />
            ))}
          </div>
        ) : (
          <h1>No Result found</h1>
        )}
      </>
    );
  }
}
