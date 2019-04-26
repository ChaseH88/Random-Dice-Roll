import React, { Component } from "react";
import styled from "styled-components";

// Components
import Die from "./Die";

const Container = styled.div`
  max-width: 85vw;
  margin: 20px auto;
  text-align: center;
`;

export const mainColor = "#494979";

const RollButton = styled.button`
  display: inline-block;
  border: 2px solid ${mainColor};
  border-radius: 6px;
  background: transparent;
  margin: 20px 0 0;
  padding: 5px 15px;
  font-size: 18px;
  color: ${mainColor};
  font-weight: bold;
  cursor: pointer;
  transition: all 150ms ease;
  &:hover{
    background: ${mainColor};
    color: #fff;
  }
`;

class RollDice extends Component {
  
  static defaultProps = {
    sides: ["one","two","three","four","five","six"]
  }

  state = {
    die1: "one",
    die2: "one",
    rolling: false
  }

  roll = () => {
    const newDice1 = this.getRandom();
    const newDice2 = this.getRandom();
    this.setState({
      die1: newDice1,
      die2: newDice2,
      rolling: true
    });
    setTimeout(()=>{
      this.setState({
        rolling: false
      })
    }, 500);
  }

  getRandom = () => {
    let num = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ]
    return num;
  }

  render(){
    const { die1, die2, rolling } = this.state;
    return(
      <Container>
        <div>
          <Die face={die1} rolling={rolling} />
          <Die face={die2} rolling={rolling} />
        </div>
        <RollButton onClick={this.roll} disabled={rolling}>
          {this.state.rolling ? 
            "Rolling..." :
            "Roll Dice!"
          }
        </RollButton>
      </Container>
    )
  }
};

export default RollDice;