import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

const path = window.location.pathname;
const currentFile = path.substring(path.lastIndexOf("/") + 1)
const link_home = document.getElementById("link_home")
const link_feedback = document.getElementById("link_feedback")

if (currentFile.includes("index") || currentFile === "") {
  link_home.style.color = "#ff3f5e"
}
else {
  link_home.style.color = "#4a6cf7"
}
if (currentFile.includes("feedback")) {
  link_feedback.style.color = "#ff3f5e"
}
else {
  link_feedback.style.color = "#4a6cf7"
}

const button_menu = document.getElementById("button_menü")
const div_links = document.getElementById("Links")
button_menu.addEventListener("click", () => {
  if (div_links.classList.contains("aktiv")) {
    div_links.classList.remove("aktiv")
  }
  else {
    div_links.classList.add("aktiv")

  }
})

const firebaseConfig = {
  apiKey: "AIzaSyDuE-7QxpT0z29wf15EMDyr_SYD6lEe_rQ",
  authDomain: "calicoach-9b92f.firebaseapp.com",
  projectId: "calicoach-9b92f",
  storageBucket: "calicoach-9b92f.firebasestorage.app",
  messagingSenderId: "747190447668",
  appId: "1:747190447668:web:350400bfe6a37f9ec9e461",
  measurementId: "G-1SM0SDQ0Q2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const konto = JSON.parse(localStorage.getItem("Konto"))
const button_signup = document.getElementById("button-Sign-up")

if (konto !== null) {
  const email = konto.email;
  button_signup.disabled = true;
  button_signup.classList.add("inaktiv");

  if (currentFile.includes("index") || currentFile === "") {
    async function lilalu() {
      try {
        const docRef = doc(db, "konten", email);
        const docSnap = await getDoc(docRef);
        const vorhandener_plan = docSnap.data().trainingsplan;

        if (!vorhandener_plan) return;

        const wochenTage = ["Ziele", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];

        const h1 = document.createElement("h3");
        h1.className = "h1_plan";
        h1.textContent = "Dein Trainingsplan";
        h1.style.height = "100%"
        h1.style.width = "100%"
        h1.style.textAlign = "center"

        const div_plan = document.createElement("div");
        div_plan.className = "div_plan";
        div_plan.appendChild(h1);

        Object.entries(vorhandener_plan)
          .filter(([tag]) => wochenTage.includes(tag))
          .sort(([a], [b]) => wochenTage.indexOf(a) - wochenTage.indexOf(b))
          .forEach(([tag, eintraege]) => {
            const button = document.createElement("button");
            button.className = "button_plan_key";
            button.textContent = tag;

            const training = document.createElement("p");
            training.className = "plan_value";
            training.style.display = "none";

            button.addEventListener("click", () => {
              const aktiv = button.classList.contains("aktiv");
              button.classList.toggle("aktiv");
              training.style.display = aktiv ? "none" : "flex";
              training.innerHTML = aktiv ? "" : eintraege.map(e => `${e}<br>`).join("");
            });

            div_plan.appendChild(button);
            div_plan.appendChild(training);
          });

        document.body.appendChild(div_plan);
        const button_plan_key = document.getElementsByClassName("button_plan_key");
        div_plan.addEventListener("click", () => {
          div_plan.style.height = "100vh"
          div_plan.style.width = "100vw"
          div_plan.style.top = "0"
          div_plan.style.left = "0"
          div_plan.style.overflowY = "auto"
          Array.from(button_plan_key).forEach(button => {
            button.style.display = "block";
          });
        })
      } catch (error) {
        console.error("Fehler beim Laden des Trainingsplans:", error);
      }
    }

    lilalu();
  }
}

async function button_plan_fortsetzen() {
  const konto = JSON.parse(localStorage.getItem("Konto"))
  if (konto) {
    const email = konto.email
    const passwort = konto.passwort

    const docRef = doc(db, "konten", email)
    const docSnap = await getDoc(docRef);

    const vorhandener_plan = docSnap.data().trainingsplan

    if (vorhandener_plan) {
      window.location.href = "plan_fortsetzen.html";
    } else {
      alert("Du musst zuerst einen ersten plan generieren, um diesen fortsetzen zu können.")
    }
  } else {
    alert("Du must dich hierfür zuerst anmelden.")
  }
}

const button_fortsetzen = document.getElementById("button_plan_fortsetzen")
button_fortsetzen.addEventListener("click", () => {
  button_plan_fortsetzen();
})


