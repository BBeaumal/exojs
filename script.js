window.addEventListener("load", function () {
    let btn = document.querySelector("button");
    let word = document.getElementById("word");
    let tableau = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
    let couleurs = ["red", "blue", "yellow", "black", "green"];

    btn.addEventListener("click", function () {
        for (i = 0; i < 5; i++) {
            document.getElementById("body").style.backgroundColor = couleurs[i];
            word.innerHTML = tableau[i];
        }
    })

})