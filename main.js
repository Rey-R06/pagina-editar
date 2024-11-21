function cambio(n) {
    main = document.getElementById("main")
    header = document.getElementById("header")
    footer = document.getElementById("footer")

    switch (n) {
        case 1:
            header.style.backgroundColor = "#5bc0de";
            main.style.backgroundColor = "#5bc0de";
            footer.style.backgroundColor = "#5bc0de";   
            break;
        case 2:
            header.style.backgroundColor = "#ffff00";
            main.style.backgroundColor = "#ffff00";
            footer.style.backgroundColor = "#ffff00";
            break;
        case 3:
            header.style.backgroundColor = "#FF0000";
            main.style.backgroundColor = "#FF0000";
            footer.style.backgroundColor = "#FF0000";   
            
            break;
        case 4:
            header.style.backgroundColor = "#008f39";
            main.style.backgroundColor = "#008f39"; 
            footer.style.backgroundColor = "#008f39"; 
            break;
        default:
            break;
    }
}

let n = 0;
menueditar = document.getElementById("edit")
function menuedit() {
    if (n == 0) {
        menueditar.style.opacity = "1";
        menueditar.style.visibility = "visible";
        n = 1;
    } else {
        menueditar.style.opacity = "0";
        menueditar.style.visibility = "hidden";
        n = 0;
    }

}