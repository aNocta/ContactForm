import { FC, useEffect, useState } from "react";
import CalendarHeader from "./calendar-header/CalendarHeader";
import CalendarDays from "./calendar-days/CalendarDays";
import {
  ICalendarMonth,
  getStartDayOfWeek,
  monthes,
} from "./calendar-header/CalendarMonth";
import Slider from "../Slider";
import { numberToArr } from "../../tools/numberToArr";

const date = new Date();

const Calendar: FC<{
  setter?: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setter }) => {
  const [day, setDay] = useState<number>(1);
  const [month, setMonth] = useState<ICalendarMonth>(monthes[0]);
  const [year, setYear] = useState<number>(date.getFullYear());

  useEffect(() => {
    setter &&
      setter(
        `${day < 10 ? "0" : ""}${day}.${month.id + 1 < 10 ? "0" : ""}${
          month.id + 1
        }.${year}`
      );
  }, [day, month, year]);

  return (
    <div className="overflow-hidden border border-gray-400 bg-white shadow-xl rounded-2xl w-[200px] min-h-[220px]">
      <CalendarHeader setCurrentMounth={setMonth} />
      <CalendarDays
        setDay={setDay}
        days={month.daysCount}
        //   daysStart={getStartDayOfWeek(monthes, month.id, 6)}
      />

      <Slider
        labels={numberToArr(date.getFullYear(), 1920)}
        list={numberToArr(date.getFullYear(), 1920)}
        setter={setYear}
        slideWidth={200}
        atLast={true}
      />
    </div>
  );
};

export default Calendar;
