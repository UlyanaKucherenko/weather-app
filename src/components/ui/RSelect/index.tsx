import {useRef, useState} from "react";

import { useOutsideClick } from 'hooks/useOutsideClick';
import {Wrap, Label, Select, Options, OptionsItem, SelectIcon} from "./styled";
import Arrow from 'assets/img/arrow-down.svg'
import {ISelectOption} from "types/custom";

interface ISelect {
  value: string,
  options: ISelectOption[],
  onChange: (value: string) => void;
}

export const RSelect = ({value, options, onChange}: ISelect) => {

  const [dropdownIsOpened, setDropdownIsOpened] = useState(false);
  const dropdownRef = useRef<HTMLInputElement>(null);

  const onOpenDropdown = () => {
    setDropdownIsOpened(!dropdownIsOpened);
  };

  const onCloseDropdown = () => {
    setDropdownIsOpened(false);
  };

  const onChooseOption = (option: ISelectOption) => {
    onChange(option.value)
    onCloseDropdown();
  };

  useOutsideClick(dropdownRef, () => {
    if (dropdownIsOpened) setDropdownIsOpened(false);
  });

  return (
      <Wrap ref={dropdownRef}>
        <Label>
          <Select onClick={onOpenDropdown}>
            <span>{value}</span>
            <SelectIcon
                src={Arrow}
                isActive={dropdownIsOpened}
                alt=""
            />
          </Select>
          {
              dropdownIsOpened && <Options>
                {
                  options.map((option, idx) => {
                    return (
                        <OptionsItem
                            key={option.value}
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
};