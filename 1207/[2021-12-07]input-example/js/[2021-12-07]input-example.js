window.addEventListener('load', () => {
  // console.log('hello');
  const inputValue = document.querySelector('#input-field');
  const outputField = document.querySelector('#output-field');
  const container = document.querySelector('#container');


  inputValue.addEventListener('keyup', function () {
    outputField.textContent = this.value;
    console.log(inputValue.value);
    // inputValue에 들어간 값은 outputFiled의 텍스트 컨텐츠로 만듬
    const divInstance = document.createElement('div');
    //동적으로 div 생성
    divInstance.textContent = this.value;
    // 생성한 div의 텍스트컨텐츠에 inputValue의 값을 추가
    // keyCode 값 13 은 Enter

    if (window.event.keyCode === 13) { //엔터(keyCode = 13)를 눌렀을 때
      divStyleFunc(divInstance);
      // divInstancediv를 매개변수로 받아 모양을 만듬(아래 함수)
      container.appendChild(divInstance);
      // container에 divInstance를 자식으로 추가함
      inputValue.value = "";
    }
  });
  

});
const divStyleFunc = (element) => {
  element.style.height = "5vh";
  element.style.color = "salmon";
  element.style.fontSize = "2rem";
  element.style.backgroundColor = "#f1f3f4";
  element.style.margin = "1vw";
  element.style.opacity = 1;
  }

 

