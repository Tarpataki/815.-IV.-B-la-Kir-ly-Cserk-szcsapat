
document.addEventListener('DOMContentLoaded', function() {
    
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    menuToggle.addEventListener('click', function() {
        
        mobileNav.classList.toggle('is-open');

        const isExpanded = mobileNav.classList.contains('is-open');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });
});

    const form = document.getElementById("jelentkezesForm");

    const csaladnevInput = document.getElementById("csaladnev");
    const nevInput = document.getElementById("nev");
    const cimInput = document.getElementById("cim");
    const szulonevInput = document.getElementById("szulonev");
    const szuloemailInput = document.getElementById("szuloemail");
    const szulotelefonInput = document.getElementById("szulotelefon");
    const szuletesInput = document.getElementById("szuletes");
    const tajInput = document.getElementById("taj");
    const diakInput = document.getElementById("diak");

    const csaladnevError = document.getElementById("error-csaladnev");
    const nevError = document.getElementById("error-nev");
    const cimError = document.getElementById("error-cim");
    const szulonevError = document.getElementById("error-szulonev");
    const szuloemailError = document.getElementById("error-szuloemail");
    const szulotelefonError = document.getElementById("error-szulotelefon");
    const szuletesError = document.getElementById("error-szuletes");
    const tajError = document.getElementById("error-taj");
    const diakError = document.getElementById("error-diak");

    form.addEventListener("submit", function(event) {
        let isValid = true;

        const errors = document.querySelectorAll(".error-msg");
        errors.forEach(el => el.textContent = "")
        const inputs = document.querySelectorAll("input, select");
        inputs.forEach(el => el.classList.remove("input-error"));

        if (csaladnevInput.value.trim() === "") {
            csaladnevError.textContent = "A családnév megadása kötelező!";
            csaladnevInput.classList.add("input-error");
            isValid = false;
        }

        if (nevInput.value.trim() === "") {
            nevError.textContent = "Gyermek nevének megadása kötelező!";
            nevInput.classList.add("input-error");
            isValid = false;
        }

        if (cimInput.value.trim() === "") {
            cimError.textContent = "A lakcím megadása kötelező!";
            cimInput.classList.add("input-error");
            isValid = false;
        }

        if (szulonevInput.value.trim() === "") {
            szulonevError.textContent = "Szülő1 nevének megadása kötelező!";
            szulonevInput.classList.add("input-error");
            isValid = false;
        }

        if (szuloemailInput.value.trim() === "") {
            szuloemailError.textContent = "Az e-mail cím megadása kötelező!";
            szuloemailInput.classList.add("input-error");
            isValid = false
        } else if (!szuloemailInput.value.includes("@")){
            szuloemailError.textContent = "Érvényes e-mail címet adjon meg";
            szuloemailInput.classList.add("input-error");
            isValid = false
        }

        if (szulotelefonInput.value.trim() === "") {
            szulotelefonError.textContent = "A telefonszám megadása kötelező!";
            szulotelefonInput.classList.add("input-error");
            isValid = false;
        }

        if (szuletesInput.value.trim() === "") {
            szuletesError.textContent = "A születési dátum megadása kötelező!";
            szuletesInput.classList.add("input-error");
            isValid = false;
        }

        if (tajInput.value.trim() === "") {
            tajError.textContent = "A TAJ szám megadása kötelező.";
            tajInput.classList.add("input-error");
            isValid = false;
        } else if (isNaN(Number(tajInput.value))) {
            tajError.textContent = "Csak számokat tartalmazhat!";
            tajInput.classList.add("input-error");
            isValid = false;
        } else if (tajInput.value.length !== 9) {
            tajError.textContent = "Pontosan 9 számjegyből kell állnia!";
            tajInput.classList.add("input-error");
            isValid = false;
        }

        if (diakInput.value.trim() === "") {
            diakError.textContent = "A TAJ szám megadása kötelező.";
            diakInput.classList.add("input-error");
            isValid = false;
        } else if (isNaN(Number(diakInput.value))) {
            diakError.textContent = "Csak számokat tartalmazhat!";
            diakInput.classList.add("input-error");
            isValid = false;
        } else if (diakInput.value.length !== 11) {
            diakError.textContent = "Pontosan 11 számjegyből kell állnia!";
            diakInput.classList.add("input-error");
            isValid = false;
        }




        if (!isValid) {
            event.preventDefault();
            console.log("Hiba az űrlapon!")
            const firstErrorInput = document.querySelector('.input-error');

            if (firstErrorInput) {
                firstErrorInput.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                firstErrorInput.focus();
            }
        } else {
            console.log("Minden mező rendben, küldés.")
        }
    })
//})