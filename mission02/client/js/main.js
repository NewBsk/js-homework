/* 1. 클릭 이벤트 활성화 */
/* 2. nav 클릭시 배경 색상 변경 */
/* 3. 이미지 변경 */
/* 4. 텍스트 변경 */
/* 5. 함수 분리 */

const nav = getNode(".nav");

function setBgColor(index) {
  //배경색 변경( colorB의 기본값은 #000 으로 한다 )
  //elem.style.background = `linear-gradient(to bottom, 'colorA','colorB')`;
  const BgColor = getNode("body");
  const colorA = data[index - 1].color[0];
  const colorB = data[index - 1].color[1];

  css(BgColor, "background", `linear-gradient(to bottom, ${colorA},${colorB}`);
}
function setImg(index) {
  // target.src = `./assets/${data.name}.jpeg`;
  // target.alt = data.alt
  const visual = getNode(".visual img");
  attr(visual, "src", `./assets/${data[index - 1].name}.jpeg`);
  attr(visual, "alt", `${data[index - 1].alt}`);
}

function setNameText(index) {
  // target.textContent = data.name;
  const name = getNode(".nickName");
  name.textContent = data[index - 1].name;
}

function handleSlider(e) {
  e.preventDefault();

  const target = e.target.closest("li");
  const list = getNodes("li");

  if (!target) return;

  const index = attr(target, "data-index");

  list.forEach((li) => removeClass(li, "is-active"));

  addClass(target, "is-active");

  setImg(index);
  setNameText(index);
  setBgColor(index);
}

nav.addEventListener("click", handleSlider);
