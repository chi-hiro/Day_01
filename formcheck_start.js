/* eslint-disable */
// オブジェクト一覧
const formObj = document.querySelector(".form-contact");
const elemName = document.querySelector(".name");
const elemMail = document.querySelector(".mail");
const elemTel = document.querySelector(".tel");
const elemComment = document.querySelector(".comment");
const regExpMail =
  /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
const regExpTel = /\d{2,4}-\d{2,4}-\d{4}/;

// 各項目にinputイベントを設定
// name
elemName.addEventListener("input", function () {
  const elemSpan = elemName.nextElementSibling;
  if (elemName.value.trim() === "") {
    elemSpan.textContent = "";
    elemSpan.removeAttribute("style");
  } else {
    elemSpan.textContent = "〇";
    elemSpan.style.color = "green";
  }
});
// mail
elemMail.addEventListener("input", function () {
  const elemSpan = elemMail.nextElementSibling;
  const v = elemMail.value.trim();
  if (v === "") {
    elemSpan.textContent = "";
    elemSpan.removeAttribute("style");
  } else if (regExpMail.test(v)) {
    elemSpan.textContent = "〇";
    elemSpan.style.color = "green";
  } else {
    elemSpan.textContent = "×";
    elemSpan.style.color = "red";
  }
});
// tel
elemTel.addEventListener("input", function () {
  const elemSpan = elemTel.nextElementSibling;
  const v = elemTel.value.trim();
  if (v === "") {
    elemSpan.textContent = "";
    elemSpan.removeAttribute("style");
  } else if (regExpTel.test(v)) {
    elemSpan.textContent = "〇";
    elemSpan.style.color = "green";
  } else {
    elemSpan.textContent = "×";
    elemSpan.style.color = "red";
  }
});
// content
elemComment.addEventListener("input", function () {
  const elemSpan = elemComment.nextElementSibling;
  if (elemComment.value.trim() === "") {
    elemSpan.textContent = "";
    elemSpan.removeAttribute("style");
  } else {
    elemSpan.textContent = "〇";
    elemSpan.style.color = "green";
  }
});

// submitイベントを設定
formObj.addEventListener("submit", function (e) {
  if (elemName.value == "") {
    alert("お名前を入力してください。");
    e.preventDefault();
  } else if (!regExpMail.test(elemMail.value)) {
    alert("メールアドレスは正規表現で入力ください。");
    e.preventDefault();
  } else if (!regExpTel.test(elemTel.value)) {
    alert("電話番号は正規表現で入力ください。");
    e.preventDefault();
  } else if (elemComment.value == "") {
    alert("文章を入力してください。");
    e.preventDefault();
  }
});
