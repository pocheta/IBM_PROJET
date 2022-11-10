let validateButton;
let interval_id;
let x_incr = 1;
let y_incr = 1;

let cptClick = 0;

function initButton() {
    cptClick++;
    if (cptClick < 3) {
        validateButton = document.getElementById('validateButton');
        validateButton.style.position = 'absolute';
        setInterval(frame, 5);
    }
}

function handle_collision() {
    let validateButton_height = validateButton.offsetHeight;
    let validateButton_width = validateButton.offsetWidth;
    let left = validateButton.offsetLeft;
    let top = validateButton.offsetTop;
    let win_height = window.innerHeight;
    let win_width = window.innerWidth;

    if (left <= 0 || left + validateButton_width >= win_width) {
        x_incr = ~x_incr + 1;
    }
    if (top <= 0 || top + validateButton_height >= win_height) {
        y_incr = ~y_incr + 1;
    }
}

function frame() {
    handle_collision();
    validateButton.style.top = validateButton.offsetTop + y_incr + 'px';
    validateButton.style.left = validateButton.offsetLeft + x_incr + 'px';
}

var notValideTimer = 5

function validate() {
    var firstname = document.getElementById('firstname').value
    var lastname = document.getElementById('lastname').value
    var email = document.getElementById('email').value
    var mailDomain = document.getElementById('mailDomain').value
    var birthdate = document.getElementById('birthdate').value
    var password = document.getElementById('password').value

    if (firstname != '' && firstname != 'Enter your firstname' &&
        lastname != '' && lastname != 'Enter your lastname' &&
        email != '' && email != 'Enter your email' &&
        mailDomain != '' && mailDomain != 'domaine.fr' &&
        birthdate != '' &&
        password != '' && password != 'Enter your password') {
        window.location.href = 'valide.html?firstname=' + firstname + '&lastname=' + lastname + '&email=' + email + '&mailDomain=' + mailDomain + '&birthdate=' + birthdate + '&password=' + password
    }else{
        document.getElementById('popup-notValide').classList.remove('hidden')
        
        let timerId = setInterval(function(){
            document.getElementById('notValideTimer').innerHTML = notValideTimer-- + " sec"
        }, 1000)

        setTimeout(function(){
            document.getElementById('popup-notValide').classList.add('hidden')
            notValideTimer = 5
            document.getElementById('notValideTimer').innerHTML = notValideTimer + " sec"
            clearInterval(timerId)
        },6500)
    }
}

function reinitialize() {
    document.getElementById('body').classList.add("vibrate-3")
    document.getElementById('popup-reset').classList.remove('hidden')
    document.getElementById('popup-reset').classList.add('flex')
}

function closeModal() {
    document.getElementById('body').classList.remove("vibrate-3")
    document.getElementById('popup-reset').classList.remove('flex')
    document.getElementById('popup-reset').classList.add('hidden')
}

let restTimer = 30

function resetForm() {
    document.getElementById('popup-reset').classList.remove('flex')
    document.getElementById('popup-reset').classList.add('hidden')
    document.getElementById('popup-resetTimer').classList.add('flex')
    document.getElementById('popup-resetTimer').classList.remove('hidden')

    document.getElementById('resetTimer').innerHTML = restTimer + " sec"
    const id = setInterval(decrementTimer, 1000);

    setTimeout(function () {
        document.getElementById('body').classList.remove("vibrate-3")
        document.getElementById('popup-resetTimer').classList.remove('flex')
        document.getElementById('popup-resetTimer').classList.add('hidden')

        document.getElementById('firstname').value = "Enter your firstname"
        document.getElementById('lastname').value = "Enter your lastname"
        document.getElementById('email').value = "Enter your email"
        document.getElementById('birthdate').value = "01/01/1930"
        document.getElementById('password').value = "Enter your password"

        var select = document.getElementById('mailDomain')
        select.innerHTML = ''
        var el = document.createElement("option");
        el.textContent = "domaine.fr";
        el.value = "domaine.fr";
        select.appendChild(el);

        clearInterval(id)
        restTimer = 30;

    }, 32000)

}

function decrementTimer() {
    document.getElementById('resetTimer').innerHTML = restTimer-- + " sec"
}