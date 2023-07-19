const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*
1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const email = document.querySelector(".email");
const pw = document.querySelector(".pw");
const button = document.querySelector(".button");

let emailPass = false;
let pwPass = false;

email.addEventListener("input", function () {
  if (emailReg(this.value)) {
    this.classList.remove("is-active");
    emailPass = true;
  } else {
    this.classList.add("is-active");
    emailPass = false;
  }
});

pw.addEventListener("input", function () {
  if (pwReg(this.value)) {
    this.classList.remove("is-active");
    pwPass = true;
  } else {
    this.classList.add("is-active");
    pwPass = false;
  }
});

button.addEventListener("click", function () {
  if (emailPass && pwPass) {
    console.log("로그인");
  }
});

/*
3. 상태 변수 관리
*/

/* 4. 로그인 버튼을 클릭시 조건처리 */

// 만약 로그인 버튼을 클릭시에 value === user.id, value === user.pw 이면
// window.location.href = 'welcome.html' 로 이동

document.getElementById("login-btn").addEventListener("click", function (e) {
  //   if (document.getElementById("userEmail").value === "asd@naver.com") {
  //     window.location.href = "welcome.html";
  //     e.preventDefault();
  //   }
  // });

  // if (document.getElementById("userPassword").value === "spdlqj123!@") {
  //   window.location.href = "welcome.html";
  //   e.preventDefault();
  const userEmail = document.getElementById("userEmail").value;
  const userPassword = document.getElementById("userPassword").value;

  if (userEmail === "asd@naver.com" && userPassword === "spdlqj123!@") {
    window.location.href = "welcome.html";
    e.preventDefault();
  }
});
