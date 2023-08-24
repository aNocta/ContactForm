import { FC } from "react";
import "./App.css";
import contactImg from "./assets/img/nature.jpg";
import ContactWindow from "./components/contact-window/ContactWindow";

const App: FC = () => {
  return (
    <div className="flex justify-center items-center md:h-screen">
      <ContactWindow
        imgSrc={contactImg}
        title="The Title"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tenetur ipsum vitae, explicabo sed voluptatem esse enim mollitia dicta laboriosam."
      />
    </div>
  );
};

export default App;
