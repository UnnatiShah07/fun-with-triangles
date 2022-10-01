const base = document.querySelector("#base");
const height = document.querySelector("#height");
const areaBtn = document.querySelector("#area-btn");
const output = document.querySelector("#output");

function calculateMultiplication(a, b) {
    const multiplication = a * b;
    return multiplication;
}

function calculateHypotenuse() {
    const multiplication = calculateMultiplication(
        Number(base.value),
        Number(height.value)
    );
    const area = multiplication / 2;
    output.innerText = "The area of triangle is : " + area + " cm²";
}

areaBtn.addEventListener("click", calculateHypotenuse);
