import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
    val: 6
  }
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.handleClick(this.props.idx)
  }

  render() {
    const {locked, val, numberWords, disabled, rolling} = this.props;
    let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-5x `;
    if(locked) classes += 'Die-locked ';
    if(rolling) classes += 'Die-rolling';
    return (
      <i
        className={classes}
        style={{ backgroundColor: locked ? "grey" : "black" }}
        onClick={this.handleClick}
        disabled={disabled}
      >
      </i>
    );
  }
}

export default Die;
