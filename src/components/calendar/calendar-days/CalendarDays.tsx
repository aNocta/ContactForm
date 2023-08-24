import React, { FC } from "react";
import CalendarDay from "./CalendarDay";
import { numberToArr } from "../../../tools/numberToArr";

interface ICalendarDaysProps {
  days: number;
  setDay: React.Dispatch<React.SetStateAction<number>>;
  daysStart?: number;
}

const CalendarDays: FC<ICalendarDaysProps> = ({
  days,
  setDay,
  daysStart = 0,
}) => {
  return (
    <div className="grid grid-cols-7 box-border p-[5px]">
      {numberToArr(daysStart, 1).map((x) => (
        <CalendarDay key={`e${x}`} active={false} />
      ))}

      {numberToArr(days, 1).map((x) => (
        <CalendarDay key={x} day={x} active={true} onClick={() => setDay(x)} />
      ))}
    </div>
  );
};

export default CalendarDays;
