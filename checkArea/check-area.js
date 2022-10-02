const base = document.querySelector("#base");
const height = document.querySelector("#height");
const areaBtn = document.querySelector("#area-btn");
const output = document.querySelector("#output");

function calculateMultiplication(a, b) {
    const multiplication = a * b;
    return multiplication;
}

function calculateHypotenuse() {
    if (Number(base.value) < 0 || Number(height.value) < 0) {
        output.innerText = "You can enter only positive numbers as input.";
    } else {
        const multiplication = calculateMultiplication(
            Number(base.value),
            Number(height.value)
        );
        const area = multiplication / 2;
        output.innerText = "The area of triangle is : " + area + " cm²";
    }
}

areaBtn.addEventListener("click", calculateHypotenuse);
