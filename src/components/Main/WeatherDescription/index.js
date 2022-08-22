import {useContext} from "react";

import {ThemeContext} from "../../../App";
import {Wrap, WrapImgBg, ContentItem, WrapImg, Img, Title, Text} from "./styled";
import sky from '../../../assets/img/sky.svg'
import {descriptionDay} from './config'

function WeatherDescription() {
  const {mode} = useContext(ThemeContext);
  return (
    <Wrap themeMode={mode}>
      <WrapImgBg>
        <Img src={sky}/>
      </WrapImgBg>
      {
        descriptionDay.map((item, idx) => {
          return (
            <ContentItem key={idx}>
              <WrapImg>
                <Img src={require(`../../../assets/img/descriptionDay/${item.srcImg}.svg`)}/>
              </WrapImg>
              <Title>{item.title}</Title>
              <Text>{item.text}</Text>
            </ContentItem>
          )
        })
      }
    </Wrap>
  )
}

export default WeatherDescription