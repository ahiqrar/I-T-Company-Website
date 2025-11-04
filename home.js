/* let menuBtn = document.querySelector(".btn1");
let navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  const opened = navMenu.classList.toggle("open");
  menuBtn.textContent = opened ? "☰ Close" : " Menu";
  menuBtn.setAttribute("aria-expanded", opened);
});
 */

 function myFunction(x) {
    x.classList.toggle("change"); 
    document.getElementById("navMenu").classList.toggle("open");   }