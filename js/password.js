/* Function to hide password while typing */
function showPass() {
    var x = document.getElementById("psw");
    if (x.type === "password") {
      x.type = "text1";
    } else {
      x.type = "password";
    }
  }
