"use client";

import React, { useState } from "react";
import "./styles/QualificationForm.css";
import DropDown from "../../../DropDown/DropDown";
import CustomCalender from "../../../Calender/Calender";
import DropBox from "../../../DropBox/DropBox";
import Checkbox from "../../Checkbox/Checkbox";

const QualificationForm = () => {
  const [optionSelected, setOptionSelected] = useState();
  return (
    <div className="qualification-form">
      <div className="container-QF-1">
        <div>
          <div className="label">Ever Worked as</div>
          <DropDown type="Select That Describes You Best"/>
        </div>
        <div>
          <div className="label">Current Role</div>
          <DropDown type="Select Your Current Role"/>
        </div>
      </div>
      <div className="container-QF-1">
        <div>
          <div className="label">Highest Qualification</div>
          <DropDown type="Your Highest Qualification"/>
        </div>
        <div>
          <div className="label">Date Of Passing</div>
          <CustomCalender/>
        </div>
      </div>
      <div className="container-QF-1">
        <div>
          <div className="label">Name of School or University</div>
          <input
            type="text"
            className="input"
            placeholder="Type Your Institute Name"
            style={{ width: "35.677vw" }}
          />
        </div>
      </div>
      <div className="container-QF-1">
        <div>
          <div className="label">Tell us more about your Academics</div>
          <div className="label-small">
            Enter your Course or Subjects e.g. B.com, MTech or Intermediate from
            Science.
          </div>
          <input
            type="text"
            className="input"
            placeholder="B.tech. with Computer Science"
            style={{ width: "35.677vw" }}
          />
        </div>
      </div>
      <DropBox type="Upload Final Marksheet"/>
      {/* <FileUpload text="Upload Final Marksheet" /> */}
      <div className="container-QF-1">
        <div>
          <div className="label">Years of Experience</div>
          <DropDown type="Select Your Experience"/>
        </div>
        <div>
          <div className="label">Select Your Expertise Category</div>
          <DropDown type="Select Your Expertise"/>
        </div>
      </div>
      <div className="container-QF-1">
        <div>
          <div className="label">
            Are You An Ex-Reputed School/ College Or Coaching Teacher?
          </div>
          <button
            onClick={() => setOptionSelected("Yes")}
            style={
              optionSelected === "Yes"
                ? { backgroundColor: "rgba(103, 100, 255)", color: "white" }
                : null
            }
            className="option-button"
          >
          <Checkbox text={"A"} active={optionSelected === 'Yes'}/> Yes
          </button>
          <button
            onClick={() => setOptionSelected("No")}
            style={
              optionSelected === "No"
                ? { backgroundColor: "rgba(103, 100, 255)", color: "white" }
                : null
            }
            className="option-button"
          >
          <Checkbox text={"B"} active={optionSelected === 'No'}/>No
          </button>
        </div>
      </div>
      <div className="container-QF-1">
        <div>
          <div className="label">Any Certificate, Recognition or Reward</div>
          <div className="label-small">
            Enter Details About Relevent Certification or Recognition awarded by
            a recognized institute with publishing date to strengthen your
            profile.
          </div>
          <input
            type="text"
            className="input"
            placeholder="Title of certification"
            style={{ width: "35.677vw" }}
          />
        </div>
      </div>
      <DropBox type="Upload Experience Proof"/>
    </div>
  );
};

export default QualificationForm;
