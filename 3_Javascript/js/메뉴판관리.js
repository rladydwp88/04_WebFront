const resName = document.querySelector("#resName");
const input = document.querySelector("#resNameInput");

const updateBtn = document.querySelector(".btn-container normal-container");
const editBtn = document.querySelector(".btn-container edit-container b-hidden");

resName.addEventListener("click", ()=>{

  resName.classList.add("res-name-hidden");
  input.classList.remove("res-name-hidden");

  input.focus();
  input.value = "";

  input.addEventListener("blur", () =>{
    resName.innerText = input.value ;
    resName.classList.remove("res-name-hidden");
    input.classList.add("res-name-hidden");

    if(input.value.trim().length == 0) {
      resName.innerText = "식당명을 입력하세요" ;
      return;
    }
  });

});

console.log(updateBtn);

// updateBtn.firstElementChild.addEventListener("click", ()=>{

// });
