import styled from "styled-components";
import {theme} from "../../../theme";

const Wrap = styled.div`

`
const Label = styled.label`

`
const Select = styled.select`
  width: 194px;
  height: 37px;
  padding: 0 14px;
  background: ${({themeMode}) => theme[themeMode].selectBg};
  color: ${({themeMode}) => theme[themeMode].text};
  border: 1px solid #4F4F4F;
  border-radius: 10px;
  outline: none;
`
const Option = styled.option`
  width: 194px;
  height: 37px;
  padding: 0 14px;
  background: #4F4F4F;
  border: 1px solid #4F4F4F;
  color: #FFFFFF;
  outline: none;
`

export {Wrap, Label, Select, Option}