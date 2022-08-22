import {Wrapper, Container, WrapLogo, WrapImg, LogoText, Nav, Button, Img} from './styled';
import logo from '../../assets/img/logo.svg'
import IconTheme from '../../assets/img/icon-theme.svg'

import RSelect from "../ui/RSelect";

import {useContext} from "react";
import {ThemeContext} from "../../App";
import {appTheme} from "../../utils/consts";

function Header() {
  const {mode, onChangeMode} = useContext(ThemeContext);

  return (
    <Wrapper>
      <Container>
        <WrapLogo>
          <WrapImg>
            <Img src={logo} alt="logo"/>
          </WrapImg>
          <LogoText>React weather</LogoText>
        </WrapLogo>
        <Nav>
          <div>
            <Button onClick={() => onChangeMode(mode === appTheme.light ? appTheme.dark : appTheme.light)}>
              <img src={IconTheme}/>
            </Button>
          </div>
          <div>
            <RSelect/>
          </div>
        </Nav>

      </Container>
    </Wrapper>
  )
}

export default Header