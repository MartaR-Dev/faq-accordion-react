import plusIcon from "./images/icon-plus.svg";

export const FAQQuestion = () => {
    return (
        <div className="p-4">
            <div className="d-flex flex-row justify-content-between">
                <h4 className="question fw-bold">
                    What is Frontend Mentor, and how will it help me?
                </h4>
                <img src={plusIcon} alt="Question plus icon" />
            </div>
            <p className="answer text-start">
                Frontend Mentor offers realistic coding challenges to help
                developers improve their frontend coding skills with projects in
                HTML, CSS, and JavaScript. It's suitable for all levels and
                ideal for portfolio building.
            </p>
        </div>
    );
};
