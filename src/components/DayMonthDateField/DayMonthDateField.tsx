import React from "react";
import { CustomField } from "../CustomField/CustomField";
import { FieldDecoration } from "../FieldDecoration/FieldDecoration";
import { DayMonthDateFieldProps } from "./DayMonthDateField.types";
import { DayMonthDatePicker } from "../DayMonthDatePicker/DayMonthDatePicker";
import styled from "styled-components";

const DayMonthDateFieldRoot = styled.div.attrs(props => ({
  className: "react-simple-widget month-date-field " + props.className
}))`
  .month-date-picker {
    display: flex;
  }

  select {
    padding-top: 0;
    padding-bottom: 0;
    flex: 1 1;
  }

  select:first-child {
    border-top: none;
    border-left: none;
    border-bottom: none;
  }

  select:last-child {
    border-top: none;
    border-right: none;
    border-bottom: none;
  }
`;

const DayMonthDateField = ({
  name,
  label,
  helper,
  leading,
  trailing,
  disabled,
  onChange,
  onFocus,
  onBlur,
  ...rest
}: DayMonthDateFieldProps): any => {
  return (
    <DayMonthDateFieldRoot>
      <CustomField name={name}>
        {({ value, error, touched, setValue, setTouched }) => (
          <FieldDecoration
            label={label}
            leading={leading}
            trailing={trailing}
            error={touched && error}
            helper={helper}
            disabled={disabled}>
            {({ onFieldFocus, onFieldBlur }) => (
              <DayMonthDatePicker
                value={value}
                onChange={date => {
                  setValue(date);
                  if (onChange) onChange(date);
                }}
                onFocus={e => {
                  onFieldFocus();
                  setTouched(true);
                  if (onFocus) onFocus(e);
                }}
                onBlur={e => {
                  onFieldBlur();
                  if (onBlur) onBlur(e);
                }}
                {...rest}
              />
            )}
          </FieldDecoration>
        )}
      </CustomField>
    </DayMonthDateFieldRoot>
  );
};

export default DayMonthDateField
