import {Wrap, Title, Img, Text, WrapImg, IconText, WrapIcon} from "./styled";
import {IWeatherForecastCustom} from "types/weather";

interface WeatherDaysItemProps {
    day: string,
    item: IWeatherForecastCustom
}

function WeatherDaysItem({day, item}: WeatherDaysItemProps) {

    const {temperatureDay, tempFeelsLike, precipitation, weatherIcon, temperatureDescription} = item
    const iconUrl = `https://www.weatherbit.io/static/img/icons/${weatherIcon}.png`

    return (
        <Wrap>
            <Title>{day}</Title>
            <WrapIcon>
                <WrapImg>
                    <Img src={iconUrl} alt="sun"/>
                </WrapImg>
                <IconText>{temperatureDescription}</IconText>
            </WrapIcon>
            <Title>{Math.floor(temperatureDay)}°</Title>
            <Text>{Math.floor(tempFeelsLike)}°</Text>
            <Text>precipitation: {precipitation}%</Text>
        </Wrap>
    )
}

export default WeatherDaysItem