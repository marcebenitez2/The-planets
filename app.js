const carrousel = document.querySelector(".carrousel");
const btn1 = document.querySelectorAll(".btn1");
const btn2 = document.querySelectorAll(".btn2");
const btn3 = document.querySelectorAll(".btn3");
const slider1 = document.querySelector(".slider1");
const slider2 = document.querySelector(".slider2");
const slider3 = document.querySelector(".slider3");



btn1.forEach(btns1 => {
    btns1.addEventListener("click",()=>{
        slider1.style.transform = "translate3D(0%, 0px, 0px)";
        slider2.style.transform = "translate3D(100%, 0px, 0px)";
        slider3.style.transform = "translate3D(200%, 0px, 0px)";
        btn1.forEach(active => {
            active.classList.add("btn-active")
        });
        btn2.forEach(active => {
            active.classList.remove("btn-active")
        });
        btn3.forEach(active => {
            active.classList.remove("btn-active")
        });
    })
});

btn2.forEach(btns2 => {
    btns2.addEventListener("click",()=>{
        slider1.style.transform = "translate3D(-150%, 0px, 0px)";
        slider2.style.transform = "translate3D(-100%, 0px, 0px)";
        slider3.style.transform = "translate3D(-50%, 0px, 0px)";
        btn1.forEach(active => {
            active.classList.remove("btn-active")
        });
        btn2.forEach(active => {
            active.classList.add("btn-active")
        });
        btn3.forEach(active => {
            active.classList.remove("btn-active")
        });
        

    })
});

btn3.forEach(btns3 => {
    btns3.addEventListener("click",()=>{
        slider1.style.transform = "translate3D(-300%, 0px, 0px)";
        slider2.style.transform = "translate3D(-250%, 0px, 0px)";
        slider3.style.transform = "translate3D(-200%, 0px, 0px)";
        btns3.classList.add("btn-active")

        btn1.forEach(active => {
            active.classList.remove("btn-active")
        });
        btn2.forEach(active => {
            active.classList.remove("btn-active")
        });
        btn3.forEach(active => {
            active.classList.add("btn-active")
        });
    })
});

