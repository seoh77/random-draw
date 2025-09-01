const categories = document.querySelectorAll(".category");
const allBtn = document.querySelector(".all_btn");

// 각 카테고리별 버튼 동작
categories.forEach((category) => {
  const boxes = category.querySelectorAll(".box");
  const button = category.querySelector(".btn");

  button.addEventListener("click", () => {
    selectRandomBox(boxes);
  });
});

// 전체선택 버튼 동작
allBtn.addEventListener("click", () => {
  categories.forEach((category) => {
    selectRandomBox(category.querySelectorAll(".box"));
  });
});

// 랜덤 뽑기 함수
function selectRandomBox(boxes) {
  resetBoxes(boxes);
  boxes[getRandomIndex(boxes.length)].style.backgroundColor = "lightblue";
}

// 모든 박스 배경 초기화
function resetBoxes(boxes) {
  boxes.forEach((box) => {
    box.style.backgroundColor = "";
  });
}

// 랜덤 인덱스 구하기
function getRandomIndex(length) {
  return Math.floor(Math.random() * length);
}
