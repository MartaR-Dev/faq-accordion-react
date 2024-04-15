import starIcon from "./images/icon-star.svg";
import { FAQQuestion } from "./FAQQuestion";

export const FAQCard = () => {
  return (
    <div className="container card-base">
      <div className="d-flex flex-row">
        <img src={starIcon} alt="Star icon" />
        <h1 id="card-title" className="fw-bold">
          FAQs
        </h1>
      </div>
      <FAQQuestion />
    </div>
  );
};