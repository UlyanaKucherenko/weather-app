import {Wrap, Label, Select, Options, OptionsItem} from "./styled";
import {useRef, useState} from "react";

import Arrow from '../../../assets/img/arrow-down.svg'

function RSelect() {

  const options = [
    'Berlin',
    'Paris',
    'London',
    'Madrid',
    'Vienna',
  ];

  const [dropdownIsOpened, setDropdownIsOpened] = useState(false);
  const ref = useRef();

  const onOpenDropdown = () => {
    setDropdownIsOpened(!dropdownIsOpened);
  };

  const onCloseDropdown = () => {
    setDropdownIsOpened(false);
  };

  const onChooseOption = (option) => {
    console.log(option)
    onCloseDropdown();
  };

  return (
    <Wrap ref={ref}>
      <Label>
        <Select onClick={onOpenDropdown}>
          <span>select city</span>
          <span style={{transform: dropdownIsOpened ? 'rotate(180deg)' : ''}}>
            <img src={Arrow}/>
          </span>
        </Select>
        {
          dropdownIsOpened && <Options>
            {
              options.map((option, idx) => {
                return (
                  <OptionsItem
                    key={idx}
                    onClick={() => onChooseOption(option)}
                  >
                    {option}
                  </OptionsItem>
                )
              })
            }
          </Options>
        }
      </Label>
    </Wrap>
  )
}

export default RSelect