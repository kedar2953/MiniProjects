const modal=document.querySelector(".modal")
const overlay=document.querySelector(".overlay")
function openModal(){
    console.log("Modal is open");
    modal.classList.add("active")
    //intially in modal class scale of modal is 0 when we open modal active class is inserted to modal class
    //in active class scale becomes 1 , thus modal is visible

    overlay.classList.add("overlayactive") 
}
function closeModal(){
    modal.classList.remove("active")
    overlay.classList.remove("overlayactive")
}



