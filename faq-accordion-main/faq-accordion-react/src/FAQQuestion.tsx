import plusIcon from "./images/icon-plus.svg";

export const FAQQuestion = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <button type="button" onClick={() => alert("Clicked!")}>
          <h5 className="question fw-semibold">
            What is Frontend Mentor, and how will it help me?
          </h5>
        </button>
        <img src={plusIcon} alt="Question plus icon" />
      </div>

      <p className="text-start">
        Frontend Mentor offers realistic coding challenges to help developers
        improve their frontend coding skills with projects in HTML, CSS, and
        JavaScript. It's suitable for all levels and ideal for portfolio
        building.
      </p>
    </div>
  );
};
