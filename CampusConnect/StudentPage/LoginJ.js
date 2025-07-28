function checkKey() {
      const correctKey = "campus2025"; // Set your key here
      const inputKey = document.getElementById("keyInput").value;
 
      if (inputKey === correctKey) {
        window.location.href = "Student.html"; // Redirect to actual page
      } else {
        document.getElementById("message").textContent = "Incorrect key. Try again.";
      }
    } 



