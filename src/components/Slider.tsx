import { FC, useEffect, useLayoutEffect, useRef, useState } from "react";

interface ISliderProps {
  slideWidth: number;
  labels: string[] | number[];
  list: any[];
  setter: React.Dispatch<React.SetStateAction<any>>;
  atLast?: boolean;
}
const Slider: FC<ISliderProps> = ({
  slideWidth,
  labels,
  list,
  setter,
  atLast = false,
}) => {
  if (list.length !== labels.length) return <></>;

  const [scrollPosition, setScrollPosition] = useState<number>(
    atLast ? (labels.length - 1) * slideWidth : 0
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (atLast) {
      ref.current?.lastElementChild?.scrollIntoView();
      setter(list[scrollPosition / slideWidth]);
    }
  }, [labels.length, ref.current?.scrollWidth]);

  useLayoutEffect(() => {
    ref.current?.scrollTo(scrollPosition, 0);
  }, [scrollPosition]);

  const changeScrollPosition = (position: number) => {
    if (position < slideWidth * labels.length && position >= 0) {
      setter(list[position / slideWidth]);
      setScrollPosition(position);
    }
  };

  return (
    <div>
      <div
        ref={ref}
        className="scroll-bar_hidden flex flex-nowrap overflow-x-scroll border-b border-gray-400 scroll-smooth snap-mandatory"
      >
        {labels.map((x, k) => (
          <button
            type="button"
            key={k}
            className="snap-start py-[1vmin] text-xl font-medium flex justify-center items-center h-full min-w-[200px] duration-200  hover:bg-gray-100"
          >
            {x}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="absolute text-4xl font-medium mt-[-45px]"
        onClick={() => changeScrollPosition(scrollPosition - 200)}
      >
        {"<"}
      </button>

      <button
        type="button"
        className="absolute text-4xl font-medium mt-[-45px] ml-[170px]"
        onClick={() => changeScrollPosition(scrollPosition + 200)}
      >
        {">"}
      </button>
    </div>
  );
};

export default Slider;
