import { FC, MouseEventHandler } from "react";

interface ICalendarDayProps {
  active: boolean;
  day?: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CalendarDay: FC<ICalendarDayProps> = ({ day, active, onClick }) => {
  return (
    <button
      type="button"
      className={`text-xl duration-200 ${active ? "hover:bg-gray-200" : ""}`}
      onClick={onClick}
    >
      {day}
    </button>
  );
};

export default CalendarDay;
