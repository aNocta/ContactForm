import { FC } from "react";
import { ICalendarMonth, getMonthNamesList, monthes } from "./CalendarMonth";
import Slider from "../../Slider";

const CalendarHeader: FC<{
  setCurrentMounth: React.Dispatch<React.SetStateAction<ICalendarMonth>>;
}> = ({ setCurrentMounth }) => {
  return (
    <Slider
      labels={getMonthNamesList(monthes)}
      setter={setCurrentMounth}
      list={monthes}
      slideWidth={200}
    />
  );
};

export default CalendarHeader;
