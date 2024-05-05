
import styled from "styled-components";


const NumberSelector = ({
  setError , error , selectedNumber , setSelectedNumber 
}) => {

    const NumberSelectorHandler1 = (value) => {
      setSelectedNumber(1)
      setError("")
    }

    const NumberSelectorHandler2 = (value) => {
      setSelectedNumber(2)
      setError("")
    }

    const NumberSelectorHandler3 = (value) => {
      setSelectedNumber(3)
      setError("")
    }

    const NumberSelectorHandler4 = (value) => {
      setSelectedNumber(4)
      setError("")
    }

    const NumberSelectorHandler5 = (value) => {
      setSelectedNumber(5)
      setError("")
    }

    const NumberSelectorHandler6 = (value) => {
      setSelectedNumber(6)
      setError("")
    }

    console.log(selectedNumber);

  return (
    <NumberSelectorContainer >

        <p className="error">{error}</p>
        <div className="flex">
        <Box
        isSelected = {1 == selectedNumber}
        onClick={ () => NumberSelectorHandler1(1)}
        >1</Box>
        <Box
        isSelected = {2 == selectedNumber}
         onClick={ () => NumberSelectorHandler2(2)}
        >2</Box>
        <Box
        isSelected = {3 == selectedNumber}
         onClick={ () => NumberSelectorHandler3(3)}
        >3</Box>
        <Box
        isSelected = {4 == selectedNumber}
         onClick={ () => NumberSelectorHandler4(4)}
        >4</Box>

        <Box
        isSelected = {5 == selectedNumber}
         onClick={ () => NumberSelectorHandler5(5)}
        >5</Box>
        <Box
        isSelected = {6 == selectedNumber}
         onClick={ () => NumberSelectorHandler6(6)}
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

  .error{
    color: red;
    font-size: 25px;
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