

var cambio=true;

function Oscuro() {

    switch (cambio) {
        case true:
            botonMobile.style.background="#F3969A";
            botonMobile.style.color="black";
            document.getElementById("botonMobile").innerText="Modo Claro";
            portfolio.style.background="rgba(0, 0, 0, 0.808)";
            contact.style.background="rgba(0, 0, 0, 0.808)";
            navbar.style.background="rgba(0, 0, 0, 0.808)";
            
            break;}
    
}

/* 
function Oscuro() {

    switch (cambio) {
        case true:
            botonMobile.style.background="rgba(0, 0, 0, 0.808)";
            botonMobile.style.color="white";
            document.getElementById("botonMobile").innerText="Modo Oscuro";
            portfolio.style.background="white";
            contact.style.background="white";
            navbar.style.background="white";
            
            break;}
    
} */