import {useAppSelector} from 'hooks/redux-hooks';

import {Wrap, WrapImgBg, ContentItem, WrapImg, Img, Title, Text} from "./styled";

import sky from 'assets/img/sky.svg'
import evaporator from 'assets/img/descriptionDay/evaporator.svg';
import thermometer from 'assets/img/descriptionDay/thermometer.svg';
import wind from 'assets/img/descriptionDay/wind.svg';
import humidity from 'assets/img/descriptionDay/humidity.svg';

import {weather} from "store/weather";

const WeatherDescription = () => {
    const _weather = useAppSelector(weather.selectors.weather);

    return (
        <Wrap>
            <WrapImgBg>
                <Img src={sky} alt=""/>
            </WrapImgBg>

            <ContentItem>
                <WrapImg>
                    <Img src={thermometer} alt=""/>
                </WrapImg>
                <Title>Temperature</Title>
                <Text>{_weather ? Math.floor(_weather.temperatureDay) : null}° feels
                    like {_weather ? Math.floor(_weather?.tempFeelsLike) : null}°</Text>
            </ContentItem>
            <ContentItem>
                <WrapImg>
                    <Img src={wind} alt=""/>
                </WrapImg>
                <Title>Pressure</Title>
                <Text>{_weather?.pressure} mmHg </Text>
            </ContentItem>
            <ContentItem>
                <WrapImg>
                    <Img src={humidity} alt=""/>
                </WrapImg>
                <Title>Precipitation</Title>
                <Text>{_weather?.precipitation}%</Text>
            </ContentItem>

            <ContentItem>
                <WrapImg>
                    <Img src={evaporator}/>
                </WrapImg>
                <Title>Wind</Title>
                <Text>{_weather?.wind.toFixed(2)} m/s </Text>
            </ContentItem>
        </Wrap>
    )
}

export default WeatherDescription;