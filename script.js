document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".subscribe");
    const emailInput = document.getElementById("email");
    const required = document.querySelector(".required");
    const form = document.querySelector('form');
    const foot = document.querySelector('footer');
    const dismiss = document.querySelector('.dismiss')
    const hide = document.querySelectorAll('.hide')
    required.style.display = 'none';
    foot.style.display = 'none';
    button.addEventListener('click', function (event) {
        event.preventDefault();
    
        const email = emailInput.value;
        if (!email.includes('@gmail.com')) {
            required.style.display = 'block'
        }
        else {
            foot.style.display = 'block';
            hide.forEach((element)=>{
                element.style.display='none'
            })
        }
    });
});