function alertBox() {
    alert("Hello, world");
}

function increaseText() {
    document.getElementById("textField").style.fontSize = "24pt";
}

function textUpdate() {
    alert("Text Style Has Been Updated");
    const text = document.getElementById("textField");
    const fancy = document.getElementById("fancyRadio");
    const boring = document.getElementById("boringRadio");

    if (fancy.checked) {
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";

    } else if (boring.checked) {
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}

function changeMoo() {
    const text = document.getElementById("textField");
    text.value = text.value.toUpperCase();
    let sentence = text.value.split(".");
    let lastWord = sentence.pop();
    lastWord += "-MOO";
    text.value = sentence.join(". ") + ". " + lastWord;
}