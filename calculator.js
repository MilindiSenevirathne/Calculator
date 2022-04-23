function forclearAll() {
    document.getElementById("output").innerHTML = "0";
}

function removeFirstZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("output").innerHTML = value;
    }
}

function fordisplay(value) {
    removeFirstZero()
    document.getElementById("output").innerHTML += value;
}

function backspace(){
    let current = document.getElementById("output").innerHTML;
    document.getElementById("output").innerHTML = current.slice(0,-1);
    if(document.getElementById("output").innerHTML<=1)
    {
        document.getElementById("output").innerHTML = "0";
    }
}

function solve() {
    removeFirstZero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById('output').innerHTML = solved;
}

