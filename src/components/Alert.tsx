import { FC, useState } from "react";
import { clsx } from "clsx";

interface IAlertProps {
  title: string;
  text: string;
  status: "success" | "error";
  maxLength?: number;
}

const Alert: FC<IAlertProps> = ({ title, text, status, maxLength = 100 }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      className={clsx({
        "p-[1vmin] rounded-xl": true,
        "bg-green-400": status == "success",
        "bg-red-400": status == "error",
      })}
    >
      <h2
        className={clsx({
          "text-2xl font-bold": true,
          "text-green-950": status == "success",
          "text-red-950": status == "error",
        })}
      >
        {title}
      </h2>

      <button
        type="button"
        className="text-left"
        onClick={() => setOpen((prev) => !prev)}
      >
        <p
          className={clsx({
            "text-lg max-h-[100px]": true,
            "overflow-y-scroll": open,
            "text-green-950": status == "success",
            "text-red-950": status == "error",
          })}
        >
          {!open ? `${text.substring(0, maxLength)}...` : text}
        </p>
      </button>
    </div>
  );
};

export default Alert;
