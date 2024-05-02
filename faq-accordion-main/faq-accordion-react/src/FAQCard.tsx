import starIcon from "./images/icon-star.svg";
import { AccordionItemFAQ } from "./AccordionItemFAQ";
import { questionsAndAnswers } from "./Questions_Answers";

export const FAQCard = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card-base p-5">
        <div className="card-header d-flex flex-row mb-3">
          <img src={starIcon} alt="Star icon" />
          <h1 id="card-title" className="fw-bold">
            FAQs
          </h1>
        </div>

        {questionsAndAnswers.map(({ question, answer }, index) => (
          <>
            <AccordionItemFAQ question={question} answer={answer} />
            {index !== questionsAndAnswers.length - 1 && (
              <hr className="my-1" />
            )}
          </>
        ))}
      </div>
    </div>
  );
};
