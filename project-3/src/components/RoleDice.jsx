import { useState } from "react";
import styled from "styled-components";


const RoleDice = () => {

    const [currentDice , setCurrentDice] = useState(1);


    const genearetRandomNumber = (min ,max) => {
        console.log(Math.floor(Math.random() * (max - min ) + min))
        return Math.floor(Math.random() * (max - min ) + min) ;
    };

    const roleDice = () => {
        const randomNumber = genearetRandomNumber(1, 7);

        setCurrentDice((prev) => randomNumber);
    }
    
     
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