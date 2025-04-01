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


