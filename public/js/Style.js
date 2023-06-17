{
  const togglePassword = document.querySelector("#toggle_password");
  const togglePasswordConf = document.querySelector("#toggle_password_conf");
  const password = document.querySelector("#text_password");
  const confirmPass = document.querySelector("#confirm_password");

  togglePassword.addEventListener("click", function (e) {
    // toggle the type attribute
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    // toggle the eye slash icon
    this.classList.toggle("fa-eye");
  });

  togglePasswordConf.addEventListener("click", function (e) {
    // toggle the type attribute
    const type =
      confirmPass.getAttribute("type") === "password" ? "text" : "password";
    confirmPass.setAttribute("type", type);
    // toggle the eye slash icon
    this.classList.toggle("fa-eye");
  });
}
