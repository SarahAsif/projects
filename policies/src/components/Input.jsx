import React from "react";
import TextField from "@mui/material/TextField";

const TextInput = (props) => {
  const { label, value, type, handleChange } = props;

  return (
    <div className="">
      <TextField
        onChange={handleChange}
        value={value}
        variant="standard"
        label={label}
        type={type}
        sx={{
          borderRadius: 4,
          paddingRight: 2,
          paddingLeft: 2,
          input: { color: "grey" },
          label: { color: "grey", padding: 1 },
        }}
        className="bg-gray-100 p-6"
      />

      <p></p>
    </div>
  );
};

export default TextInput;
