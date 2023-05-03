
import React, { Component } from 'react';
import CounterList from './CounterList';

class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: [{ count: 0 }],
    };
  }

  handleAdd = () => {
    this.setState((prevState) => ({
      counts: [...prevState.counts, { count: 0 }],
    }));
  };

  handleIncrement = (index) => {
    this.setState((prevState) => {
      const newCounts = [...prevState.counts];
      newCounts[index].count += 1;
      return { counts: newCounts };
    });
  };

  handleDecrement = (index) => {
    this.setState((prevState) => {
      const newCounts = [...prevState.counts];
      if (newCounts[index].count > 0) {
        newCounts[index].count -= 1;
      }
      return { counts: newCounts };
    });
  };

  handleRemove = (index) => {
    this.setState((prevState) => {
      const newCounts = [...prevState.counts];
      newCounts.splice(index, 1);
      return { counts: newCounts };
    });
  };

  render() {
    const { counts } = this.state;
    return (
      <div>
        <button onClick={this.handleAdd}>Add</button>
        <CounterList
          counts={counts}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default Counters;
