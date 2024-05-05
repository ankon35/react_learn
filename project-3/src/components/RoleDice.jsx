import { useState } from "react";
import styled from "styled-components";


const RoleDice = ({
    currentDice , roleDice
}) => {

   


    
     
  return (
    <DiceContainer>

        <div
       
        className="dice"
        
        onClick = {roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png `}alt="Dice" />
   
        </div>

        <p>Click on the Dice to role</p>
    </DiceContainer>
  )
}

export default RoleDice;

const  DiceContainer = styled.div`

    display: flex;
    justify-content: center;
    margin-top: 40px;
    flex-direction: column;
    align-items: center;

    p{
        font-size: 24px;
        
    }

    .dice{
        cursor: pointer;

    }
`