import { TextField } from "@mui/material";
import React from "react";

interface IValueProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: "outlined" | "filled" | "standard";
  type?: string;
}

const GetInputValue: React.FC<IValueProps> = ({
  label,
  name,
  value,
  onChange,
  variant = "filled",
  type = "text",
}) => {
  return (
    <>
      <TextField
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        variant={variant}
        type={type}
        fullWidth
        sx={{
          bgcolor: "#fff",
          border: "none",
          borderRadius: "8px",
          mb: 5,
          "& .MuiFilledInput-root": {
            borderBottom: "none", 
          },
          "& .MuiFilledInput-underline:before": {
            borderBottom: "none",
          },
          "& .MuiFilledInput-underline:after": {
            borderBottom: "none", 
          },
        }}
      />
    </>
  );
};

export default GetInputValue;
