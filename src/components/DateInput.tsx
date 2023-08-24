import { FC, useState } from "react";
import Input from "./Input/Input";
import clsx from "clsx";
import Calendar from "./calendar/Calendar";
import {
  UseControllerProps,
  UseFormSetValue,
  useController,
} from "react-hook-form";
import { ContactFormFields } from "./contact-window/ContactForm.fields";

interface IDateInputProps {
  controllerProps: UseControllerProps<ContactFormFields>;
  label: string;
  setValue: UseFormSetValue<ContactFormFields>;
}

const DateInput: FC<IDateInputProps> = ({
  label,
  controllerProps,
  setValue,
}) => {
  const { field } = useController(controllerProps);
  const [visibility, setVisibility] = useState<boolean>(false);

  return (
    <div>
      <Input
        type="text"
        label={label}
        name={controllerProps.name}
        value={field.value || ""}
        onChange={field.onChange}
        onFocus={() => setVisibility(false)}
      />

      <div
        className={clsx({
          "block z-[999]": !visibility,
          hidden: visibility,
        })}
      >
        <div
          className="absolute w-full h-screen left-0 top-0"
          onClick={() => setVisibility(true)}
        ></div>

        <div className="absolute">
          <Calendar
            setter={(v) => {
              setValue("dateOfBirth", v.toString());
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DateInput;
