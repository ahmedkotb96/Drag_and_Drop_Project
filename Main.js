let btn = document.getElementById("btn");
let input_1 = document.getElementById("input_1");
let boxes = document.querySelectorAll(".box");
let drag = null;

btn.onclick = function () {
  if (input_1.value != "") {
    boxes[0].innerHTML += `
        <p class = "item" draggable="true">${input_1.value}</p>`;
    input_1.value = "";
  }
  dragItem();
}
function dragItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item)=>{
    item.addEventListener("dragstart", function (){
      drag = item;
      item.style.opacity = "0.5";
    });
    item.addEventListener("dragend", function (){
      drag = null;
      item.style.opacity = "1";
    });
    boxes.forEach(box=>{
      box.addEventListener("dragover", function(e){
        e.preventDefault()
        this.style.background = "black";
        this.style.color = "white";
      });
      box.addEventListener("dragleave", function(){
        this.style.background = "white";
        this.style.color = "black";
      });
      box.addEventListener("drop", function(){
        this.append(drag);
        this.style.background = "white";
        this.style.color = "black";
      })
    })
  })
}
