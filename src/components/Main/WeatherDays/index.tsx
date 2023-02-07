import React, {useState} from "react";
import {useAppSelector} from 'hooks/redux-hooks';

import {Wrap, TabList, Tab} from "./styled";
import {weather} from "store/weather";
import {WeatherTabContent} from "components/Main/WeatherTabContent";

export const WeatherDays = () => {
  const _weatherAllDays = useAppSelector(weather.selectors.weatherAllDays)

  const [toggleState, setToggleState] = useState(1);
  const daysThree = _weatherAllDays?.slice(0, 3)
  const daysWeek = _weatherAllDays?.slice(0, 7)

  return (
      <Wrap>
        <TabList>
          <Tab active={toggleState === 1} onClick={() => setToggleState(1)}>
            3 days
          </Tab>
          <Tab active={toggleState === 2} onClick={() => setToggleState(2)}>
            7 days
          </Tab>
        </TabList>
        {toggleState === 1 && <WeatherTabContent listDays={daysThree}/>}
        {toggleState === 2 && <WeatherTabContent listDays={daysWeek}/>}
      </Wrap>
  )
};