import { HTMLAttributes } from "react";

/** MonthDatePicker */
export interface DayMonthDatePickerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  value: string;
  monthDisplay?: "small" | "long";
  validator?: (date: string) => string;
  onChange: (date: string) => void;
}
