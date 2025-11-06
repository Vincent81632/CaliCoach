async function getTrainingPlan(userProfile) {
  const res = await fetch("http://localhost:3000/api/generate-plan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userProfile }),
  });
  const data = await res.json();
  console.log("Plan:", data.output);
}
