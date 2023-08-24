import { FC } from "react";

interface IButtonProps {
  text: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Button: FC<IButtonProps> = ({ text, className = "", onClick }) => {
  return (
    <button
      className={`${className} bg-black text-white text-xl font-medium p-[1.5vmin] rounded-xl duration-200 hover:scale-105 md:p-[1vmin]`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
