import {Wrap, Label, Select, Options, OptionsItem} from "./styled";
import {useRef, useState} from "react";

import Arrow from 'assets/img/arrow-down.svg'
import {ISelectOption} from "types/custom";

interface ISelect {
  options: ISelectOption[],
  onChange: (value: string) => void;
}

function RSelect({options,onChange}:ISelect) {

  const [dropdownIsOpened, setDropdownIsOpened] = useState(false);
  const [value, setValue] = useState<string>('select city');
  const ref = useRef<HTMLInputElement>(null);

  const onOpenDropdown = () => {
    setDropdownIsOpened(!dropdownIsOpened);
  };

  const onCloseDropdown = () => {
    setDropdownIsOpened(false);
  };

  const onChooseOption = (option:ISelectOption) => {
    setValue(option.value)
    onChange(option.value)
    onCloseDropdown();
  };

  return (
    <Wrap ref={ref}>
      <Label>
        <Select onClick={onOpenDropdown}>
          <span>{value}</span>
          <span style={{transform: dropdownIsOpened ? 'rotate(180deg)' : ''}}>
            <img src={Arrow} alt="" />
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
                    {option.label}
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