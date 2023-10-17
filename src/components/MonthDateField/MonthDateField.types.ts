import { HTMLAttributes } from "react";
import {MonthDatePickerProps} from '../MonthDatePicker/MonthDatePicker.types'
import {FieldDecorationProps} from '../FieldDecoration/FieldDecoration.types'

/** MonthDateField */
export interface MonthDateFieldProps
  extends Omit<MonthDatePickerProps, "label" | "value" | "onChange">,
    Pick<FieldDecorationProps, "label" | "leading" | "trailing" | "helper"> {
  name: string;
  disabled?: boolean;
  onChange?: (date: string) => void;
}
