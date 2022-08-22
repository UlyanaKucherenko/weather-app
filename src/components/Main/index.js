import {Wrap, Container, Row} from "./styled";
import WeatherDay from "./WeatherDay";
import WeatherDescription from "./WeatherDescription";

function Main() {
  return (
    <Wrap>
      <Container>
        <Row>
          <WeatherDay/>
          <WeatherDescription/>
        </Row>
      </Container>
    </Wrap>
  )
}

export default Main