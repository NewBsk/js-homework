# Mission02

썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀔 수 있도록 작성한 코드입니다.

### 과제 요구사항

1.  이벤트 처리 방식을 사용하여 클릭 이벤트를 걸어주세요.

    a. 이벤트 위임

    ```js
    const nav = getNode(".nav");
     function handleSlider(e) {
    e.preventDefault();
    const target = e.target.closest("li");
     const list = getNodes("li");

     if (!target) return;
     .
     .
     .
     }
    nav.addEventListener("click", handleSlider);
    ```

    b. 반복문(반복문을 사용하여 click event 발생시 target을 제외한 li태그 안에 추가되는 "is-active"를 제거)

    ```js
    list.forEach((li) => removeClass(li, "is-active"));
    ```

2.  이미지와 색상의 데이터는 data.js 에서 불러와주세요.
3.  각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주세요.
    a. 배경색 변경 (colorB의 기본값은 #000 으로 한다)

    ```js
    function setBgColor(index) {
      //배경색 변경( colorB의 기본값은 #000 으로 한다 )
      //elem.style.background = `linear-gradient(to bottom, 'colorA','colorB')`;
      const BgColor = getNode("body");
      const colorA = data[index - 1].color[0];
      const colorB = data[index - 1].color[1];

      css(
        BgColor,
        "background",
        `linear-gradient(to bottom, ${colorA},${colorB}`
      );
    }
    ```

    b. 이미지 변경

    ```js
    function setImg(index) {
      // target.src = `./assets/${data.name}.jpeg`;
      // target.alt = data.alt
      const visual = getNode(".visual img");
      attr(visual, "src", `./assets/${data[index - 1].name}.jpeg`);
      attr(visual, "alt", `${data[index - 1].alt}`);
    }
    ```

4.  비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경해주세요.
    ```js
    function setNameText(index) {
      // target.textContent = data.name;
      const name = getNode(".nickName");
      name.textContent = data[index - 1].name;
    }
    ```
5.  함수를 분리시켜주세요.

    a. setBgColor 함수
    b. setImage 함수
    c. setNameText 함수

6.  가독성이 좋은 함수로 리팩토링 해주세요.
