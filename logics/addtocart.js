 // Get modal and buttons
 const cartModal = document.getElementById("cartModal");
 const dot=document.querySelector(".cart-dot");
 const cartBtn = document.getElementById("cartBtn");
 const closeModal = document.getElementById("closeModal");

 // Open modal and disable scroll
 cartBtn.addEventListener("click", () => {
    event.preventDefault(); 
   cartModal.style.display = "flex";
   document.body.classList.add("no-scroll");
 });
 dot.addEventListener("click", () => {
    event.preventDefault(); 
   cartModal.style.display = "flex";
   document.body.classList.add("no-scroll");
 });

 // Close modal and enable scroll
 closeModal.addEventListener("click", () => {
   cartModal.style.display = "none";
   document.body.classList.remove("no-scroll");
 });

 // Close modal when clicking outside the content
 window.addEventListener("click", (event) => {
   if (event.target === cartModal) {
     cartModal.style.display = "none";
     document.body.classList.remove("no-scroll");
   }
 });