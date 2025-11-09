async function getTrainingPlan(userProfile) {
  const res = await fetch("https://calicoach-dgva.onrender.com/generate-plan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userProfile }),
  });
  const data = await res.json();
  console.log("Antwort:", data.output);
}

getTrainingPlan("Was kannst du alles?")