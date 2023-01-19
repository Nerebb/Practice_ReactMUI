import { TextField, useTheme } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function FormInput({ name, ...other }) {
  const theme = useTheme();
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          error={!!error}
          helperText={error?.message}
          InputLabelProps={{
            style: { color: theme.palette.text.primary },
          }}
          {...other}
        />
      )}
    />
  );
}

export default FormInput;
