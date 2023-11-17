import React from "react";
import SurveyForm from "./SurveyForm";
import "./ContainerSurvey.css";

const ContainerSurvey = () => {
  return (
    <div className="container-survey">
      <h1>Generic Form Survey</h1>
      <p>Created by: Bruno Mota. React + React Bootstrap</p>
      <div className="container-survey-form">
        <SurveyForm />
      </div>
    </div>
  );
};

export default ContainerSurvey;
