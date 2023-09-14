import React, { useState } from "react";
import "./formView.css";
import ExamScheduleDisplay from "../../components/timetable/ExamScheduleDisplay";
import { generateExamSchedule } from "../../services/api";

const FormView = () => {
  const initialInputFields = Array.from({ length: 8 }, () => ({
    name: "",
    duration: 0,
  }));

  const [inputFields, setInputFields] = useState(initialInputFields);
  const [examSchedule, setExamSchedule] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("InputFields", inputFields);

    try {
      const examData = {
        examDate: "2023-09-15T00:00:00Z",
        exams: inputFields,
      };
      const examSheduleData = await generateExamSchedule(examData);

      if (examSheduleData) {
        setExamSchedule(examSheduleData);
      }
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  };

  const handleNameChange = (index, event) => {
    const values = [...inputFields];
    values[index].name = event.target.value;
    setInputFields(values);
  };
  const handleDurationChange = (index, event) => {
    const values = [...inputFields];
    values[index].duration = parseInt(event.target.value);
    setInputFields(values);
  };

  return (
    <>
      <h1>Exam Form</h1>
      <form onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
          <div key={index} className="examForm">
            <label>Exam Name:</label>
            <input
              type="text"
              name="name"
              value={inputField.name}
              onChange={(event) => handleNameChange(index, event)}
            />

            <label>Duration:</label>
            <input
              type="number"
              name="duration"
              value={inputField.duration}
              onChange={(event) => handleDurationChange(index, event)}
            />
          </div>
        ))}
        <button className="formBtn" onClick={handleSubmit}>
          Generate
        </button>
      </form>
      {examSchedule && <ExamScheduleDisplay examSchedule={examSchedule} />}
    </>
  );
};

export default FormView;
