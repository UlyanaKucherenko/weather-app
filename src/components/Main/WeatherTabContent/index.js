import {Wrap} from "./styled";
import WeatherDaysItem from "components/Main/WeatherDays/WeatherDaysItem";

function WeatherTabContent({listDays}) {
    return(
        <Wrap className="custom-scroll">
            {
                listDays && listDays.map((item, idx) => {
                    const iconUrl = `https://www.weatherbit.io/static/img/icons/${item && item.weatherIcon}.png`

                    return (
                        <WeatherDaysItem
                            key={idx}
                            day="Today"
                            temperatureDay={Math.floor(item.temperatureDay)}
                            tempFeelsLike={Math.floor(item.tempFeelsLike)}
                            precipitation={item.precipitation}
                            iconUrl={iconUrl}
                            temperatureDescription={item.temperatureDescription}
                        />
                    )
                })
            }
        </Wrap>
    )
}

export default WeatherTabContent;