import { FC } from "react";
import ContactForm from "./ContactForm";

interface IContactWindowProps {
  title?: string;
  subtitle?: string;
  imgSrc?: string;
}

const ContactWindow: FC<IContactWindowProps> = ({
  title,
  subtitle,
  imgSrc,
}) => {
  return (
    <div className="grid bg-white overflow-hidden md:shadow-xl md:grid-cols-2 md:rounded-xl md:w-[75vw] md:min-w-[768px] md:h-[75vh]">
      {imgSrc && (
        <img className="object-cover h-full" src={imgSrc} draggable="false" />
      )}

      <div className="p-[1vmin]">
        <h1 className="text-4xl font-medium">{title}</h1>
        <p className="text-lg text-gray-500">{subtitle}</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactWindow;
