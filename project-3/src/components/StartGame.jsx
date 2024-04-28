import styled from "styled-components"

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
        <img src="/images/dices.png" alt="" />
        </div>
        <div className="content">
            <h1>Dice Game</h1>
            <Button
            onClick={toggle}
            >
                Play Now
            </Button>
        </div>
    </Container>
  )
}

export default StartGame


const Container = styled.div`
    max-width: 1180px;
    
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100vh;


    .content {
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }
`;

const Button = styled.button`
    color: white;
    background: black;
    border-radius: 5px;
    padding: 10px 10px;
    min-width: 180px;
    border: none;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: end;
    transition: 0.4s background ease-in;
    cursor: pointer;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;
    }

`