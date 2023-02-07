import {useAppDispatch, useAppSelector} from "hooks/redux-hooks";

import {Wrapper, Container, WrapLogo, WrapImg, LogoText, Nav, Button, Img} from './styled';
import logo from 'assets/img/logo.svg'
import IconTheme from 'assets/img/icon-theme.svg'
import {RSelect} from "components/ui/RSelect";
import {themeApp} from "store/themeApp";
import {weather} from "store/weather";
import {citiesConst} from 'types/const';
import {SelectOptionType} from 'types/fields';

const citiesOptions: SelectOptionType[] = citiesConst.map((city) => ({
  value: city,
  label: city,
}));

export const Header = () => {
  const dispatch = useAppDispatch();
  const {city} = useAppSelector(weather.selectors.params)

  const onChangeTheme = (): void => {
    dispatch(themeApp.actions.SET_THEME());
  };


  const onChangeCity = (value: string): void => {
    dispatch(weather.actions.SET_PARAMS({city: value}));
    dispatch(weather.thunks.getWeather())
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
              <Button onClick={onChangeTheme}>
                <img src={IconTheme} alt="IconTheme"/>
              </Button>
            </div>
            <div>
              <RSelect
                  value={city}
                  options={citiesOptions}
                  onChange={onChangeCity}
              />
            </div>
          </Nav>
        </Container>
      </Wrapper>
  )
}