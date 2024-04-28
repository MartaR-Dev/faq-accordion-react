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
    <div>
      <div
        className="d-flex justify-content-between"
        onClick={() => setIsActive(!isActive)}
      >
        <h5 className="question fw-semibold">{question}</h5>
        {isActive ? (
          <img src={minusIcon} alt="Question minus icon" />
        ) : (
          <img src={plusIcon} alt="Question plus icon" />
        )}
      </div>

      {isActive && <p className="text-start">{answer}</p>}
    </div>
  );
};
