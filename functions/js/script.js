let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  De variabele is myStr wat dus staat voor string. vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype 3 waarom? De variabele is myInt en de datatype is 3. vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? Je moet een variabele die je voor het eerst aanmaakt eerst declareren. vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen Regel 17. vul je antwoord in op de lijn

    // vul in wat naam is: naam is de Parameter vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde datatype de waarde noemen we een Attributes vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een melding op het scherm met de tekst "Kerim". deze tekst staan op regel 17 van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? Nee, want dan werkt de functie niet. vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? De naam wordt zichtbaar en ontzichbaar. en waar wordt deze in je HTML aangeroepen? Regel 23 en 25. vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML Regel 25. vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? Het selecteert een speciefieke id en een element. vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? Laat alleen tekst zien. vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen Regel 32 en wanneer wordt deze aangeroepen Als je klikt op 'Bereken, klik op mij!'. vul je antwoord in op de lijn

    let antwoord = 50 - getal; //waar komt de waarde van myInt vandaan Van de naam rekenen dat staat op regel 32. en waar komt de waarde van getal vandaan? Van de getal 10 dat staat op regel 32. vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? Dat vind een element dat past het bij een CSS selector.  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? Vindt een match met de element .som en uit die som is er een antwoord. vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? Er gebeurt niks. vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen Regel 44. vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan? Van setColor. En waar komt de waarde van kleur vandaan? Van orange. vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van size vandaan? Van 30px. vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? De element krijgt een kleur en grootte van tekst wordt groter. vul je antwoord in op de lijn
}

getName(naam);
// wat gebeurd er hierboven? Wanneer je website ververst komt er bovenaan de scherm een melding. en wanneer gebeurt dat? Als je je website ververst. (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? Gebeurt niks. vul je antwoord in op de lijn.