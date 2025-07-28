function checkKey() {
      const correctKey = "campus2025"; // Set your key here
      const inputKey = document.getElementById("keyInput").value;
 
      if (inputKey === correctKey) {
        window.location.href = "Student.html"; // Redirect to actual page
      } else {
        document.getElementById("message").textContent = "Incorrect key. Try again.";
      }
    } 

    // Example: Attach to a form submit event
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();
    
        // Remove message after 3 seconds
        setTimeout(() => {
            const successMsg = document.getElementById("message");
            if (successMsg) {
                successMsg.textContent = "";
            }
        }, 3000);
    
        // Reset form
        this.reset();
    });


