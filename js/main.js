const bsCollapse = new bootstrap.Collapse('#navbarNav', {
    toggle: false
  })
document.addEventListener("click",e=>{
    // ver si es uno de los enlaces dentro del navbar
    if(!e.target.matches(".navbar a")) return;

    bsCollapse.hide();
});

document.getElementById("email").addEventListener("input", function() {
    const emailValue = document.getElementById("email").value;
    const form = document.getElementById("dynamicForm");
    // validarlo
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(emailValue)) {
        form.action = "https://formsubmit.co/" + emailValue;
    } else {// si es invalido
        console.error("No es valido")
        form.action = "https://formsubmit.co/your@email.com";
    }
});