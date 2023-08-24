interface ICalendarMonth {
  id: number;
  name: string;
  daysCount: number;
}

const getStartDayOfWeek = (
  monthes: ICalendarMonth[],
  monthIndex: number,
  firstDay: number = 1
) => {
  let days = 0;
  for (let i = 0; i < monthIndex; i++) {
    days += monthes[i].daysCount;
  }
  return days - 7 * Math.trunc(days / 7) + firstDay;
};

const getMonthNamesList = (monthes: ICalendarMonth[]) => {
  return monthes.reduce<string[]>((acc, curr) => [...acc, curr.name], []);
};

const monthes: ICalendarMonth[] = [
  {
    id: 0,
    name: "January",
    daysCount: 30,
  },
  {
    id: 1,
    name: "February",
    daysCount: 28,
  },
  {
    id: 2,
    name: "March",
    daysCount: 31,
  },
  {
    id: 3,
    name: "April",
    daysCount: 30,
  },
  {
    id: 4,
    name: "May",
    daysCount: 31,
  },
  {
    id: 5,
    name: "June",
    daysCount: 30,
  },
  {
    id: 6,
    name: "July",
    daysCount: 31,
  },
  {
    id: 7,
    name: "August",
    daysCount: 31,
  },
  {
    id: 8,
    name: "September",
    daysCount: 30,
  },
  {
    id: 9,
    name: "October",
    daysCount: 31,
  },
  {
    id: 10,
    name: "November",
    daysCount: 30,
  },
  {
    id: 10,
    name: "December",
    daysCount: 31,
  },
];

export type { ICalendarMonth };
export { monthes, getStartDayOfWeek, getMonthNamesList };
