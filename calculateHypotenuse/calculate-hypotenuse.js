const sideInputs = document.querySelectorAll("#side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
    console.log(typeof a);
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    if (Number(sideInputs[0].value) < 0 || Number(sideInputs[1].value < 0)) {
        output.innerText = "You can enter only positive angle as input.";
    } else {
        const sumOfSquares = calculateSumOfSquares(
            Number(sideInputs[0].value),
            Number(sideInputs[1].value)
        );
        const c = Math.sqrt(sumOfSquares);
        output.innerText = "The length of hypotenuse is : " + c;
    }
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
