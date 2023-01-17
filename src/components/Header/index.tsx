import {useAppDispatch} from "hooks/redux-hooks";

import {Wrapper, Container, WrapLogo, WrapImg, LogoText, Nav, Button, Img} from './styled';
import logo from 'assets/img/logo.svg'
import IconTheme from 'assets/img/icon-theme.svg'
import RSelect from "components/ui/RSelect";
import {themeApp} from "store/themeApp";
import {weather} from "store/weather";

const Header = () => {
    const dispatch = useAppDispatch();

    const onChangeTheme = () => {
        dispatch(themeApp.actions.SET_THEME());
    };

    const onChangeLocation = (location: string) => {
        dispatch(weather.actions.SET_LOCATION(location))
    }
    const selectOptions = [
        {
            label: 'Bitritto(IT)',
            value: 'Bitritto',
        },
        {
            label: 'Kyiv',
            value: 'Kyiv',
        },
        {
            label: 'Berlin',
            value: 'Berlin',
        },
        {
            label: 'Paris',
            value: 'Paris',
        },
        {
            label: 'London',
            value: 'London',
        },
    ];


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
                            <img src={IconTheme} alt="" />
                        </Button>
                    </div>
                    <div>
                        <RSelect options={selectOptions} onChange={onChangeLocation}/>
                    </div>
                </Nav>
            </Container>
        </Wrapper>
    )
}

export default Header