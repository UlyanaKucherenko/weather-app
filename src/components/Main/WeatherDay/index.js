import IconSun from "../../../assets/img/sun.svg";
import {useContext} from "react";
import {ThemeContext} from "../../../App";
import {Wrap, ContentTop, Day, Degree, Img, Text, WrapImg} from "./styled";

function WeatherDay() {
  const {mode} = useContext(ThemeContext);
  return (
    <Wrap themeMode={mode}>
      <ContentTop>
        <div>
          <Degree>20°</Degree>
          <Day>Today</Day>
        </div>
        <WrapImg>
          <Img src={IconSun} alt="sun"/>
        </WrapImg>
      </ContentTop>
      <Text>Time: 21:54</Text>
      <Text>City: London</Text>
    </Wrap>
  )
}

export default WeatherDay