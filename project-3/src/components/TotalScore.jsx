import styled from "styled-components"


const TotalScore = () => {
  return (
    <ScoreContainer>
    <h1>0</h1>
    <p>Total Score</p>
  </ScoreContainer>
  )
}

export default TotalScore


const ScoreContainer = styled.div`

text-align: center;
max-width: 200px;
h1{
    font-size: 80px;
    
   
}
p{
    font-size: 30px;
}
`