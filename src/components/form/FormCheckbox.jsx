import { FormControlLabel, Checkbox } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function FormCheckbox({ name, ...other }) {
  const { control } = useFormContext(true);
  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Checkbox {...field} checked={field.value} />}
        />
      }
      {...other}
    />
  );
}

export default FormCheckbox;
