import starIcon from "./images/icon-star.svg";
import { AccordionItemFAQ } from "./AccordionItemFAQ";
import { questionsAndAnswers } from "./Questions_Answers";

export const FAQCard = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card-base p-5">
        <div className="card-header d-flex flex-row">
          <img src={starIcon} alt="Star icon" />
          <h1 id="card-title" className="fw-bold">
            FAQs
          </h1>
        </div>

        {questionsAndAnswers.map(({ question, answer }) => (
          <AccordionItemFAQ question={question} answer={answer} />
        ))}
      </div>
    </div>
  );
};
