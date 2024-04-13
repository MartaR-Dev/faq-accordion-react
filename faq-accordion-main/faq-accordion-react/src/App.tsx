import background from "./images/background-pattern-desktop.svg";
import "./App.css";
import { FAQCard } from "./FAQCard";

function App() {
  return (
    <div className="App">
      <section className="background-img">
        <img
          src={background}
          className="img-fluid"
          alt="purple background with swirly lines"
        />
      </section>

      <FAQCard />
    </div>
  );
}

export default App;
