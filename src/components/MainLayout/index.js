import Header from "../Header";
import Main from "../Main";
import {Wrap} from "./styled";
import {useContext} from "react";
import {ThemeContext} from "../../App";

function MainLayout() {
  const {mode} = useContext(ThemeContext);

  return (
    <Wrap themeMode={mode}>
      <Header/>
      <Main/>
    </Wrap>
  )
}

export default MainLayout