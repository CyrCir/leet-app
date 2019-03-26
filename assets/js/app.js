"use strict";

window.onload = function () {
    function letsLeet() {
        // get user infos
        let firstName = prompt('Veuillez saisir votre prénom');
        let lastName = prompt('Veuillez saisir votre nom');
        let town = prompt('Veuillez saisir votre ville');
        let job = prompt('Veuillez saisir votre job');

        // transform infos into leet speak &
        
        convertLeet(lastName);
        convertLeet(town);
        convertLeet(job);

        // fill html id spans with the formatted infos
        document.getElementById('fname').innerText = convertLeet(firstName);
        document.getElementById('lname').innerText = convertLeet(lastName);
        document.getElementById('town').innerText = convertLeet(town);
        document.getElementById('job').innerText = convertLeet(job);
    }
}