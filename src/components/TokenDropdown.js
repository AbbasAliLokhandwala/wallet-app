import React, {useState} from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const TokenDropdown = ({ selectedToken, onSelectToken }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
      <DropdownToggle caret>{selectedToken}</DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => onSelectToken("BNB")}>BNB</DropdownItem>
        <DropdownItem onClick={() => onSelectToken("BabyDoge")}>BabyDoge</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default TokenDropdown;
