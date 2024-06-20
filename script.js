console.log("Script Loading");

const toTop= document.querySelector(".back-top");

addEventListener("scroll", () =>{
    if(pageYOffset > 70){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})


const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    document.querySelector("header ul").classList.toggle("show");
})