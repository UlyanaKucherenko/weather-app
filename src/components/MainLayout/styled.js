import styled from "styled-components";
import {theme} from "../../theme";

const Wrap = styled.div`
  background-color: ${({themeMode}) => theme[themeMode].bg};
  color: ${({themeMode}) => theme[themeMode].text};
  height: 100vh;
`
export {Wrap}