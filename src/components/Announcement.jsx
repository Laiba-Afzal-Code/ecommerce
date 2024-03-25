import styled from "styled-components"

const Container = styled.div`
height:30px;
display:flex;
background-color:teal;
color:white;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:bold;

`

const Announcement = () => {
  return (
    <>
      <Container>
Super Deal! Free Shopping on Orders over 100$
      </Container>
    </>
  )
}

export default Announcement
