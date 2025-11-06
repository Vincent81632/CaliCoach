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

const buttons_equipment = document.getElementsByClassName("button_equipment");
//Von hier
for (let i = 0; i < buttons_equipment.length; i++) {
  buttons_equipment[i].addEventListener("click", function () {
    if (!this.classList.contains("aktiv")) {
      this.classList.add("aktiv");
      this.style.backgroundColor = "#4a6cf7";
      this.style.color = "#ffffff"
    } else {
      this.classList.remove("aktiv");
      this.style.backgroundColor = "#d3d3d3";
      this.style.color = "#2c2c2c"
    }
  });
}

const buttons_muskeln = document.getElementsByClassName("button_muskeln");
for (let i = 0; i < buttons_muskeln.length; i++) {
  buttons_muskeln[i].addEventListener("click", function () {
    if (!this.classList.contains("aktiv")) {
      this.classList.add("aktiv");
      this.style.backgroundColor = "#4a6cf7";
      this.style.color = "#ffffff"
    } else {
      this.classList.remove("aktiv");
      this.style.backgroundColor = "#d3d3d3";
      this.style.color = "#2c2c2c"
    }
  });
}

const buttons_ziele = document.getElementsByClassName("button_Ziele");
for (let i = 0; i < buttons_ziele.length; i++) {
  buttons_ziele[i].addEventListener("click", function () {
    if (!this.classList.contains("aktiv")) {
      this.classList.add("aktiv");
      this.style.backgroundColor = "#4a6cf7";
      this.style.color = "#ffffff"
    } else {
      this.classList.remove("aktiv");
      this.style.backgroundColor = "#d3d3d3";
      this.style.color = "#2c2c2c"
    }
  });
}
//bis hier das muss alles da bleiben. 

//von hier 

//bis heir muss in die Klick-Funktion rein.





const übungen = [
  // --- Liste 1 ---
  {
    name: "Incline Push-up",
    muskeln: ["Brust", "Trizeps", "Schultern", "Six-pack"]
  },
  {
    name: "Australian Pull-up",
    muskeln: ["Latissimus", "Bizeps", "Rücken", "Six-pack"]
  },
  {
    name: "Bodyweight Squat",
    muskeln: ["Quadrizeps", "Gluten", "Six-pack"]
  },
  {
    name: "Hanging Knee Raise",
    muskeln: ["Six-pack", "Schräge Bauchmuskeln", "Latissimus"]
  },
  {
    name: "Dips (an Barren oder Ringen)",
    muskeln: ["Trizeps", "Brust", "Schultern", "Six-pack"]
  },
  {
    name: "Pistol Squat",
    muskeln: ["Quadrizeps", "Gluten", "Waden", "Six-pack"]
  },
  {
    name: "Archer Pull-up",
    muskeln: ["Latissimus", "Bizeps", "Rücken", "Six-pack"]
  },
  {
    name: "Muscle-up",
    muskeln: ["Latissimus", "Bizeps", "Trizeps", "Brust", "Schultern", "Six-pack"]
  },
  {
    name: "Handstand Push-up",
    muskeln: ["Schultern", "Trizeps", "Trapezmuskeln", "Six-pack"]
  },
  {
    name: "Planche Push-up",
    muskeln: ["Schultern", "Brust", "Trizeps", "Rücken", "Six-pack"]
  },

  // --- Liste 2 ---
  {
    name: "Wall Sit",
    muskeln: ["Quadrizeps", "Gluten", "Six-pack"]
  },
  {
    name: "Glute Bridge",
    muskeln: ["Gluten", "Hamstrings", "Six-pack"]
  },
  {
    name: "Side Plank",
    muskeln: ["Schräge Bauchmuskeln", "Schultern", "Six-pack"]
  },
  {
    name: "Superman Hold",
    muskeln: ["Rücken", "Gluten", "Schultern"]
  },
  {
    name: "Jump Squat",
    muskeln: ["Quadrizeps", "Gluten", "Waden", "Six-pack"]
  },
  {
    name: "L-Sit (an Boden oder Ringen)",
    muskeln: ["Six-pack", "Schultern", "Trizeps"]
  },
  {
    name: "One-Arm Push-up",
    muskeln: ["Brust", "Trizeps", "Schultern", "Six-pack"]
  },
  {
    name: "Front Lever Hold",
    muskeln: ["Latissimus", "Rücken", "Six-pack", "Bizeps"]
  },
  {
    name: "Back Lever",
    muskeln: ["Latissimus", "Brust", "Rücken", "Six-pack"]
  },
  {
    name: "Human Flag",
    muskeln: ["Schräge Bauchmuskeln", "Latissimus", "Schultern", "Six-pack"]
  },

  // --- Liste 3 ---
  {
    name: "Bird Dog",
    muskeln: ["Rücken", "Gluten", "Schultern", "Six-pack"]
  },
  {
    name: "Reverse Lunge",
    muskeln: ["Quadrizeps", "Gluten", "Hamstrings", "Six-pack"]
  },
  {
    name: "Hollow Body Hold",
    muskeln: ["Six-pack", "Schräge Bauchmuskeln"]
  },
  {
    name: "Hip Thrust (einbeinig)",
    muskeln: ["Gluten", "Hamstrings", "Six-pack"]
  },
  {
    name: "Clapping Push-up",
    muskeln: ["Brust", "Trizeps", "Schultern", "Six-pack"]
  },
  {
    name: "Typewriter Pull-up",
    muskeln: ["Latissimus", "Bizeps", "Rücken", "Six-pack"]
  },
  {
    name: "Dragon Flag",
    muskeln: ["Six-pack", "Schräge Bauchmuskeln", "Rücken"]
  },
  {
    name: "One-Arm Chin-up",
    muskeln: ["Bizeps", "Latissimus", "Rücken", "Six-pack"]
  },
  {
    name: "V-Sit",
    muskeln: ["Six-pack", "Schräge Bauchmuskeln", "Schultern"]
  },
  {
    name: "Maltese Planche",
    muskeln: ["Brust", "Schultern", "Trizeps", "Rücken", "Six-pack"]
  },
  {
    name: "Push-up",
    muskeln: ["Brust", "Trizeps", "Schultern", "Six-pack"]
  },
  {
    name: "Pull-up",
    muskeln: ["Latissimus", "Bizeps", "Rücken", "Six-pack"]
  },
  {
    name: "Bulgarian Split Squat",
    muskeln: ["Quadrizeps", "Gluten", "Hamstrings", "Six-pack"]
  },
  {
    name: "Calf Raise",
    muskeln: ["Waden", "Quadrizeps", "Gluten"]
  },
  {
    name: "Diamond Push-up",
    muskeln: ["Trizeps", "Brust", "Schultern", "Six-pack"]
  },
  {
    name: "Wide Grip Pull-up",
    muskeln: ["Latissimus", "Rücken", "Bizeps", "Schultern"]
  },
  {
    name: "Nordic Hamstring Curl",
    muskeln: ["Hamstrings", "Gluten", "Six-pack"]
  },
  {
    name: "Chest-to-Bar Pull-up",
    muskeln: ["Latissimus", "Bizeps", "Rücken", "Brust"]
  },
  {
    name: "One-Arm Handstand",
    muskeln: ["Schultern", "Trizeps", "Trapezmuskeln", "Six-pack"]
  },
  {
    name: "Victorian Planche",
    muskeln: ["Schultern", "Brust", "Trizeps", "Rücken", "Six-pack"]
  },
  {
    name: "Incline Diamond Push-up",
    muskeln: ["Trizeps", "Brust", "Schultern", "Six-pack"]
  },
  {
    name: "Chin-up",
    muskeln: ["Bizeps", "Latissimus", "Rücken", "Six-pack"]
  },
  {
    name: "Cossack Squat",
    muskeln: ["Quadrizeps", "Gluten", "Hamstrings", "Waden"]
  },
  {
    name: "Explosive Step-up",
    muskeln: ["Quadrizeps", "Gluten", "Waden", "Hamstrings"]
  },
  {
    name: "Archer Push-up",
    muskeln: ["Brust", "Trizeps", "Schultern", "Six-pack"]
  },
  {
    name: "Commando Pull-up",
    muskeln: ["Bizeps", "Latissimus", "Rücken", "Schultern"]
  },
  {
    name: "Glute Ham Raise",
    muskeln: ["Hamstrings", "Gluten", "Quadrizeps"]
  },
  {
    name: "Pseudo Planche Push-up",
    muskeln: ["Schultern", "Brust", "Trizeps", "Six-pack"]
  },
  {
    name: "Headstand to Handstand",
    muskeln: ["Schultern", "Trizeps", "Trapezmuskeln", "Six-pack"]
  },
  {
    name: "Iron Cross (Ringe)",
    muskeln: ["Schultern", "Brust", "Trizeps", "Rücken", "Six-pack"]
  },
  {
    name: "Decline Push-up",
    muskeln: ["Brust", "Trizeps", "Schultern", "Six-pack"]
  },
  {
    name: "Close Grip Pull-up",
    muskeln: ["Bizeps", "Latissimus", "Rücken", "Six-pack"]
  },
  {
    name: "Sissy Squat",
    muskeln: ["Quadrizeps", "Gluten", "Hamstrings"]
  },
  {
    name: "Single Leg Calf Raise",
    muskeln: ["Waden", "Quadrizeps", "Gluten"]
  },
  {
    name: "Hindu Push-up",
    muskeln: ["Brust", "Schultern", "Trizeps", "Six-pack"]
  },
  {
    name: "Mixed Grip Pull-up",
    muskeln: ["Latissimus", "Bizeps", "Rücken", "Schultern"]
  },
  {
    name: "Nordic Squat",
    muskeln: ["Quadrizeps", "Hamstrings", "Gluten"]
  },
  {
    name: "Tiger Bend Push-up",
    muskeln: ["Trizeps", "Schultern", "Brust", "Six-pack"]
  },
  {
    name: "One-Arm Pull-up Negative",
    muskeln: ["Bizeps", "Latissimus", "Rücken", "Six-pack"]
  },
  {
    name: "Straddle Planche",
    muskeln: ["Schultern", "Brust", "Trizeps", "Six-pack", "Rücken"]
  },
  {
    name: "Knee Push-up",
    muskeln: ["Brust", "Trizeps", "Schultern", "Six-pack"]
  },
  {
    name: "Negative Pull-up",
    muskeln: ["Latissimus", "Bizeps", "Rücken", "Six-pack"]
  },
  {
    name: "Step-up",
    muskeln: ["Quadrizeps", "Gluten", "Hamstrings", "Waden"]
  },
  {
    name: "Glute Kickback",
    muskeln: ["Gluten", "Hamstrings", "Six-pack"]
  },
  {
    name: "Wide Push-up",
    muskeln: ["Brust", "Schultern", "Trizeps", "Six-pack"]
  },
  {
    name: "Towel Pull-up",
    muskeln: ["Bizeps", "Latissimus", "Rücken", "Schultern"]
  },
  {
    name: "Shrimp Squat",
    muskeln: ["Quadrizeps", "Hamstrings", "Gluten", "Waden"]
  },
  {
    name: "Pseudo Planche Lean",
    muskeln: ["Schultern", "Brust", "Trizeps", "Six-pack"]
  },
  {
    name: "Handstand Hold",
    muskeln: ["Schultern", "Trizeps", "Trapezmuskeln", "Six-pack"]
  },
  {
    name: "One-Arm Planche",
    muskeln: ["Schultern", "Brust", "Trizeps", "Rücken", "Six-pack"]
  },
  {
    name: "Incline Wall Push-up",
    muskeln: ["Brust", "Trizeps", "Schultern", "Six-pack"]
  },
  {
    name: "Isometric Pull-up Hold",
    muskeln: ["Latissimus", "Bizeps", "Rücken", "Six-pack"]
  },
  {
    name: "Walking Lunge",
    muskeln: ["Quadrizeps", "Gluten", "Hamstrings", "Waden"]
  },
  {
    name: "Hip Bridge March",
    muskeln: ["Gluten", "Hamstrings", "Six-pack"]
  },
  {
    name: "Archer Push-up",
    muskeln: ["Brust", "Trizeps", "Schultern", "Six-pack"]
  },
  {
    name: "Typewriter Push-up",
    muskeln: ["Brust", "Schultern", "Trizeps", "Six-pack"]
  },
  {
    name: "Behind-the-Neck Pull-up",
    muskeln: ["Latissimus", "Bizeps", "Rücken", "Schultern"]
  },
  {
    name: "Single Leg Box Squat",
    muskeln: ["Quadrizeps", "Gluten", "Hamstrings", "Waden"]
  },
  {
    name: "Handstand Shrugs",
    muskeln: ["Schultern", "Trapezmuskeln", "Trizeps", "Six-pack"]
  },
  {
    name: "Full Planche",
    muskeln: ["Schultern", "Brust", "Trizeps", "Rücken", "Six-pack"]
  },
  {
    name: "Incline Wall Plank",
    muskeln: ["Six-pack", "Schräge Bauchmuskeln", "Schultern"]
  },
  {
    name: "Mixed Grip Chin-up",
    muskeln: ["Bizeps", "Latissimus", "Rücken", "Schultern"]
  },
  {
    name: "Skater Squat",
    muskeln: ["Quadrizeps", "Gluten", "Hamstrings", "Waden"]
  },
  {
    name: "Isometric Glute Bridge Hold",
    muskeln: ["Gluten", "Hamstrings", "Six-pack"]
  },
  {
    name: "Staggered Push-up",
    muskeln: ["Brust", "Trizeps", "Schultern", "Six-pack"]
  },
  {
    name: "L-Sit Pull-up",
    muskeln: ["Latissimus", "Bizeps", "Six-pack", "Rücken"]
  },
  {
    name: "Sissy Squat Hold",
    muskeln: ["Quadrizeps", "Gluten", "Hamstrings"]
  },
  {
    name: "Handstand Push-up Negative",
    muskeln: ["Schultern", "Trizeps", "Trapezmuskeln", "Six-pack"]
  },
  {
    name: "One-Arm Push-up Negative",
    muskeln: ["Brust", "Trizeps", "Schultern", "Six-pack"]
  },
  {
    name: "Victorian Cross",
    muskeln: ["Schultern", "Brust", "Trizeps", "Rücken", "Six-pack"]
  },
  {
    name: "Incline Shoulder Tap Push-up",
    muskeln: ["Brust", "Schultern", "Trizeps", "Six-pack"]
  },
  {
    name: "Towel Chin-up",
    muskeln: ["Bizeps", "Latissimus", "Rücken", "Six-pack"]
  },
  {
    name: "Jumping Lunge",
    muskeln: ["Quadrizeps", "Gluten", "Hamstrings", "Waden"]
  },
  {
    name: "Isometric Squat Hold",
    muskeln: ["Quadrizeps", "Gluten", "Hamstrings"]
  },
  {
    name: "Wide to Diamond Push-up",
    muskeln: ["Brust", "Schultern", "Trizeps", "Six-pack"]
  },
  {
    name: "Chest-to-Ring Pull-up",
    muskeln: ["Latissimus", "Bizeps", "Rücken", "Brust"]
  },
  {
    name: "Single Leg Glute Bridge",
    muskeln: ["Gluten", "Hamstrings", "Six-pack"]
  },
  {
    name: "Archer Handstand Push-up",
    muskeln: ["Schultern", "Trizeps", "Trapezmuskeln", "Six-pack"]
  },
  {
    name: "One-Arm Chin-up Hold",
    muskeln: ["Bizeps", "Latissimus", "Rücken", "Six-pack"]
  },
  {
    name: "Inverted Cross",
    muskeln: ["Schultern", "Brust", "Trizeps", "Rücken", "Six-pack"]
  },
  {
    name: "Arm Circles",
    muskeln: ["Schultern", "Trapezmuskeln"]
  },
  {
    name: "Jumping Jacks",
    muskeln: ["Quadrizeps", "Waden", "Schultern", "Six-pack"]
  },
  {
    name: "High Knees",
    muskeln: ["Quadrizeps", "Hamstrings", "Gluten", "Waden", "Six-pack"]
  },
  {
    name: "Butt Kicks",
    muskeln: ["Hamstrings", "Quadrizeps", "Gluten", "Waden"]
  },
  {
    name: "Mountain Climbers",
    muskeln: ["Six-pack", "Schräge Bauchmuskeln", "Schultern", "Quadrizeps"]
  },
  {
    name: "Lateral Lunges",
    muskeln: ["Quadrizeps", "Gluten", "Hamstrings", "Waden"]
  },
  {
    name: "Scapular Push-ups",
    muskeln: ["Schultern", "Trapezmuskeln", "Brust", "Rücken"]
  },
  {
    name: "Inchworm Walkouts",
    muskeln: ["Schultern", "Brust", "Hamstrings", "Six-pack"]
  },
  {
    name: "Squat to Stand",
    muskeln: ["Quadrizeps", "Hamstrings", "Gluten", "Six-pack"]
  },
  {
    name: "Torso Twists",
    muskeln: ["Schräge Bauchmuskeln", "Six-pack", "Rücken"]
  },
  {
    name: "Shoulder Shrugs",
    muskeln: ["Schultern", "Trapezmuskeln"]
  },
  {
    name: "Lunge with Rotation",
    muskeln: ["Quadrizeps", "Gluten", "Hamstrings", "Schräge Bauchmuskeln", "Six-pack"]
  },
  {
    name: "Carioca Drill",
    muskeln: ["Quadrizeps", "Gluten", "Hamstrings", "Waden", "Schräge Bauchmuskeln"]
  },
  {
    name: "Skipping Rope (leichtes Tempo)",
    muskeln: ["Waden", "Quadrizeps", "Gluten", "Schultern"]
  },
  {
    name: "Hip Circles",
    muskeln: ["Gluten", "Quadrizeps", "Hamstrings"]
  },
  {
    name: "Dynamic Side Plank Reach",
    muskeln: ["Schräge Bauchmuskeln", "Schultern", "Six-pack"]
  },
  {
    name: "Bear Crawl",
    muskeln: ["Schultern", "Brust", "Trizeps", "Six-pack", "Quadrizeps"]
  },
  {
    name: "Lateral Bounds",
    muskeln: ["Gluten", "Quadrizeps", "Waden", "Hamstrings"]
  },
  {
    name: "Standing Trunk Rotations",
    muskeln: ["Schräge Bauchmuskeln", "Six-pack", "Rücken"]
  },
  {
    name: "A-Skip Drill",
    muskeln: ["Quadrizeps", "Gluten", "Hamstrings", "Waden", "Six-pack"]
  },
  {
    name: "Standing Quad Stretch",
    muskeln: ["Quadrizeps", "Gluten"]
  },
  {
    name: "Seated Hamstring Stretch",
    muskeln: ["Hamstrings", "Waden", "Gluten"]
  },
  {
    name: "Calf Stretch (stehend an Wand)",
    muskeln: ["Waden", "Quadrizeps"]
  },
  {
    name: "Chest Opener Stretch",
    muskeln: ["Brust", "Schultern", "Trizeps"]
  },
  {
    name: "Cat-Cow Stretch",
    muskeln: ["Rücken", "Schultern", "Six-pack"]
  },
  {
    name: "Seated Glute Stretch",
    muskeln: ["Gluten", "Hamstrings", "Six-pack"]
  },
  {
    name: "Side Bend Stretch",
    muskeln: ["Schräge Bauchmuskeln", "Six-pack", "Rücken"]
  },
  {
    name: "Shoulder Cross Stretch",
    muskeln: ["Schultern", "Trapezmuskeln", "Trizeps"]
  },
  {
    name: "Child’s Pose",
    muskeln: ["Rücken", "Schultern", "Latissimus"]
  },
  {
    name: "Cobra Stretch",
    muskeln: ["Brust", "Schultern", "Six-pack"]
  },
  {
    name: "Butterfly Stretch",
    muskeln: ["Gluten", "Quadrizeps", "Hamstrings"]
  },
  {
    name: "Overhead Triceps Stretch",
    muskeln: ["Trizeps", "Schultern", "Latissimus"]
  },
  {
    name: "Forward Fold",
    muskeln: ["Hamstrings", "Waden", "Rücken"]
  },
  {
    name: "Wall Chest Stretch",
    muskeln: ["Brust", "Schultern", "Trapezmuskeln"]
  },
  {
    name: "Seated Spinal Twist",
    muskeln: ["Schräge Bauchmuskeln", "Rücken", "Six-pack"]
  },
  {
    name: "Frog Stretch",
    muskeln: ["Gluten", "Quadrizeps", "Hamstrings"]
  },
  {
    name: "Lat Stretch an der Wand",
    muskeln: ["Latissimus", "Rücken", "Schultern"]
  },
  {
    name: "Neck to Shoulder Stretch",
    muskeln: ["Trapezmuskeln", "Schultern"]
  },
  {
    name: "Pigeon Stretch",
    muskeln: ["Gluten", "Hamstrings", "Quadrizeps"]
  },
  {
    name: "Bridge Pose Stretch",
    muskeln: ["Gluten", "Hamstrings", "Rücken"]
  },
  {
    name: "Wall Handstand Hold",
    muskeln: ["Schultern", "Trizeps", "Brust", "Six-pack", "Gluten"]
  },
  {
    name: "Crow Pose Hold",
    muskeln: ["Schultern", "Trizeps", "Bizeps", "Six-pack"]
  },
  {
    name: "Wall-Assisted Elbow Stand",
    muskeln: ["Schultern", "Trizeps", "Rücken", "Six-pack"]
  },
  {
    name: "Tuck Planche Hold",
    muskeln: ["Schultern", "Trizeps", "Brust", "Six-pack", "Gluten"]
  },
  {
    name: "L-Sit Hold (auf dem Boden oder Parallettes)",
    muskeln: ["Six-pack", "Schräge Bauchmuskeln", "Quadrizeps", "Schultern", "Trizeps"]
  },
  {
    name: "Wall-Assisted Handstand Push-up",
    muskeln: ["Schultern", "Trizeps", "Brust", "Six-pack"]
  },
  {
    name: "Front Lever Tuck Hold",
    muskeln: ["Latissimus", "Rücken", "Bizeps", "Six-pack"]
  },
  {
    name: "Back Lever Tuck Hold",
    muskeln: ["Rücken", "Latissimus", "Schultern", "Gluten"]
  },
  {
    name: "Straddle Planche Lean",
    muskeln: ["Schultern", "Trizeps", "Brust", "Six-pack", "Gluten"]
  },
  {
    name: "One-Arm Handstand (an der Wand)",
    muskeln: ["Schultern", "Trizeps", "Brust", "Six-pack", "Trapezmuskeln"]
  },
  {
    name: "Wall Assisted Hollow Body Hold",
    muskeln: ["Six-pack", "Schräge Bauchmuskeln", "Schultern", "Gluten"]
  },
  {
    name: "Arch Hold (Superman Hold)",
    muskeln: ["Rücken", "Gluten", "Hamstrings", "Schultern"]
  },
  {
    name: "Negative Handstand Kick-ups",
    muskeln: ["Schultern", "Trizeps", "Brust", "Six-pack"]
  },
  {
    name: "Ring Support Hold",
    muskeln: ["Schultern", "Trizeps", "Bizeps", "Brust", "Six-pack"]
  },
  {
    name: "Pseudo Planche Push-ups",
    muskeln: ["Schultern", "Brust", "Trizeps", "Six-pack"]
  },
  {
    name: "Skin the Cat (Anfängerversion)",
    muskeln: ["Schultern", "Latissimus", "Rücken", "Bizeps"]
  },
  {
    name: "Archer Pull-up Progression",
    muskeln: ["Latissimus", "Bizeps", "Rücken", "Trapezmuskeln"]
  },
  {
    name: "Front Lever Negative",
    muskeln: ["Latissimus", "Rücken", "Six-pack", "Bizeps"]
  },
  {
    name: "Back Lever Negative",
    muskeln: ["Rücken", "Latissimus", "Schultern", "Gluten"]
  },
  {
    name: "Human Flag Tuck Hold",
    muskeln: ["Schultern", "Latissimus", "Rücken", "Six-pack", "Schräge Bauchmuskeln"]
  },
  {
    name: "Handstand Wall Runs",
    muskeln: ["Schultern", "Trizeps", "Brust", "Six-pack", "Trapezmuskeln"]
  },
  {
    name: "One Arm Elbow Lever",
    muskeln: ["Schultern", "Trizeps", "Brust", "Six-pack", "Schräge Bauchmuskeln"]
  },
  {
    name: "Pelican Push-ups (Ringe)",
    muskeln: ["Brust", "Schultern", "Trizeps", "Bizeps"]
  },
  {
    name: "One Arm Pull-up Negatives",
    muskeln: ["Latissimus", "Bizeps", "Rücken", "Trapezmuskeln"]
  },
  {
    name: "Planche Lean to Tuck Planche",
    muskeln: ["Schultern", "Trizeps", "Brust", "Six-pack", "Gluten"]
  },
  {
    name: "Hefesto Progression",
    muskeln: ["Schultern", "Rücken", "Bizeps", "Latissimus", "Trizeps"]
  },
  {
    name: "Manna Progression Hold",
    muskeln: ["Six-pack", "Schräge Bauchmuskeln", "Quadrizeps", "Schultern"]
  },
  {
    name: "90 Degree Push-up (Negatives)",
    muskeln: ["Schultern", "Trizeps", "Brust", "Six-pack"]
  },
  {
    name: "One Arm Handstand Freestanding",
    muskeln: ["Schultern", "Trizeps", "Brust", "Six-pack", "Trapezmuskeln"]
  },
  {
    name: "Full Human Flag Hold",
    muskeln: ["Schultern", "Latissimus", "Rücken", "Schräge Bauchmuskeln", "Six-pack"]
  }
];

const API_KEY = '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'; // Dein OpenRouter API-Key
const loader = document.getElementsByClassName("loader")[0]
const button = document.getElementById("button");
button.addEventListener("click", function () {
  let workouts_weak = document.getElementById("Workouts_weak").value
  let duration_workout = document.getElementById("duration_Workout").value
  let level = document.getElementById("Level").value
  const buttons_equipment_aktiv = document.querySelectorAll(".button_equipment.aktiv")
  let liste_buttons_equipment_aktiv = []

  buttons_equipment_aktiv.forEach(button => {
    liste_buttons_equipment_aktiv.push(button.textContent)
  })

  const buttons_muskeln_aktiv = document.querySelectorAll(".button_muskeln.aktiv")
  let liste_buttons_muskeln_aktiv = []

  buttons_muskeln_aktiv.forEach(button => {
    liste_buttons_muskeln_aktiv.push(button.textContent)
  })

  const buttons_ziele_aktiv = document.querySelectorAll(".button_Ziele.aktiv")
  let liste_buttons_ziele_aktiv = []

  buttons_ziele_aktiv.forEach(button => {
    liste_buttons_ziele_aktiv.push(button.textContent)
  })

  if (liste_buttons_ziele_aktiv.length === 0) {
    liste_buttons_ziele_aktiv = ["Der Nutzer hat keine Ziele. Er möchte sich algemein in Calisthenics verbessern. Du kannst dem Fitnesslevel entsprechende Ziele für ihn festlegen."]
  }
  if (liste_buttons_equipment_aktiv.length === 0) {
    liste_buttons_equipment_aktiv = ["kein equipment vorhanden"]
  }
  if (liste_buttons_muskeln_aktiv.length === 0) {
    alert("Bitte gib mindestens einen Muskel an.")
    return
  }
  else {
    if (parseInt(workouts_weak) >= 1 && parseInt(workouts_weak) <= 7) {
      if (parseInt(duration_workout) >= 10 && parseInt(duration_workout) <= 90) {
        if (parseInt(level) >= 1 && parseInt(level) <= 20) {
          loader.style.display = "flex"
          callOpenRouter(liste_buttons_ziele_aktiv.join(", "), workouts_weak, duration_workout, level, liste_buttons_equipment_aktiv.join(", "), liste_buttons_muskeln_aktiv);
        }
        else {
          alert("Bitte gib beim Level eine Zahl zwischen 1 & 20 ein.")
          return
        }
      }
      else {
        alert("Bitte gib bei der Trainingsdauer eine Zahl zwischen 10 & 90 ein.")
        return
      }
    }
    else {
      alert("Bitte gib bei den Trainings pro Woche eine Zahl zwischen 1 & 7 ein.")
      return
    }
  }
});

async function callOpenRouter(ziele, workouts_weak, duration_workout, level, equipment, muskeln) {

  const filtered_exercices = [];

  for (let i = 0; i < übungen.length; i++) {
    const muskelnDerÜbung = übungen[i].muskeln;

    // Prüfen, ob mindestens ein gesuchter Muskel enthalten ist
    const enthältMuskel = muskeln.some(muskel => muskelnDerÜbung.includes(muskel));

    if (enthältMuskel) {
      filtered_exercices.push(übungen[i].name);
    }
  }
  localStorage.setItem("mögliche_übungen", JSON.stringify(filtered_exercices))
  let user = `Erstelle einen Calisthenics-Trainingsplan für folgendes Nutzerprofil: Ziele: ${ziele} Anzahl Trainings pro Woche: ${workouts_weak} Dauer pro Training: ${duration_workout} (inkl. Pausen, nicht kürzer!) Level: ${level}/20 Equipment: ${equipment} Zielmuskeln: ${muskeln.join(", ")} Strukturvorgaben: Gib den Plan nur für genau 1 Woche. Keine Einleitung und kein Fazit. Schreibe immer auch die Ziele der Woche auf. Wenn du so etwas siehst:  ( 2 x 12 30s Pause ) Die 30s Pause stehen für die Pausen zwischen den jeweiligen Sätzen und nicht zwischen den Übungen. An den Tagen, an denen kein Training ist, machst du nicht sowas: "Dienstag": [] sondern lässt den Tag einfach aus. Du gibst ihn einfach nicht an. Du sollst das ganze als ausführbahren code schreiben, welcher funktioniert. Schreiben den Code in JSON.`;
  let system = `Du bist ein erfahrener Fitnesstrainer mit Spezialisierung auf Calisthenics.`
  let assistant = `const trainingsplan = {"Ziele": ["z. B. Grundkraft verbessern"], "Montag": ["Warm-up:", "Jumping-jacks ( 1 x 30s )", "Pause: 30s", "Skilltraining:", "Handstand an der Wand ( 1 x 40s )", "Hauptteil:", "Liegestützen ( 3 x 10 wdh. 30s Pause )", "Pause: 60s", "Klimmzüge ( 3 x 5 wdh. 30s Pause )", "Cool-down:", "Schulterdehnung"]}`
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "google/gemma-3n-e2b-it:free",
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
        { role: 'assistant', content: assistant }

      ],
    })
  });

  const data = await response.json();

  if (
    data &&
    Array.isArray(data.choices) &&
    data.choices[0]?.message?.content
  ) {
    const antwort = data.choices[0].message.content;
    console.log(antwort)
    const überarbeitet = antwort
      .replace(/“|”/g, '"')                     // typografische Anführungszeichen → gerade
      .replace(/‘|’/g, "'")                     // typografische Apostrophe → gerade
      .replace(/[\uFEFF\u200B\r]/g, '')         // unsichtbare Zeichen entfernen
      .replace(/```json|```/g, '');             // Markdown-Formatierung entfernen

    try {
      const jsonText = überarbeitet
        .replace(/^const trainingsplan\s*=\s*/, '')
        .replace(/;$/, '');

      const trainingsplan = eval(`(${jsonText})`);
      const konto = JSON.parse(localStorage.getItem("Konto"))

      if (konto) {
        const muskeln_join = muskeln.join(", ");
        const konto_email = konto.email;
        const nutzerprofiel = {
          ziele,
          workouts_weak,
          duration_workout,
          level,
          equipment,
          muskeln_join
        }
        await setDoc(doc(db, "konten", konto_email), {
          nutzerprofiel,
          trainingsplan
        },);
      }
      localStorage.setItem("trainingsplan", JSON.stringify(trainingsplan))
      window.location.href = "ergebnisse.html"

    } catch (err) {
      console.error("Eval-Fehler:", err);
    }
  } else {
    console.error("Fehlerhafte Antwortstruktur:", data);
  }

}











