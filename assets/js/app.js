"use strict";

function letsLeet() {
    console.log("----> Let's leet dear...");

    // get user infos
    let firstName = prompt('Veuillez saisir votre prÃ©nom');
    let lastName = prompt('Veuillez saisir votre nom');
    let town = prompt('Veuillez saisir votre ville');
    let job = prompt('Veuillez saisir votre job');
    
    // transform infos into leet speak &
    // fill html id spans with the formatted infos
    document.getElementById('fname').innerText = convertLeet(firstName);
    document.getElementById('lname').innerText = convertLeet(lastName);
    document.getElementById('town').innerText = convertLeet(town);
    document.getElementById('job').innerText = convertLeet(job);
    document.getElementById('sealOfApproval').innerHTML = '<img src="https://vignette.wikia.nocookie.net/simpsons/images/2/20/Krusty_Brand_Seal_of_Approval.gif/revision/latest?cb=20100611215304" alt="Approved !" title="Approved !">'

    console.log("----> Conversion done, you're now a thug big boy.");
}