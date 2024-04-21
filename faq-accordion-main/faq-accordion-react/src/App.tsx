import background from "./images/background-pattern-desktop.svg";
import "./App.css";
import { FAQCard } from "./FAQCard";

export const App = () => {
  return (
    <div className="App w-100 h-100 position-relative">
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
