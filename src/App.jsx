import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import FormView from "./views/formView/FormView";
import ExamScheduleView from "./views/examScheduleView/ExamScheduleView";
import NoPage from "./views/noPage/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/generate-table" element={<FormView />} />
        <Route path="/view-schedule" element={<ExamScheduleView />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
