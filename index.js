function imgSlider(o){
    document.querySelector(".heading").src = o;
}
const btn = document.querySelectorAll(".btn")
const display = document.querySelector(".number")

btn.forEach((button) => 
button.addEventListener('click',() => {
    display.innerHTML = "0" + button.value;
})

);
let tl = gsap.timeline({});
tl.from(".logo", 1, {
y:200,
opacity:0,
})
tl.from("nav ul li", 1, {
    y:200,
    stagger:0.2,
    opacity:0,
    })
    

    tl.from(".elmt", 1, {
        y:500,
        stagger:0.2,
        opacity:0,
        })
        