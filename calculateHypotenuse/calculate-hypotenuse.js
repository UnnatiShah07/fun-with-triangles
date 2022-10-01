const sideInputs = document.querySelectorAll("#side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
    console.log(typeof a);
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    const sumOfSquares = calculateSumOfSquares(
        Number(sideInputs[0].value),
        Number(sideInputs[1].value)
    );
    const c = Math.sqrt(sumOfSquares);
    output.innerText = "The length of hypotenuse is : " + c;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
