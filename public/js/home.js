let nb = 0;

function homefunction() {
    if (++nb == 42){
        window.location.href = 'formulaire'
    }
    document.getElementById("counter").innerHTML = nb;
}