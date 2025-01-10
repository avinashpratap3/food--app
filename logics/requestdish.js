const reqcartModal = document.querySelector("#reqcartModal");
 const reqcartBtn = document.querySelector("#reqBtn");
 const reqcloseModal = document.querySelector("#reqcloseModal");


//  Open modal and disable scroll
 reqcartBtn.addEventListener("click", () => {
    // console.log("click")
    event.preventDefault(); 
   reqcartModal.style.display = "flex";
   document.body.classList.add("no-scroll");
 });

  

 // Close modal and enable scroll
 reqcloseModal.addEventListener("click", () => {
   reqcartModal.style.display = "none";
   console.log("hel")
   document.body.classList.remove("no-scroll");
 });

 // Close modal when clicking outside the content
 window.addEventListener("click", (event) => {
   if (event.target === reqcartModal) {
     reqcartModal.style.display = "none";
     document.body.classList.remove("no-scroll");
   }
 });