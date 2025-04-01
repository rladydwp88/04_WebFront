// let bomb = document.querySelector("#bomb");
// let boomm = document.querySelector("#boomm");
let box = document.querySelector("#box");

document.addEventListener("keydown", function (e) {
  let move = document.querySelector("#bomberman");
  console.log(e);

  switch (e.key) {
    case 'ArrowUp': 
      move.style.transform += "translateY(-10px)"; 
      break;
    case 'ArrowDown': 
      move.style.transform += "translateY(10px)"; 
      break;
    case 'ArrowRight': 
      move.style.transform += "translateX(10px)"; 
      break;
    case 'ArrowLeft': 
      move.style.transform += "translateX(-10px)"; 
      break;
    case 'x': bombInput(); break;
    case 'z': boommFire(); break;
  }

});

bomb.style.display = "none";
boomm.style.display = "none";

// 봄버맨이 이동한 위치에서 폭탄이 생성
function bombInput() {
  box.innerHTML += `<img src="../../images/bomb.png">`;
}

function boommFire() {
  box.innerHTML += `<img src="../../images/boomm.png">`;
}