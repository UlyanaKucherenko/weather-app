import styled from "styled-components";

const Wrap = styled.div`
  background-color: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text};
  height: 100vh;
  min-height: 600px;
  
  @media (max-width: 1200px) {
    height: 100%;
  }
  
`
export {Wrap}