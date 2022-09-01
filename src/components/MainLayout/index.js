import Header from "../Header";
import Main from "../Main";
import {Wrap} from "./styled";

function MainLayout() {

  return (
    <Wrap>
      <Header/>
      <Main/>
    </Wrap>
  )
}

export default MainLayout