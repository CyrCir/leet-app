"use strict";

function letsLeet() {
    console.log("----> Let's leet dear...");

    // get user infos
    let firstName = prompt('Veuillez saisir votre prénom');
    let lastName = prompt('Veuillez saisir votre nom');
    let town = prompt('Veuillez saisir votre ville');
    let job = prompt('Veuillez saisir votre job');
    
    // transform infos into leet speak &
    // fill html id spans with the formatted infos
    document.getElementById('fname').innerText = convertLeet(firstName);
    document.getElementById('lname').innerText = convertLeet(lastName);
    document.getElementById('town').innerText = convertLeet(town);
    document.getElementById('job').innerText = convertLeet(job);

    console.log("----> Conversion done, you're now a thug big boy.");
}