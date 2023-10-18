import React, { useEffect, useState } from "react";
import { DayMonthDatePickerProps } from "./DayMonthDatePicker.types";
import { dateMonth, dateYear, dateDay, months, dateMonthDayOffset, years } from "../../utils/calendarUtils";
import arraySupport from "dayjs/plugin/arraySupport";
import djs from "dayjs";
import { PopupMenu } from "../PopupMenu/PopupMenu";
import { FieldDecoration } from "../FieldDecoration/FieldDecoration";
import advancedFormat from "dayjs/plugin/advancedFormat";
import styled from "styled-components";

djs.extend(arraySupport);
djs.extend(advancedFormat);

const DayMonthDatePickerRoot = styled.div.attrs(props => ({
  className: "react-simple-widget month-date-picker " + props.className
}))``;

const DayMonthDatePickerPopupRoot = styled.div.attrs(props => ({
  className: "react-simple-widget month-date-picker-popup " + props.className
}))`
  header {
    p {
      font-weight: 400;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 2px;
    }

    button {
      i {
        color: var(--rsw-primary-color);
      }
    }
  }

  select {
    display: inline-block;
    width: auto;
    background-color: transparent;
  }

  .month-select {
    display: grid;
    grid-template-columns: repeat(4, 25%);

    button {
      transition: background-color var(--rsw-transition-duration);
      white-space: nowrap;
      border-radius: 2px;
    }

    button:focus,
    button:hover {
      outline: none;
      box-shadow: none;
    }

    button.active {
      background-color: var(--rsw-primary-color);
      color: white;
      font-weight: bold;
      border-radius: 25%
    }
  }

  .month-date-picker-error {
    text-align: center;
    margin-top: 12px;
    padding-top: 12px;
    font-size: 85%;
    font-weight: bold;
    color: var(--rsw-error-color);
    border-top: 1px solid #e3e3e3;
  }
`;

export const DayMonthDatePicker = ({
  value,
  monthDisplay = "small",
  validator,
  onChange,
  ...rest
}: DayMonthDatePickerProps): JSX.Element => {
  const [displayYear, setDisplayYear] = useState(() => {
   var year = dateYear(value)
   if (isNaN(year)){
    return djs().year()
   }
   return year;
  });
  const [displayDay, setDisplayDay] = useState(() => {
    var day = dateDay(value)
    // if (isNaN(day)){
    //   return djs().date()
    //  }
     return day;
  });
  const [displayMonth, setDisplayMonth] = useState(() => {
    
    var month = dateMonth(value)
    // if (isNaN(month)){
    //   return  djs().month()
    //  }
     return month;
  });
  const [daysInMonth, setDaysInMonth] = useState(() => {
    var days = djs([displayYear, displayMonth, displayDay]).daysInMonth();
    if (isNaN(days)){
      return 30;
    }
    return days
  }
    
  );
  const [error, setError] = useState("");

  const monthBtnClassName = (active: boolean): string => {
    const classes = ["btn", "btn-link", "btn-sm", "text-decoration-none"];
    if (active) classes.push("active");
    return classes.join(" ");
  };

  const resetDisplayDate = (): void => {
    const current = djs();
    setDisplayYear(current.year());
    setDisplayMonth(current.month());
    setDisplayDay(current.date())
  };

  useEffect(() => {
    var days = djs([displayYear, displayMonth, 1]).daysInMonth();
    if (!isNaN(days)){
      setDaysInMonth(days);
      if (displayDay > days){
        setDisplayDay(1);
        onChange(djs([displayYear, displayMonth, 1]).format("YYYY-MM-DD"));
      } else {
        onChange(djs([displayYear, displayMonth, displayDay]).format("YYYY-MM-DD"));
      }
    } else {
      setDaysInMonth(30);
      if (displayDay > 28){
        setDisplayDay(1);
        onChange(djs().format("YYYY-MM-DD"));
      } else {
        onChange(djs().format("YYYY-MM-DD"));
      }
    }
   
  
  }, [displayMonth, displayDay]);

  return (
    <PopupMenu>
      <DayMonthDatePickerRoot {...rest}>
        {monthDisplay == "long" ? djs([displayYear, displayMonth, displayDay]).format("MMMM D") :
        djs([displayYear, displayMonth, displayDay]).format("MMM D")}
      </DayMonthDatePickerRoot>

      {closePopup => (
        <DayMonthDatePickerPopupRoot className="card">
          <div className="card-body">
            <header className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0">Select Date</p>

              <button
                type="button"
                className="btn btn-light btn-sm"
                onClick={resetDisplayDate}>
                    {'\u23F1'}{' '}
                {/* <i className="fa fa-clock" /> */}
              </button>
            </header>

          

            <div className="month-select mb-4">
              {months.map((month, monthIndex) => (
                <button
                  key={month}
                  type="button"
                  className={monthBtnClassName(monthIndex === displayMonth)}
                  onClick={() => {
                    setDisplayMonth(monthIndex);
                  }}>
                  {month.substring(0, 3)}
                </button>
              ))}
            </div>

            <FieldDecoration label="Day" className="mb-0">
              {({ onFieldFocus, onFieldBlur }) => (
                <select
                  value={displayDay}
                  className="day-select"
                  onChange={e => {
                    setDisplayDay(parseInt(e.target.value))
                    if (validator) {
                      const selectedDate = djs([
                        displayYear,
                        displayMonth,
                        parseInt(e.target.value)
                      ]).format("YYYY-MM-DD");
                      const error = validator(selectedDate);
                      if (error) return setError(error);
                      else setError("");
                    } else setError("");

                    closePopup();
                  }}
                  onFocus={onFieldFocus}
                  onBlur={onFieldBlur}>
                  {Array(daysInMonth)
          .fill(null).map((_, dayIndex) => {
            
            const day = dayIndex + 1;
            return (
              <option key={dayIndex} value={day}>
                {day}
              </option>
            )
          })}
                </select>
              )}
            </FieldDecoration>

            {error && <div className="month-date-picker-error">{error}</div>}
          </div>
        </DayMonthDatePickerPopupRoot>
      )}
    </PopupMenu>
  );
};
