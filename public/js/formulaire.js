let images = ["assets/dice/dice-01.svg",
    "assets/dice/dice-02.svg",
    "assets/dice/dice-03.svg",
    "assets/dice/dice-04.svg",
    "assets/dice/dice-05.svg",
    "assets/dice/dice-06.svg"];

function roll(add) {
    document.getElementById('die-1').classList.add("shake");
    document.getElementById('die-2').classList.add("shake");

    setTimeout(function () {
            const unit = document.getElementById('select').value;

            const die1 = document.getElementById('die-1');
            const die2 = document.getElementById('die-2');

            die1.classList.remove("shake");
            die2.classList.remove("shake");

            let dieOneValue = Math.floor(Math.random() * 6);
            let dieTwoValue = Math.floor(Math.random() * 6);

            die1.setAttribute("src", images[dieOneValue]);
            die2.setAttribute("src", images[dieTwoValue]);
            let total = ((dieOneValue + 1) + (dieTwoValue + 1));

            switch (unit) {
                case "1":
                    year(add, total)
                    break;
                case "2":
                    month(add, total)
                    break;
                case "3":
                    day(add, total)
                    break;
            }

        },
        1000
    );
}

function year(add, total) {
    const dateString = (document.getElementById('birthdate').value).split("/")
    const date = new Date(+dateString[2], dateString[1] - 1, ++dateString[0])

    if (add) {
        date.setFullYear(date.getFullYear() + total)
        document.getElementById('birthdate').value = date.toLocaleDateString('fr-FR', {timeZone: 'UTC'})
    } else {
        date.setFullYear(date.getFullYear() - total)
        document.getElementById('birthdate').value = date.toLocaleDateString('fr-FR', {timeZone: 'UTC'})
    }
}

function month(add, total) {
    const dateString = (document.getElementById('birthdate').value).split("/")
    const date = new Date(+dateString[2], dateString[1] - 1, ++dateString[0])

    if (add) {
        date.setMonth(date.getMonth() + total)
        document.getElementById('birthdate').value = date.toLocaleDateString('fr-FR', {timeZone: 'UTC'})
    } else {
        date.setMonth(date.getMonth() - total)
        document.getElementById('birthdate').value = date.toLocaleDateString('fr-FR', {timeZone: 'UTC'})
    }
}

function day(add, total) {
    const dateString = (document.getElementById('birthdate').value).split("/")
    let date;

    if (add) {
        date = new Date(+dateString[2], dateString[1] - 1, ++dateString[0] + total);
        document.getElementById('birthdate').value = date.toLocaleDateString('fr-FR', {timeZone: 'UTC'})
    } else {
        date = new Date(+dateString[2], dateString[1] - 1, ++dateString[0] - total);
        document.getElementById('birthdate').value = date.toLocaleDateString('fr-FR', {timeZone: 'UTC'})
    }

}

function hideCookie() {
    document.getElementById('cookie').classList.add("cookie")

    setTimeout(function () {
        document.getElementById('cookie').classList.add("hidden")
    },
    19000
);
    
}