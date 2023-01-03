import Header from "components/Header";
import Main from "components/Main";
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