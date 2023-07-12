let errorMessage = document.getElementById("error-message");
let passWord = document.getElementById("pass-word");
let userName = document.getElementById("user-name");
//Hidden password
function hidePassword() {
  if (passWord.type == "password") {
    passWord.type = "text";
  } else {
    passWord.type = "password";
  }
}
document.getElementById("hidden-pw").addEventListener("click", hidePassword);
//Check username & password
function checkUser() {
  let userName = document.getElementById("user-name").value;
  let passWord = document.getElementById("pass-word").value;
  // userName = userName.value ;
  // passWord = passWord.value ;
  if (userName == "" || passWord == "") {
    errorMessage.style.color = "red";
    errorMessage.style.display = "block";
    errorMessage.innerText = "Tên đăng nhập và mật khẩu là bắt buộc";
  } else if (userName == "loan_1108" && passWord == "qawsedrf") {
    alert("Đăng nhập thành công");
    moveToMainScreen();
  } else if (userName != "loan_1108") {
    errorMessage.style.color = "red";
    errorMessage.style.display = "block";
    errorMessage.innerText = "Tên đăng nhập sai. Vui lòng nhập lại";
  } else {
    errorMessage.style.color = "red";
    errorMessage.style.display = "block";
    errorMessage.innerText = "Mật khẩu sai. Vui lòng nhập lại";
  }
}

document.getElementById("login-btn").addEventListener("click", checkUser);
//Move to download app
function downloadApp() {
  if (this.id == "app-store") {
    location.href = "https://apps.apple.com/vn/app/smas/id1434178665?l=vi";
  } else {
    location.href =
      "https://play.google.com/store/apps/details?id=com.viettel.smasplus&hl=vi";
  }
}
document.getElementById("app-store").addEventListener("click", downloadApp);
document.getElementById("google-play").addEventListener("click", downloadApp);
//Move to the Reset password
function moveToResetScreen() {
  location.href = "../reset-pw/reset-screen.html";
}
document
  .getElementById("forget-pw")
  .addEventListener("click", moveToResetScreen);
//Move to the Main screen
function moveToMainScreen() {
  location.href = "#";
}
