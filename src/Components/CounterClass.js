import React from 'react';
import Button from './Button';

export default class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick({ target }) {
    target.innerHTML === '+'
      ? this.setState({ num: this.state.num + 1 })
      : this.setState({ num: this.state.num - 1 });
  }
  render() {
    return (
      <>
        <h1>Simple counter</h1>
        <Button
          name="-"
          style={{ marginRight: 10 }}
          onClick={this.handleClick}
          disabled={this.state.num === 0 && true}
        />
        <span>{this.state.num}</span>
        <Button
          name="+"
          style={{ marginLeft: 10 }}
          onClick={this.handleClick}
        />
      </>
    );
  }
}
