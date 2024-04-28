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
    <div className="accordion-item mt-4">
      <div
        className="d-flex justify-content-between"
        onClick={() => setIsActive(!isActive)}
      >
        <h5 className="accordion-question fw-semibold">{question}</h5>
        <img
          src={isActive ? minusIcon : plusIcon}
          alt="Plus icon on normal, minus icon on click"
        />
      </div>

      {isActive && <p className="accordion-answer text-start">{answer}</p>}
    </div>
  );
};
