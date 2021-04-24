import React from "react";
import { useField } from "formik";
import { KeyboardDatePicker } from "@material-ui/pickers";

function CustomDatePicker(props) {
  const { handleDateChange, selectedDate, label, className } = props;
  const [field, meta] = useField(props);
  const errText = meta.error && meta.touched ? meta.error : "";
  return (
    <KeyboardDatePicker
      {...field}
      className={className}
      variant="inline"
      format="MM/dd/yyyy"
      label={label}
      value={selectedDate}
      onChange={handleDateChange}
      required
      error={!!errText}
      helperText={errText}
      placeholder="MM-DD-YYYY"
    />
  );
}
export default CustomDatePicker;
