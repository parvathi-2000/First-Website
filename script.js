const helloBtn = document.getElementById("HelloBtn");
helloBtn.addEventListener("click",()=>{
    alert("Helllo, Welcome to my first website");
});

const themeBtn=document.getElementById("themeBtn");
themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
});

const contactForm=document.querySelector("form");
contactForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    alert("Thank you for reaching out!Will get back to you soon");
    contactForm.reset;
});