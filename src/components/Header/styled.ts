import styled from 'styled-components';

const Wrapper = styled.header``
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 15px;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-row-gap: 16px;
  }
`

const WrapLogo = styled.div`
  display: flex;
  align-items: center;
`

const WrapImg = styled.div`
  width: 65px;
  height: 65px;
  margin-right: 24px;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
`
const LogoText = styled.div`
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  text-transform: uppercase;
  color: #4793FF;
`
const Nav = styled.div`
  display: flex;
  margin: 0;
  justify-content: flex-end;
  align-items: center;
`

const Button = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  outline: none;
  margin-right: 24px;
  cursor: pointer;

  &:active {
    box-shadow: 0 0 10px rgb(71, 47, 255);
    border-radius: 20%;
  }
`

export {Wrapper, Container, WrapLogo, WrapImg, Img, LogoText, Nav, Button}