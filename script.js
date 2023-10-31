(function () {
  const spanEl = document.querySelector("main h2 span");
  const txtArr = [
    "backend developer",
    "ready for do some work!",
    "tired",
    "undergraduate in computer science",
  ];
  let index = 0;
  let currentTxt = txtArr[index].split("");
  function writeTxt() {
    spanEl.textContent += currentTxt.shift();
    // currentTxt로부터 앞에서 한 글자씩 빼서 더하기
    if (currentTxt.length !== 0) {
      setTimeout(writeTxt, Math.floor(Math.random() * 100));
    } else {
      currentTxt = spanEl.textContent.split("");
      // 만약 currentTxt를 다 소비했다면, spanEl 태그의 textContent 영역에 다 누적어 있으니 그걸 split 함수를 통해 배열로 다시 currentTxt에 
      // 저장
      setTimeout(deleteTxt, 3000);
    }
  }
  function deleteTxt() {
    currentTxt.pop(); // 가장 우측에서 하나 뺌
    spanEl.textContent = currentTxt.join(""); // 하나 뺀 상태에서 다시 문자열로 결합
    if (currentTxt.length !== 0) { // currentTxt의 길이가 아직 0이 아니라면 남아있는 것이니 반복
      setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    } else {
      index = (index + 1) % txtArr.length; // index 값이 넘치지 않게 modulo 연산
      currentTxt = txtArr[index].split(""); // 다음 text를 잡아다가 split을 사용해서 배열로 return
      writeTxt(); // 다시 작성하는 거 반복
    }
  }
  writeTxt();
})();

const headerEl = document.querySelector("header"); // header 잡음
window.addEventListener("scroll", function () {
  requestAnimationFrame(scrollCheck);
});
function scrollCheck() {
  let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
  // 상하 스크롤바의 위치를 구해서 그게 상단에 붙어있지 않으면 active를 추가하고, 만약 상단에 붙어있으면 active를 제거
  if (browerScrollY > 0) {
    headerEl.classList.add("active");
  } else {
    headerEl.classList.remove("active");
  }
}
