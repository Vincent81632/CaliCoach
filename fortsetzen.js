import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

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
const email = konto.email
const docRef = doc(db, "konten", email)
const docSnap = await getDoc(docRef);
const button_fortsetzen = document.getElementById("button_fortsetzen")
const API_KEY = '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';
const loader = document.getElementsByClassName("loader")[0]

button_fortsetzen.addEventListener("click", async () => {
  loader.style.display = "flex"
  const filtered_exercices = JSON.parse(localStorage.getItem("mögliche_übungen"))
  const trainingsplan = docSnap.data().trainingsplan
  const nutzerprofiel = docSnap.data().nutzerprofiel
  const input_anpassungen = document.getElementById("input_anpassungen").value
  let änderungen = ``
  if (input_anpassungen) {
    änderungen = `Der Nutzer möchte etwas an dem bisherigen Trainingsplan anpassen nämlich: ${input_anpassungen} fals die Anpassungen keinen Sinn ergeben oder nicht relevant für den Trainingsplan sind, ignoriere sie einach.`
  }
  let user = `Du hast bisher diesen Calisthenics Trainingsplan: ${trainingsplan} für dieses Nutzerprofiel erstellt: ${nutzerprofiel} Deine Aufgabe ist es, zu diesem Calisthenics Trainingsplan eine Fortsetzung zu machen.  Strukturvorgaben: Nutze nur diese Übungen: ${filtered_exercices.join(", ")} ${änderungen} Gib den Plan nur für genau 1 Woche. Keine Einleitung und kein Fazit.Schreibe immer auch die Ziele der Woche auf. Du must immer auch ein Warm-up und ein Cool-down machen. Nicht nur z. B. individuelles Warm-up. Wenn du so etwas siehst:  ( 2 x 12 30s Pause ) Die 30s Pause stehen für die Pausen zwischen den jeweiligen Sätzen und nicht zwischen den Übungen. An den Tagen, an denen kein Training ist, machst du nicht sowas: "Dienstag": [] sondern lässt den Tag einfach aus. Du gibst ihn einfach nicht an. Du sollst das ganze als ausführbahren code schreiben, welcher funktioniert. Schreiben den Code in JSON.`;
  let system = "Du bist ein erfahrener Fitnesstrainer mit Spezialisierung auf Calisthenics."
  let assistant = `const trainingsplan = {"Ziele": ["z. B. Grundkraft verbessern"], "Montag": ["Warm-up:", "Jumping-jacks ( 1 x 30s )", "Pause: 30s", "Skilltraining:", "Handstand an der Wand ( 1 x 40s )", "Hauptteil:", "Liegestützen ( 3 x 10 wdh. 30s Pause )", "Pause: 60s", "Klimmzüge ( 3 x 5 wdh. 30s Pause )", "Cool-down:", "Schulterdehnung"]}`
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: 'qwen/qwen3-vl-32b-instruct',
      messages: [
        { role: "system", content: system },
        { role: 'user', content: user },
        { role: "assistant", content: assistant }
      ]
    })
  });

  const data = await response.json();

  if (
    data &&
    Array.isArray(data.choices) &&
    data.choices[0]?.message?.content
  ) {
    const antwort = data.choices[0].message.content;

    const überarbeitet = antwort
      .replace(/“|”/g, '"')                     // typografische Anführungszeichen → gerade
      .replace(/‘|’/g, "'")                     // typografische Apostrophe → gerade
      .replace(/[\uFEFF\u200B\r]/g, '')         // unsichtbare Zeichen entfernen
      .replace(/```json|```/g, '');             // Markdown-Formatierung entfernen


    console.log(überarbeitet);

    try {
      const jsonText = überarbeitet
        .replace(/^const trainingsplan\s*=\s*/, '')
        .replace(/;$/, '');

      const trainingsplan = eval(`(${jsonText})`);
      const konto = JSON.parse(localStorage.getItem("Konto"))
      const konto_email = konto.email;
      await setDoc(doc(db, "konten", konto_email), {
        trainingsplan
      });
      localStorage.setItem("trainingsplan", JSON.stringify(trainingsplan))
      window.location.href = "ergebnisse.html"

    } catch (err) {
      console.error("Eval-Fehler:", err);
    }
  } else {
    console.error("Fehlerhafte Antwortstruktur:", data);
  }
})