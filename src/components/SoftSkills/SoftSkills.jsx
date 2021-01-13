import React from "react";
import PropTypes from "prop-types";
import "../../index.css";

const SoftSkills = (props) => {
  const { softSkills } = props;
  return (
    <div className="Soft-Skills-conteiner">
      <h3 className="Soft-Skills-title">Soft Skills</h3>
      <ul>
        {softSkills.map((skill) => {
          return (
            <li className="Soft-Skills-item" key={skill}>
              {" "}
              <span className="Soft-Skills-text">{skill}</span>{" "}
            </li>
          )
        })}
      </ul>
    </div>
  )
};

SoftSkills.propTypes = {
  softSkills: PropTypes.array.isRequired,
};

export default SoftSkills;

{
  /* <li className="Soft-Skills-item"> <span className="Soft-Skills-text">Fast learning</span> </li>
<li className="Soft-Skills-item"> <span className="Soft-Skills-text">Hardwork</span> </li>
<li className="Soft-Skills-item"> <span className="Soft-Skills-text">Problem solver</span> </li>
<li className="Soft-Skills-item"> <span className="Soft-Skills-text">Responsible</span> </li>
<li className="Soft-Skills-item"> <span className="Soft-Skills-text">Scrum</span> </li>
<li className="Soft-Skills-item"> <span className="Soft-Skills-text">Teamwork</span> </li> */
}
