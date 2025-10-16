function display(val) {
    document.getElementById('result').value += val;
}

function clearScreen() {
    document.getElementById('result').value = "";
}

function calculate() {
    var userInput = document.getElementById('result').value;
    var result = eval(userInput);
    document.getElementById('result').value = result;
}

function deleteChar() {
    var current = document.getElementById('result').value;
    document.getElementById('result').value = current.slice(0, -1);
}
