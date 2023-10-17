import { HTMLAttributes } from "react";
import { DayMonthDatePickerProps} from '../DayMonthDatePicker/DayMonthDatePicker.types'
import { FieldDecorationProps} from '../FieldDecoration/FieldDecoration.types'

/** MonthDateField */
export interface DayMonthDateFieldProps
  extends Omit<DayMonthDatePickerProps, "label" | "value" | "onChange">,
    Pick<FieldDecorationProps, "label" | "leading" | "trailing" | "helper"> {
  name: string;
  disabled?: boolean;
  onChange?: (date: string) => void;
}
