
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
const eingabemaske = document.getElementById("Eingabemaske")

document.getElementById("anmelden").addEventListener("click", async () => {
  const eingegebene_email = document.getElementById("email").value;
  const eingegebenes_passwort = document.getElementById("passwort").value
  if (!eingegebene_email || !eingegebenes_passwort) {
    alert("Bitte fülle alle Felder aus.")
    return;
  }
  const docRef = doc(db, "konten", eingegebene_email)
  const docSnap = await getDoc(docRef);
  try {
    if (docSnap.exists()) {
      const passwort = docSnap.data().passwort
      if (eingegebenes_passwort === passwort) {
        localStorage.setItem("Konto", JSON.stringify(docSnap.data()));
        await new Promise(resolve => setTimeout(resolve, 100)); // kurze Pause
        window.location.href = "index.html";
        console.log("Benutzer wurde ervolgreich angemeldet.")
        const erfolgskontrolle = document.createElement("p")
        erfolgskontrolle.innerHTML = "Du wurdest ervolgreich angemeldet!"
        eingabemaske.appendChild(erfolgskontrolle)


      }
      else {
        console.log("Das Passwort stimmt nicht überein.")
      }
    }
    else {
      console.log("Kein Dokument gefunden.")
    }
  } catch (error) {
    console.log("Fehler beim laden der Anmeldedaten.", error)
  }
})

document.getElementById("registrieren").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const passwort = document.getElementById("passwort").value;
  const coins = 0
  const xp = 0

  await setDoc(doc(db, "konten", email), {
    email,
    passwort,
    coins,
    xp
  });

  console.log("Benutzer erfolgreich registriert!");
  const erfolgskontrolle = document.createElement("p")
  erfolgskontrolle.innerHTML = "Du wurdest ervolgreich registriert!"
  eingabemaske.appendChild(erfolgskontrolle)
});