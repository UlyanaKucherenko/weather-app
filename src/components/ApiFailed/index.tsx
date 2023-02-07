import { Wrap,Text} from "./styled";
import imgFailed from 'assets/img/api-failed.gif';

export function ApiFailed() {
  return (
      <Wrap>
        <Text>Sorry! Api request was Failed.</Text>
        <img src={imgFailed} alt=""/>
      </Wrap>
  )
}