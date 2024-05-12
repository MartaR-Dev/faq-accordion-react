import background from "./images/background-pattern-desktop.svg";
import "./App.css";
import { FAQCard } from "./faq-card";

export const App = () => {
  return (
    <div className="App vw-100 vh-100">
      <img
        src={background}
        className="img-fluid w-100 position-absolute"
        alt="purple background with swirly lines"
      />
      <FAQCard />
    </div>
  );
};

export default App;
