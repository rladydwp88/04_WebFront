let box = document.querySelector("#box");
let bombs = [];

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
    case 'x': bombInput(move); break;
    case 'z': boommFire(); break;
    default : alert("방향키, z, x만 가능"); break;
  }

});


function bombInput(move) {
  let rect = move.getBoundingClientRect();
  let bombId = `bomb-${bombs.length}`;
  let bombHTML = `<img id='${bombId}' src='../../images/bomb.png' style='position:absolute; left:${rect.right + 10}px; top:${rect.top}px;'>`;
  box.innerHTML += bombHTML;
  bombs.push(bombId);
}

function boommFire() {
  bombs.forEach(bombId => {
    let bomb = document.getElementById(bombId);
    if (bomb) {
      bomb.src = '../../images/boomm.png';
      setTimeout(() => bomb.remove(), 500);
    }
  });
  bombs = [];
}

// let xindex = 0; // x좌표 방향대로 얼마만큼 이동했는지 기억할 변수
// let yindex = 0; // y좌표 방향대로 얼마만큼 이동했는지 기억할 변수

// document.addEventListener("keydown", function (e) {
//   let bomberman = document.querySelector("#bomberman");
//   console.log(e);

//   switch (e.key) {
//     case 'ArrowUp': 
//       yindex -= 10; 
//       break;
//     case 'ArrowDown': 
//       yindex += 10; 
//       break;
//     case 'ArrowRight': 
//       xindex += 10;
//       break;
//     case 'ArrowLeft': 
//       xindex -= 10;
//       break;

//     case 'x':
//       const box = document.querySelector("#box");
//       box.innerHTML +=
//       `<img src = "../../images/bomb.png"
//         class = "bomb"
//         style = "transfrom : translate(${xindex}px, ${yindex}px);
//         position : absolute>"`;
//       break;

//     case 'z': explodeBomb(); break;
//     default : alert("방향키, z, x만 가능"); break;
//   }

//   bomberman.style.transform = `translate(${xindex}px, ${yindex}px)`;

// });

// const explodeBomb = () => {
//   const bombs = document.querySelectorAll(".bomb");
//   // bombs 유사배열 형태

//   // for.. of 문 :
//   // 배열같은 반복 가능한 객체의 요소를 순차적으로 순회하는 반복문
//   for(let bomb of bombs) {
//     bomb.src = "../../images/boomm.png";
//   } 
// }


