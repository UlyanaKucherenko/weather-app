import {Wrap} from "./styled";
import React, {FC} from "react"
import WeatherDaysItem from "components/Main/WeatherDays/WeatherDaysItem";
import {IWeatherForecastCustom} from "types/weather";

interface WeatherForecastProps {
    listDays: IWeatherForecastCustom[];
}

const WeatherTabContent: FC<WeatherForecastProps> = ({listDays}) => {

    const renderWeatherListDays = () => {
        return listDays.map((item, idx) => (
            <WeatherDaysItem key={idx} day="Today" item={item}/>
        ));
    };

    return (
        <Wrap className="custom-scroll">
            {renderWeatherListDays()}
        </Wrap>
    )
}

export default WeatherTabContent;