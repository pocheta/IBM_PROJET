let nb = 42;

function homefunction() {
    if (--nb <= 0){
        window.location.href = 'formulaire'
    }
    
    document.getElementById("counter").innerHTML = "Accèder au formulaire - " + nb;
}

function rotateBody() {
    KioskBoard.init({
        keysArrayOfObjects: [{ "0": "Q", "1": "W", "2": "E", "3": "R", "4": "T", "5": "Y", "6": "U", "7": "I", "8": "O", "9": "P" }, { "0": "A", "1": "S", "2": "D", "3": "F", "4": "G", "5": "H", "6": "J", "7": "K", "8": "L" }, { "0": "Z", "1": "X", "2": "C", "3": "V", "4": "B", "5": "N", "6": "M" }],
        keysJsonUrl: null,
        keysSpecialCharsArrayOfStrings: null,
        keysNumpadArrayOfNumbers: null,
        language: 'en',
        theme: 'light',
        autoScroll: true,
        capsLockActive: true,
        allowRealKeyboard: false,
        allowMobileKeyboard: false,
        cssAnimations: true,
        cssAnimationsDuration: 360,
        cssAnimationsStyle: 'slide',
        keysAllowSpacebar: true,
        keysSpacebarText: 'Space',
        keysFontFamily: 'sans-serif',
        keysFontSize: '22px',
        keysFontWeight: 'normal',
        keysIconSize: '25px',
        keysEnterText: 'Enter',
        keysEnterCallback: undefined,
        keysEnterCanClose: true,
    });
    
    KioskBoard.run('.js-kioskboard-input');

    setInterval(function(){
        document.getElementById('body').classList.add('rotate-center')

        setTimeout(function(){
            document.getElementById('body').classList.remove('rotate-center')
        },4000)
    }, 15000);

    
}

function load() {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById('firstname').innerHTML = urlParams.get('firstname');
    document.getElementById('lastname').innerHTML = urlParams.get('lastname')
    document.getElementById('email').innerHTML = urlParams.get('email') + '@' + urlParams.get('mailDomain')
    document.getElementById('birthdate').innerHTML = urlParams.get('birthdate')
    document.getElementById('password').innerHTML = urlParams.get('password')
}
