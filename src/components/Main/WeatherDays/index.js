import {useContext, useState} from "react";
import {ThemeContext} from "../../../App";
import {Wrap, TabList, Tab, Content} from "./styled";
import WeatherDaysItem from "./WeatherDaysItem";

function WeatherDays() {

  const {weatherAllDays} = useContext(ThemeContext);
  const [toggleState, setToggleState] = useState(1);

  const daysWeek = weatherAllDays.data?.slice(0, 7)
  const setDaysTen = weatherAllDays.data?.slice(0, 10)
  const daysMonth = weatherAllDays.data?.slice(0, 16)


  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <Wrap>
      <TabList>
        <Tab active={toggleState === 1} onClick={() => toggleTab(1)}>
          7 days
        </Tab>
        <Tab active={toggleState === 2} onClick={() => toggleTab(2)}>
          10 days
        </Tab>
        <Tab active={toggleState === 3} onClick={() => toggleTab(3)}>
          30 days
        </Tab>
      </TabList>
      <Content className="custom-scroll" activeContent={toggleState === 1}>
        {
          daysWeek && daysWeek.map((item, idx) => {
          const iconUrl = `https://www.weatherbit.io/static/img/icons/${item && item.weather.icon}.png`

          return (
          <WeatherDaysItem
          key={idx}
          day="Today"
          temp={Math.floor(item.temp)}
          feelsLike={Math.floor(item.appMaxTemp)}
          humidity={item.rh}
          iconUrl={iconUrl}
          iconText={item.weather.description}
          />
          )
        })
        }
      </Content>
      <Content className="custom-scroll" activeContent={toggleState === 2}>
        {
          setDaysTen && setDaysTen.map((item, idx) => {
            const iconUrl = `https://www.weatherbit.io/static/img/icons/${item && item.weather.icon}.png`

            return (
              <WeatherDaysItem
                key={idx}
                day="Today"
                temp={Math.floor(item.temp)}
                feelsLike={Math.floor(item.appMaxTemp)}
                humidity={item.rh}
                iconUrl={iconUrl}
                iconText={item.weather.description}
              />
            )
          })
        }
      </Content>
      <Content className="custom-scroll" activeContent={toggleState === 3}>
        {
          daysMonth && daysMonth.map((item, idx) => {
            const iconUrl = `https://www.weatherbit.io/static/img/icons/${item && item.weather.icon}.png`
            return (
              <WeatherDaysItem
                key={idx}
                day="Today"
                temp={Math.floor(item.temp)}
                feelsLike={Math.floor(item.appMaxTemp)}
                humidity={item.rh}
                iconUrl={iconUrl}
                iconText={item.weather.description}
              />
            )
          })
        }
      </Content>
    </Wrap>
  )
}

export default WeatherDays