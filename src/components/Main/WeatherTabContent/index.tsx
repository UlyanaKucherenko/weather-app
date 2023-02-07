import {Wrap} from "./styled";
import React, {FC} from "react"
import {WeatherDaysItem} from "components/Main/WeatherDays/WeatherDaysItem";
import {IWeatherForecastCustom} from "types/weather";

interface WeatherForecastProps {
  listDays: IWeatherForecastCustom[];
}

export const WeatherTabContent: FC<WeatherForecastProps> = ({listDays}) => {

  const renderWeatherListDays = () => {
    return listDays.map(
        ({temperatureDay, tempFeelsLike, precipitation, weatherIcon, temperatureDescription, timestamp}) => (
            <WeatherDaysItem
                key={timestamp}
                {...{timestamp, temperatureDay, tempFeelsLike, precipitation, weatherIcon, temperatureDescription}}
            />
        ));
  };

  return (
      <Wrap className="custom-scroll">
        {renderWeatherListDays()}
      </Wrap>
  )
};