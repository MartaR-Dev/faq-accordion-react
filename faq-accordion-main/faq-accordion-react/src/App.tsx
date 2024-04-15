import background from "./images/background-pattern-desktop.svg";
import "./App.css";
import { FAQCard } from "./FAQCard";

export const App = () => {
  return (
    <div className="App">
      <img
        src={background}
        className="img-fluid"
        alt="purple background with swirly lines"
      />
      <FAQCard />
    </div>
  );
};

export default App;
