let passwordTimer = 8

// respect = AAA*ibm.€012345678

function rules() {
    let isvalidate = true;

    let popup = document.getElementById('popup-password')

    let password = document.getElementById('password').value

    let rules0 = document.getElementById('rules0')
    let rules1 = document.getElementById('rules1')
    let rules2 = document.getElementById('rules2')
    let rules3 = document.getElementById('rules3')
    let rules4 = document.getElementById('rules4')
    let rules5 = document.getElementById('rules5')
    let rules6 = document.getElementById('rules6')
    let rules7 = document.getElementById('rules7')
    let rules8 = document.getElementById('rules8')
    let rules9 = document.getElementById('rules9')
    let rules10 = document.getElementById('rules10')

    // Doit contenir au moins 3 majusucles
    if (countMaj(password) < 3) {
        rules0.classList.remove('bg-green-100', 'border', 'border-green-400', 'text-green-700')
        rules0.classList.add('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'pulsate-fwd')
        isvalidate = false;
    } else {
        rules0.classList.remove('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'pulsate-fwd')
        rules0.classList.add('bg-green-100', 'border', 'border-green-400', 'text-green-700')
    }

    // Doit contenir aux max 4 majucules
    if (countMaj(password) > 4) {
        rules1.classList.remove('bg-green-100', 'border', 'border-green-400', 'text-green-700')
        rules1.classList.add('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'pulsate-fwd')
        isvalidate = false;
    } else {
        rules1.classList.remove('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'pulsate-fwd')
        rules1.classList.add('bg-green-100', 'border', 'border-green-400', 'text-green-700')
    }

    // Doit contenir au moins 3 minuscule
    if (countMin(password) < 3) {
        rules2.classList.remove('bg-green-100', 'border', 'border-green-400', 'text-green-700')
        rules2.classList.add('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'pulsate-fwd')
        isvalidate = false;
    } else {
        rules2.classList.remove('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'pulsate-fwd')
        rules2.classList.add('bg-green-100', 'border', 'border-green-400', 'text-green-700')
    }

    // Doit contenir au max 3 miniscule
    if (countMin(password) > 3) {
        rules3.classList.remove('bg-green-100', 'border', 'border-green-400', 'text-green-700')
        rules3.classList.add('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'pulsate-fwd')
        isvalidate = false;
    } else {
        rules3.classList.remove('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'pulsate-fwd')
        rules3.classList.add('bg-green-100', 'border', 'border-green-400', 'text-green-700')
    }

    // Doit contenir au moins 9 chiffres différent
    if (verifChiffre(password)) {
        rules4.classList.remove('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'pulsate-fwd')
        rules4.classList.add('bg-green-100', 'border', 'border-green-400', 'text-green-700')
    } else {
        rules4.classList.remove('bg-green-100', 'border', 'border-green-400', 'text-green-700')
        rules4.classList.add('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'pulsate-fwd')
        isvalidate = false;
    }

    // Doit contenir au moins un # un .
    if ((/[*]/).test(password) && (/[.]/).test(password)) {
        rules5.classList.remove('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'pulsate-fwd')
        rules5.classList.add('bg-green-100', 'border', 'border-green-400', 'text-green-700')
    } else {
        rules5.classList.remove('bg-green-100', 'border', 'border-green-400', 'text-green-700')
        rules5.classList.add('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'pulsate-fwd')
        isvalidate = false;
    }

    // Doit contenir au max un . 
    if (countDot(password) > 1) {
        rules6.classList.remove('bg-green-100', 'border', 'border-green-400', 'text-green-700')
        rules6.classList.add('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'pulsate-fwd')
        isvalidate = false;
    } else {
        rules6.classList.remove('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'pulsate-fwd')
        rules6.classList.add('bg-green-100', 'border', 'border-green-400', 'text-green-700')
    }

    // Doit contenir le mot `ibm`
    if (password.includes('ibm')) {
        rules7.classList.remove('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'pulsate-fwd')
        rules7.classList.add('bg-green-100', 'border', 'border-green-400', 'text-green-700')
    } else {
        rules7.classList.remove('bg-green-100', 'border', 'border-green-400', 'text-green-700')
        rules7.classList.add('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'pulsate-fwd')
        isvalidate = false;
    }

    // Doit avoir un # derriere une majuscule 
    if (hastagBehindMaj(password)) {
        rules8.classList.remove('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'pulsate-fwd')
        rules8.classList.add('bg-green-100', 'border', 'border-green-400', 'text-green-700')
    } else {
        rules8.classList.remove('bg-green-100', 'border', 'border-green-400', 'text-green-700')
        rules8.classList.add('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'pulsate-fwd')
        isvalidate = false;
    }

    // Doit etre de longeur 19 max (afficher (((19 / 5 / 8 * 20) - 12 + 1) * 2 + 22))
    if (password.length > 19) {
        rules9.classList.remove('bg-green-100', 'border', 'border-green-400', 'text-green-700')
        rules9.classList.add('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'pulsate-fwd')
        isvalidate = false;
    } else {
        rules9.classList.remove('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'pulsate-fwd')
        rules9.classList.add('bg-green-100', 'border', 'border-green-400', 'text-green-700')
    }

    // Doit etre de longeur 18 min (afficher ((18 * 15 / 8) + 123 / 12 - 26))
    if (password.length < 18) {
        rules10.classList.remove('bg-green-100', 'border', 'border-green-400', 'text-green-700')
        rules10.classList.add('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'pulsate-fwd')
        isvalidate = false;
    } else {
        rules10.classList.remove('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'pulsate-fwd')
        rules10.classList.add('bg-green-100', 'border', 'border-green-400', 'text-green-700')
    }

    if (!isvalidate) {
        popup.classList.remove('hidden')
        document.getElementById('passwordTimer').innerHTML = "Cette fenetre va se fermer dans " + passwordTimer + " sec"
        const id = setInterval(decrementPasswordTimer, 1000);

        setTimeout(function () {
            popup.classList.add('hidden')
            clearInterval(id)
            passwordTimer = 8;
        }, 9500)
    } else {
        document.getElementById('password').classList.add('border', 'border-green-400')
    }

}

function decrementPasswordTimer() {
    document.getElementById('passwordTimer').innerHTML = "Cette fenetre va se fermer dans " + passwordTimer-- + " sec"
}

function countMaj(password) {
    return password.length - password.replace(/[A-Z]/g, '').length
}

function countMin(password) {
    return password.length - password.replace(/[a-z]/g, '').length
}

function countMin(password) {
    return password.length - password.replace(/[a-z]/g, '').length
}

function verifChiffre(password) {
    let res = new Array(false, false, false, false, false, false, false, false, false, false)
    let array = [...password]
    array.forEach(c => {
        switch (c) {
            case '0':
                res[0] = true
                break;
            case '1':
                res[1] = true
                break;
            case '2':
                res[2] = true
                break;
            case '3':
                res[3] = true
                break;
            case '4':
                res[4] = true
                break;
            case '5':
                res[5] = true
                break;
            case '6':
                res[6] = true
                break;
            case '7':
                res[7] = true
                break;
            case '8':
                res[8] = true
                break;
            case '9':
                res[9] = true
                break;
            default:
                break;
        }
    });

    const counts = {};

    for (const num of res) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    return counts.true >= 9;
}

function countDot(password) {
    let counter = 0
    let array = [...password]
    array.forEach(c => {
        if (c == '.') counter++
    });
    return counter
}

function hastagBehindMaj(password) {
    let array = [...password]
    for (let index = 0; index < array.length; index++) {
        if (array[index].match(/[A-Z]/) && index + 1 != array.length) {
            if (array[index + 1] == '*') return true
        }
    }
    return false
}