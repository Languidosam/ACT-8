var currentTheme = "main";

function Blue(theme) {
    if (currentTheme === "blue") {
        resetTheme();
    } else {
        document.body.style.backgroundColor = "#000d1a";
        document.body.style.color = "white";
        document.body.style.fontFamily = "Arial, sans-serif";
        currentTheme = "blue";
    }
}

function Pink(theme) {
    if (currentTheme === "pink") {
        resetTheme();
    } else {
        document.body.style.backgroundColor = "#db0356";
        document.body.style.color = "black";
        document.body.style.fontFamily = "'Comic Sans MS', cursive";
        currentTheme = "pink";
    }
}

function Brown(theme) {
    if (currentTheme === "brown") {
        resetTheme();
    } else {
        document.body.style.backgroundColor = "#4d2001";
        document.body.style.color = "white";
        document.body.style.fontFamily = "'Times New Roman', Times, serif";
        currentTheme = "brown";
    }
}


function resetTheme() {
    document.body.style.backgroundColor = "#8d99ae";
    document.body.style.color = "black";
    document.body.style.fontFamily = "default";
    currentTheme = "main";
}