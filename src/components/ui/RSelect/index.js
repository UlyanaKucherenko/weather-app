import {Wrap, Label, Select, Option} from "./styled";
import {useContext} from "react";
import {ThemeContext} from "../../../App";

function RSelect() {
  const {mode} = useContext(ThemeContext);
  return (
    <Wrap>
      <label>
        <Select themeMode={mode}>
          <Option>Select city</Option>
          <Option>2</Option>
        </Select>
      </label>
    </Wrap>
  )
}

export default RSelect