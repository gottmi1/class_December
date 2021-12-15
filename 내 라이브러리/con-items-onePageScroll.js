const con = document.querySelector('#con');
const $items = document.querySelectorAll('#con>div');
console.log(con);
console.dir(con);
console.dir(window);
// BOM객체에 접근하여 화면 내의 넓이값(스크린 아님)을 구할 수 있는지 확인

const windowWidth = window.innerWidth;
const outWidth = window.outerWidth;
console.log(windowWidth);
// console.log(outWidth);
const winHeight = window.innerHeight;
// window.innerHeight값을 이용하면, 원 스크롤이 아니더라도 휠 한번에
// 얼마만큼 이동할지 내가 정할 수 있음 그렇게 하고싶던 '스크롤값 제어'가 가능해진다.

let row = 0;

window.addEventListener('wheel', (e) => {
  const delY = e.deltaY / 100;
  console.log(delY)
  if (delY > 0) {
    console.log('plus');
    row++;
    con.children[0].textContent = ` horizontal Y value : ${winHeight * row} `;
    console.log(row);
    window.scrollTo({
      top: winHeight * row,
      behavior: "smooth",
    });
  } else {
    console.log('minus');
    row--;
    con.children[0].textContent = ` horizontal Y value : ${winHeight * row} `;
    console.log(row);
    window.scrollTo({
      top: winHeight * row,
      behavior: "smooth",
    })
  }

  if (row >= $items.length) {
    row = $items.length-1;
    console.log("최대");
  }
  if (row <= 0) {
    row = 0
    console.log("최소");
  }
})
