import React from "react";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

function CustomRadioButtons({ options, selectedValue, onChange }) {
  const neonBlue = "#00d4ff";

  return (
    <FormControl component="fieldset">
      <RadioGroup value={selectedValue} onChange={onChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={
              <Radio
                sx={{
                  color: neonBlue,
                  '&.Mui-checked': {
                    color: neonBlue,
                    filter: 'drop-shadow(0 0 6px #00d4ff)',
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(0, 212, 255, 0.1)',
                  },
                  width: 24,
                  height: 24,
                }}
              />
            }
            label={
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "900",
                  fontFamily: "'Orbitron', sans-serif",
                  color: '#00d4ff',
                  userSelect: 'none',
                }}
              >
                {option.label}
              </span>
            }
            sx={{
              marginBottom: '12px',
            }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default CustomRadioButtons;
