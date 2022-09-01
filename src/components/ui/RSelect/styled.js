import styled from "styled-components";

const Wrap = styled.div`

`
const Label = styled.label`
  position: relative;

`
const Select = styled.div`
  width: 194px;
  height: 37px;
  padding: 0 14px;
  background: ${({theme}) => theme.selectBg};
  color: ${({theme}) => theme.text};
  border: 1px solid ${({theme}) => theme.selectBg};
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Options = styled.div`
  position: absolute;
  top: 35px;
  z-index: 3;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
`

const OptionsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 194px;
  height: 37px;
  padding: 0 14px;
  background: ${({theme}) => theme.selectBg};
  color: ${({theme}) => theme.text};
  border: 1px solid ${({theme}) => theme.selectBg};
  outline: none;
  &:hover {
    background-color: ${({theme}) => theme.selectBgHover};;
  }
`

export {Wrap, Label, Select, Options, OptionsItem}