import { FC } from "react";

const CalendarHeaderItem: FC<{ title: string }> = ({ title }) => {
  return (
    <button className="snap-start py-[1vmin] text-xl font-medium flex justify-center items-center h-full min-w-[200px] duration-200  hover:bg-gray-100">
      {title}
    </button>
  );
};

export default CalendarHeaderItem;
