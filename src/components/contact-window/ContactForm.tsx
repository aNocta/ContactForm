import { FC } from "react";
import Input from "../Input/Input";
import Button from "../Button";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Alert from "../Alert";
import DateInput from "../DateInput";
import { ContactFormFields } from "./ContactForm.fields";

const ContactForm: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    setValue,
  } = useForm<ContactFormFields>();

  const onSubmit: SubmitHandler<ContactFormFields> = (data, e) => {
    e?.preventDefault();
    console.log(data);
  };

  if (isSubmitSuccessful)
    return (
      <div className="flex flex-col justify-center items-center h-[600px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          className="fill-green-500 w-[100px] h-[100px]"
        >
          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
        <span className="text-4xl font-medium text-green-500">Success!</span>
      </div>
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-[2vh]">
      {(errors.phoneNumber ||
        errors.dateOfBirth ||
        errors.firstName ||
        errors.lastName) && (
        <Alert
          status="error"
          title="Error"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi animi excepturi hic explicabo, pariatur incidunt dicta architecto harum atque expedita ea, dolor numquam! Voluptatum et adipisci soluta voluptates eum, ratione, placeat ipsam atque quae voluptatem, iste incidunt dolorem officiis eaque qui reprehenderit sunt aspernatur! Quidem sed recusandae sint consectetur laborum!"
        />
      )}

      <div className="grid mt-[2vh] md:grid-cols-2">
        <Controller
          name="firstName"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <Input
              label="Your first name:"
              type="text"
              name={field.name}
              value={field.value || ""}
              onChange={field.onChange}
              status={errors.firstName && "error"}
            />
          )}
        />

        <Controller
          name="lastName"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <Input
              label="Your last name:"
              type="text"
              name={field.name}
              value={field.value || ""}
              onChange={field.onChange}
              className="mt-[2vh] md:mt-0 md:ml-[1vmin]"
              status={errors.lastName && "error"}
            />
          )}
        />
      </div>

      <div className="flex mt-[2vh]">
        <Controller
          name="phoneNumber"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label="Your phone number:"
              name={field.name}
              value={field.value || ""}
              onChange={field.onChange}
              type="tel"
              className="w-full"
              status={errors.phoneNumber && "error"}
            ></Input>
          )}
        />
      </div>

      <div className="flex mt-[2vh]">
        <DateInput
          label="Date of birth"
          setValue={setValue}
          controllerProps={{
            name: "dateOfBirth",
            control: control,
            rules: {
              required: true,
              pattern: /[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{1,4}$/g,
            },
          }}
        ></DateInput>
      </div>

      <div>
        <Button text="enter" className="mt-[2vh] w-full md:w-min" />
      </div>
    </form>
  );
};

export default ContactForm;
