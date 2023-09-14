export async function generateExamSchedule(inputFields) {
  try {
    const response = await fetch("https://localhost:7268/api/ExamSchedules", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputFields),
    });
    //console.log(response.body);
    //JSON.stringify(inputFields)
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed");
    }
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

export async function saveExamScheduleToDatabase(examSchedule) {
  try {
    const response = await fetch(
      "https://localhost:7268/api/ExamSchedules/saveDB",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputFields),
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed");
    }
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}
