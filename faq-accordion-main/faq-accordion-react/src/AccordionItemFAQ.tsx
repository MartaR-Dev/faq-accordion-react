import { useState } from "react";
import plusIcon from "./images/icon-plus.svg";
import minusIcon from "./images/icon-minus.svg";

interface AccordionItemFAQProps {
  question: string;
  answer: string;
}

export const AccordionItemFAQ = ({
  question,
  answer,
}: AccordionItemFAQProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleAccordion = () => setIsActive(!isActive);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleAccordion();
    }
  };

  return (
    <section className="accordion-item">
      <div
        className="accordion-header d-flex justify-content-between py-3"
        onClick={toggleAccordion}
        onKeyDown={handleKeyPress}
        tabIndex={0}
        role="button"
        aria-expanded={isActive}
      >
        <h5 className="accordion-question fw-semibold">{question}</h5>
        <img
          src={isActive ? minusIcon : plusIcon}
          alt={isActive ? "Minus icon" : "Plus icon"}
        />
      </div>

      <p
        className={`accordion-answer text-start ${isActive ? "active" : ""}`}
        aria-hidden={!isActive}
      >
        {answer}
      </p>
    </section>
  );
};
