
//Tạo mã OTP
function generateOTP() {
    let string = `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    let OTP = '';
    let len = string.length;
    for (let i = 0; i < 6; i++) {
        OTP += string[Math.floor(Math.random() * len)];
    }
    document.getElementById("otp-number").innerText = OTP;
    return OTP;
}
let otp = generateOTP();
//Thay đổi mã OTP
function changeOTP() {
    otp = generateOTP();
}
//Check OTP , user và phone 
function checkCondition(otp) {
    console.log(otp)
    
    let user_name = document.getElementById("user-name").value;
    let phone_number = document.getElementById("phone-number").value;
    let otp_input = document.getElementById("otp-input").value;
    document.getElementById("error-message").style.color = "red";
    if (otp_input == "") {
        document.getElementById("error-message").innerHTML = "Thầy/Cô chưa nhập mã xác thực";
    } else if (otp_input != otp) {
        document.getElementById("error-message").innerHTML = "Thầy/ Cô nhập sai mã xác thực. Vui lòng nhập lại";
    } else {
        if (user_name == "loan_1108" && phone_number == 123456789) {
            alert("Mật khẩu mới đã được gửi về số điện thoại đăng kí của quý Thầy/ cô");
            MoveToLoginScreen()
        } else if (user_name == "" || phone_number == "") {
            document.getElementById("error-message").innerHTML = "Thầy/ cô cần nhập đầy đủ tên đăng nhập và số điện thoại";
        } else {
            document.getElementById("error-message").innerHTML = "Thầy/ cô vui lòng kiểm tra lại tên đăng nhập và mã xác thực";
        }
    }
    changeOTP();
    document.getElementById("otp-input").value = "";
}
document.getElementById("reset-btn").addEventListener("click",function(){checkCondition(otp)});
function MoveToLoginScreen() {
    location.href = "../login-screen/login.html";
}
document.getElementById("return-btn").addEventListener('click',MoveToLoginScreen);