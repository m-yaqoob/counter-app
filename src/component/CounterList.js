import React, { Component } from 'react';
import CounterItem from './CounterItem';

class CounterList extends Component {
  render() {
    const { counts, handleIncrement, handleDecrement, handleRemove } = this.props;
    return (
      <div className='counter-list'>
        {counts.map((item, index) => (
          <CounterItem
            key={index}
            count={item.count}
            handleIncrement={() => handleIncrement(index)}
            handleDecrement={() => handleDecrement(index)}
            handleRemove={() => handleRemove(index)}
          />
        ))}
      </div>
    );
  }
}

export default CounterList;
