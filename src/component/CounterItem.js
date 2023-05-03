import React, { Component } from 'react';

class CounterItem extends Component {
  render() {
    const { count, handleIncrement, handleDecrement, handleRemove } = this.props;
    return (
      <div className='a'>
        <button onClick={handleIncrement}>+</button>
        <span>{count}</span>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleRemove}>Remove</button>
      </div>
    );
  }
}

export default CounterItem;
