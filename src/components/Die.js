import React, { Component, Fragment } from "react";
import styled from "styled-components";

const DieTag = styled.i`
  color: #494979;
  font-size: 10vw;
  text-shadow: 0 0 1px #000;
  display: inline-block;
  margin: 0 5px;
  &.rolling{
    animation-name: shake;
    animation-duration: 500ms
  }
`;

class Die extends Component {

  render(){
    const { face, rolling } = this.props;
    return(
      <Fragment>
        <DieTag className={`fas fa-dice-${face} ${rolling ? "rolling" : ""}`}></DieTag>
      </Fragment>
    )
  }
}

export default Die;