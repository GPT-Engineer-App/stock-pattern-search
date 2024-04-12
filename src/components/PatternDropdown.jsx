import React from "react";
import { Select } from "@chakra-ui/react";

const PatternDropdown = ({ value, onChange }) => {
  const patterns = ["Head and Shoulders", "Cup and Handle", "Double Top", "Wedge"];

  return (
    <Select value={value} onChange={onChange} placeholder="Select a pattern">
      {patterns.map((pattern) => (
        <option key={pattern} value={pattern}>
          {pattern}
        </option>
      ))}
    </Select>
  );
};

export default PatternDropdown;
