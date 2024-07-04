document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    var text = document.getElementById("text");
    var textt = document.getElementById("textt");
    var number = document.getElementById("number");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    var textError = document.getElementById("textError");
    var texttError = document.getElementById("texttError");
    var numberError = document.getElementById("numberError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");

    textError.classList.add("d-none");
    texttError.classList.add("d-none");
    numberError.classList.add("d-none");
    emailError.classList.add("d-none");
    passwordError.classList.add("d-none");

    if (text.value.trim() === "") {
      textError.textContent = "Anda belum masukkan nama depan";
      textError.classList.remove("d-none");
      event.preventDefault();
    }

    if (textt.value.trim() === "") {
      texttError.textContent = "Anda belum masukkan nama belakang";
      texttError.classList.remove("d-none");
      event.preventDefault();
    }

    if (number.value.trim() === "") {
      numberError.textContent = "Anda belum masukkan nomor telp";
      numberError.classList.remove("d-none");
      event.preventDefault();
    }

    if (email.value.trim() === "") {
      emailError.textContent = "Email tidak boleh kosong";
      emailError.classList.remove("d-none");
      event.preventDefault();
    }

    if (password.value.trim() === "") {
      passwordError.textContent = "Kata sandi tidak boleh kosong";
      passwordError.classList.remove("d-none");
      event.preventDefault();
    }
  });
