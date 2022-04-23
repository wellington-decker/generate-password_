const getInput = document.getElementById("password_length");
const generateBtn = document.querySelector(".generate-password");
const resetBtn = document.querySelector(".reset");
const label = document.querySelector(".input-label");
const passwordArea = document.querySelector(".password-section");
const eyeIcon = document.getElementById("togglePassword");

let LENGTH;

const passwordHandler = () => {
  reg = /^[0-9]+$/;
  LENGTH = +getInput.value;
  if (getInput.value == "") {
    alert("Input is EMPTY.");
  } else if (typeof LENGTH !== "number" || LENGTH <= 0) {
    alert("Err: Invalid Input.");
  } else if (LENGTH <= 5) {
    alert("LENGTH IS TOO SHORT.");
  } else if (LENGTH > 25) {
    alert("LENGTH is too LARGE.");
  } else {
    let characters = [];
    for (let i = 33; i <= 126; i++) {
      characters.push(String.fromCharCode(i));
    }
    resultingPassword = [];
    for (let i = 0; i < LENGTH; i++) {
      resultingPassword.push(
        characters[Math.ceil(Math.random() * characters.length)]
      );
    }
    password = resultingPassword.join("");
    passwordArea.innerHTML = `
    <form>
      <label for="password_length" class="input-label2">PASSWORD:</label>
      <input type="password" class="password-inputArea" name="password">
      <i class="far fa-eye" id="togglePassword" onclick="eyeHandler()"></i>
    </form>`;
    const passwordInput = document.querySelector(".password-inputArea");
    passwordInput.value = password;
  }
};

const eyeHandler = () => {
  const passwordInput = document.querySelector(".password-inputArea");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
};

const resetHandler = () => {
  getInput.value = "";
  passwordArea.innerHTML = "";
};

generateBtn.addEventListener("click", passwordHandler);
resetBtn.addEventListener("click", resetHandler);
// eyeIcon.addEventListener('click', myFunction);
