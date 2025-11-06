const gespeicherterPlan = localStorage.getItem("trainingsplan");
let trainingsplan;

if (gespeicherterPlan) {
    trainingsplan = JSON.parse(gespeicherterPlan);
}



Object.entries(trainingsplan).forEach(([key, value]) => {
    const button = document.createElement("button");
    button.className = "button_key";

    const training = document.createElement("p");
    training.className = "value";


    button.textContent = key;
    button.addEventListener("click", () => {
        training.innerHTML = "";
        value.forEach(eintrag => {
            training.innerHTML += `${eintrag}<br>`;
        });

        const aktiv = button.classList.contains("aktiv");
        button.classList.toggle("aktiv");
        training.style.display = aktiv ? "none" : "flex";
    });
    const div_ergebnisse = document.getElementById("Ergebnisse");
    div_ergebnisse.appendChild(button);
    div_ergebnisse.appendChild(training);
});