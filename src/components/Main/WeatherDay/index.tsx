import {useAppSelector} from 'hooks/redux-hooks';

import {weather} from "store/weather";
import {Wrap, ContentTop, Day, Degree, Img, Text, WrapImg, Descr} from "./styled";
import {Loader} from "components/Loader";
import {Status} from "utils/consts";

const WeatherDay = () => {

    const _weather = useAppSelector(weather.selectors.weather)
    const fetchingStatusWeather = useAppSelector(weather.selectors.fetchingStatusWeather);

    const iconUrl = `https://www.weatherbit.io/static/img/icons/${_weather?.weatherIcon}.png`

    const getTime = () => {
        const today = new Date();
        return `${today.getHours()}:${today.getMinutes()}`;
    }

    if (fetchingStatusWeather === Status.IDLE || fetchingStatusWeather === Status.PENDING) {
        return <Loader />;
    }

    return (
        <Wrap>
            <ContentTop>
                <div>
                    <Degree>
                        {_weather ? Math.floor(_weather.temperatureDay) : null}°
                    </Degree>
                    <Day>Today</Day>
                </div>
                <div>
                    <WrapImg>
                        <Img src={iconUrl} alt=""/>
                    </WrapImg>
                    <Descr>{_weather?.temperatureDescription}</Descr>
                </div>
            </ContentTop>
            <Text>Time: {getTime()}</Text>
            <Text>City: { _weather?.city}</Text>
        </Wrap>
    )
}

export default WeatherDay