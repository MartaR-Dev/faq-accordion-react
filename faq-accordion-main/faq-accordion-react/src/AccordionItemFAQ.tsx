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

  return (
    <section className="accordion-item">
      <div
        onClick={() => setIsActive(!isActive)}
        className="accordion-header d-flex justify-content-between py-3"
      >
        <h5 className="accordion-question fw-semibold">{question}</h5>
        <img
          src={isActive ? minusIcon : plusIcon}
          alt="Plus icon on normal, minus icon on click"
        />
      </div>

      <p className={`accordion-answer text-start ${isActive ? "active" : ""}`}>
        {answer}
      </p>
    </section>
  );
};
