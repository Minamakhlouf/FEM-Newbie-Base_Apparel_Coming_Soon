let button = document.querySelector("button"); 
let form = document.querySelector("form")
let email = document.querySelector("#email"); 
let errorLogo = document.querySelector(".error-logo")
let error = document.querySelector(".error"); 
let text = document.querySelector(".text"); 
let textContent = document.querySelector(".text-content")
let logo = document.querySelector(".logo"); 
let previoustextSize = "";

form.addEventListener("submit", function(e) {
    if (!email.value && !email.value.includes("@")) {
        e.preventDefault(); 
        error.classList.remove("hidden");
        errorLogo.classList.remove("hidden");
    }
});

const observer = new ResizeObserver(entries => {
    const textElement = entries[0]; 
    console.log(textContent.getBoundingClientRect().width); 
    if (text.getBoundingClientRect().width !== previoustextSize && window.innerWidth > 1110) {
        previoustextSize = textContent.getBoundingClientRect().width; 
        logo.style.marginLeft = `${text.getBoundingClientRect().left}px`; 
    }
})

observer.observe(textContent); 