import React, { useState } from "react";
import { DayMonthDatePicker } from "./DayMonthDatePicker";
import advancedFormat from "dayjs/plugin/advancedFormat";
import djs from "dayjs";

djs.extend(advancedFormat);

export default { title: "DayMonthDatePicker", component: DayMonthDatePicker };

export const Default = (): any => {
  const ExampleApp = (): any => {
    const [date, setDate] = useState("2021-09-04");

    return (
      <DayMonthDatePicker
        className="btn btn-outline-primary btn-sm d-inline-block w-auto"
        onChange={setDate}
        value={date}
      />
    );
  };

  return <ExampleApp />;
};

export const WithValidator = (): any => {
  const ExampleApp = (): any => {
    const [date, setDate] = useState(djs().format("YYYY-MM-DD"));

    const validator = (date: string): string => {
      if (djs(date).isBefore(djs())) {
        return "Must be after this month";
      } else return null;
    };

    return (
      <DayMonthDatePicker
        className="btn btn-outline-primary btn-sm d-inline-block w-auto"
        validator={validator}
        onChange={setDate}
        value={date}
      />
    );
  };

  return <ExampleApp />;
};
