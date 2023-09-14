import React from "react";
import { saveExamScheduleToDatabase } from "../../services/api";
import "./ExamScheduleDisplay.css";

const ExamScheduleDisplay = ({ examSchedule }) => {
  const handleDBsave = async (e) => {
    e.preventDefault();

    try {
      const response = await saveExamScheduleToDatabase(examSchedule);
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  };

  return (
    <div className="exam-schedule">
      <h1>Exam Schedule</h1>
      <small>generated 1 hour between 2 exams in same halls</small>
      <div className="scheduleList">
        <ul>
          {examSchedule.map((exam, index) => (
            <li key={index} className="listItem">
              Exam Name: {exam.examName}
              <br />
              Exam Date: {exam.date}
              <br />
              Exam Hall: {exam.hallNo}
              <br />
              Start Time: {exam.startTime}
              <br />
              End Time: {exam.endTime}
              <br />
            </li>
          ))}
        </ul>
      </div>

      <button onClick={handleDBsave}>Save to database</button>
    </div>
  );
};

export default ExamScheduleDisplay;
