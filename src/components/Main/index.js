import {Wrap, Container, Row} from "./styled";
import WeatherDay from "./WeatherDay";
import WeatherDescription from "./WeatherDescription";
import WeatherDays from "./WeatherDays";

function Main() {

  return (
    <Wrap>
      <Container>
        <Row>
          <WeatherDay />
          <WeatherDescription/>
        </Row>
        <Row>
          <WeatherDays />
        </Row>
      </Container>
    </Wrap>
  )
}

export default Main