import {useDispatch, useSelector} from "react-redux";

import {Wrapper, Container, WrapLogo, WrapImg, LogoText, Nav, Button, Img} from './styled';
import logo from 'assets/img/logo.svg'
import IconTheme from 'assets/img/icon-theme.svg'
import RSelect from "components/ui/RSelect";
import {appTheme} from "utils/consts";
import {themeApp} from "store/themeApp";
import {weather} from "store/weather";

function Header() {
const dispatch = useDispatch();
const theme = useSelector(themeApp.selectors.themeApp)

  const onChangeTheme = () => {
    dispatch(themeApp.actions.SET_THEME(theme === appTheme.dark ? appTheme.light : appTheme.dark))
  }

  const onChangeLocation = (location) => {
    dispatch(weather.actions.SET_LOCATION(location))
  }

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
            <Button onClick={() => onChangeTheme()}>
              <img src={IconTheme}/>
            </Button>
          </div>
          <div>
            <RSelect onChange={onChangeLocation}/>
          </div>
        </Nav>
      </Container>
    </Wrapper>
  )
}

export default Header