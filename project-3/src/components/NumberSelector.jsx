import { useState } from "react";
import styled from "styled-components";


const NumberSelector = () => {

    const[selectedNumber , setSelectedNumber] = useState();

    console.log(selectedNumber);

  return (
    <NumberSelectorContainer >
        <div className="flex">
        <Box
        isSelected = {1 == selectedNumber}
        onClick={ () => setSelectedNumber(1)}
        >1</Box>
        <Box
        isSelected = {2 == selectedNumber}
         onClick={ () => setSelectedNumber(2)}
        >2</Box>
        <Box
        isSelected = {3 == selectedNumber}
         onClick={ () => setSelectedNumber(3)}
        >3</Box>
        <Box
        isSelected = {4 == selectedNumber}
         onClick={ () => setSelectedNumber(4)}
        >4</Box>

        <Box
        isSelected = {5 == selectedNumber}
         onClick={ () => setSelectedNumber(5)}
        >5</Box>
        <Box
        isSelected = {6 == selectedNumber}
         onClick={ () => setSelectedNumber(6)}
        >6</Box>
       
        </div>
        <p>Selected Number</p>

    
      </NumberSelectorContainer>
      
  )
}

export default NumberSelector



const NumberSelectorContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: end;
  .flex{
    display: flex;
    gap: 34px;
  }
  p{
    font-size: 34px;
  }

`


const Box = styled.div`

    height: 72px;
    width: 72px;
   
    
    border: 1px solid black;
    display: grid;
    place-items: center;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "black")};
`;