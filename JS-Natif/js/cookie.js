function hideCookie(val) {
    document.getElementById('cookie').classList.add("cookie")
    document.getElementById('yesCookie').disabled = true;
    document.getElementById('noCookie').disabled = true;

    setTimeout(function () {
        document.getElementById('cookie').classList.add("hidden")
    },
        19000
    );

    if (val) {
        document.getElementById('textCookieSure').innerHTML = "Etes-vous sur d'accepter les cookies..? "
    } else {
        document.getElementById('textCookieSure').innerHTML = "Etes-vous sur de ne pas accepter les cookies..? "
    }

    setTimeout(function () {
        document.getElementById('cookieSure').classList.add("cookieInverse")
        document.getElementById('cookieSure').classList.remove("hidden")
        setTimeout(function(){
            document.getElementById('yesSureCookie').disabled = false;
            document.getElementById('noSureCookie').disabled = false;
        },
            21000
        )
    },
        40000
    );
}

function hideSureCookie(val) {
    document.getElementById('cookieSure').classList.remove("cookieInverse")
    document.getElementById('cookieSure').classList.add("cookie")
    document.getElementById('yesSureCookie').disabled = true;
    document.getElementById('noSureCookie').disabled = true;

    setTimeout(function () {
        document.getElementById('cookieSure').classList.add("hidden")
    },
        19000
    );

    if (!val) {
        setTimeout(function () {
            document.getElementById('cookie').classList.add("cookieInverse")
            document.getElementById('cookie').classList.remove("hidden")
            setTimeout(function(){
                document.getElementById('yesCookie').disabled = false;
                document.getElementById('noCookie').disabled = false;
            },
                21000
            )
        },
            40000
        );
    }
}