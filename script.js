const helloBtn = document.getElementById("HelloBtn");
helloBtn.addEventListener("click",()=>{
    alert("Helllo, Welcome to my first website");
});

const themeBtn=document.getElementById("themeBtn");
themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
});