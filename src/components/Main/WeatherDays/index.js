import {useContext, useState} from "react";
import {ThemeContext} from "../../../App";
import {Wrap, TabList, Tab, Content} from "./styled";
import WeatherDaysItem from "./WeatherDaysItem";

function WeatherDays() {

  const {weatherAllDays} = useContext(ThemeContext);
  const [toggleState, setToggleState] = useState(1);

  const daysWeek = weatherAllDays.list?.slice(0, 7)
  const setDaysTen = weatherAllDays.list?.slice(0, 10)
  const daysMonth = weatherAllDays.list?.slice(0, 30)


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
              const iconUrl = `http://openweathermap.org/img/wn/${item.weather && item.weather[0].icon.slice(0, 2)}d@2x.png`
              return (
                <div key={idx}>
                  <WeatherDaysItem
                    day="Today"
                    temp={item.main ? item.main.temp : null}
                    feelsLike={item.main ? item.main.feels_like : null}
                    humidity={item.main ? item.main.humidity : null}
                    iconUrl={iconUrl}
                    iconText={item.weather && item.weather[0].description}
                  />
                </div>
              )
            })
          }
        </Content>
        <Content className="custom-scroll" activeContent={toggleState === 2}>
          {
            setDaysTen && setDaysTen.map((item, idx) => {
              const iconUrl = `http://openweathermap.org/img/wn/${item.weather && item.weather[0].icon.slice(0, 2)}d@2x.png`
              return (
                <WeatherDaysItem
                  key={idx}
                  day="Today"
                  temp={item.main ? item.main.temp : null}
                  feelsLike={item.main ? item.main.feels_like : null}
                  humidity={item.main ? item.main.humidity : null}
                  iconUrl={iconUrl}
                  iconText={item.weather && item.weather[0].description}
                />
              )
            })
          }
        </Content>
        <Content className="custom-scroll" activeContent={toggleState === 3}>
          {
            daysMonth && daysMonth.map((item, idx) => {
              const iconUrl = `http://openweathermap.org/img/wn/${item.weather && item.weather[0].icon.slice(0, 2)}d@2x.png`
              return (
                <div key={idx}>
                  <WeatherDaysItem
                    day="Today"
                    temp={item.main ? item.main.temp : null}
                    feelsLike={item.main ? item.main.feels_like : null}
                    humidity={item.main ? item.main.humidity : null}
                    iconUrl={iconUrl}
                    iconText={item.weather && item.weather[0].description}
                  />
                </div>
              )
            })
          }
        </Content>
    </Wrap>
  )
}

export default WeatherDays