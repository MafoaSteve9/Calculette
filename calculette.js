function clearCalculette() {
    document.getElementById("result").value = "";
    }

function display(value) {
    document.getElementById("result").value += value;
    }
    
function calculate() {
    let a = document.getElementById("result").value;
    let b = eval(a);//La méthode évalue ou exécute un argument.eval()
    document.getElementById("result").value = b;
    }