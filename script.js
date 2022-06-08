let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
// console.log(buttons);
var val;
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        val = e.target.innerText;
        break;
      case "=":
        try {
          if (
            (val == "+" && e.target.innerText == "=") ||
            (val == "-" && e.target.innerText == "=") ||
            (val == "*" && e.target.innerText == "=") ||
            (val == "/" && e.target.innerText == "=")
          ) {
            break;
          } else {
            display.innerText = eval(display.innerText);
            val = e.target.innerText;
            break;
          }
        } catch {
          display.innerText = "Error";
          val = "Error";
        }
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
          val = e.target.innerText;
        }
        break;
      default:
        if (
          (val == "+" && e.target.innerText == "+") ||
          (val == "+" && e.target.innerText == "-") ||
          (val == "+" && e.target.innerText == "*") ||
          (val == "+" && e.target.innerText == "/") ||
          (val == "-" && e.target.innerText == "-") ||
          (val == "-" && e.target.innerText == "+") ||
          (val == "-" && e.target.innerText == "*") ||
          (val == "-" && e.target.innerText == "/") ||
          (val == "*" && e.target.innerText == "*") ||
          (val == "*" && e.target.innerText == "+") ||
          (val == "*" && e.target.innerText == "-") ||
          (val == "*" && e.target.innerText == "/") ||
          (val == "/" && e.target.innerText == "/") ||
          (val == "/" && e.target.innerText == "+") ||
          (val == "/" && e.target.innerText == "-") ||
          (val == "/" && e.target.innerText == "*")
        ) {
          display.innerText = display.innerText.slice(0, -1);
          display.innerText = display.innerText + e.target.innerText;
          val = e.target.innerText;
        } else if (
          (val == "=" && e.target.innerText == "0") ||
          (val == "=" && e.target.innerText == "1") ||
          (val == "=" && e.target.innerText == "2") ||
          (val == "=" && e.target.innerText == "3") ||
          (val == "=" && e.target.innerText == "4") ||
          (val == "=" && e.target.innerText == "5") ||
          (val == "=" && e.target.innerText == "6") ||
          (val == "=" && e.target.innerText == "7") ||
          (val == "=" && e.target.innerText == "8") ||
          (val == "=" && e.target.innerText == "9")
        ) {
          display.innerText = "";
          display.innerText = display.innerText + e.target.innerText;
          val = e.target.innerText;
        } else {
          display.innerText = display.innerText + e.target.innerText;
          val = e.target.innerText;
        }
    }
  });
});
