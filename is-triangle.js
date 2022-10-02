const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    if (
        Number(inputs[0].value) < 0 ||
        Number(inputs[1].value) < 0 ||
        Number(inputs[2].value) < 0
    ) {
        output.innerText = "You can enter only positive angle as input.";
    } else {
        const sumOfAngles = calculateSumOfAngles(
            Number(inputs[0].value),
            Number(inputs[1].value),
            Number(inputs[2].value)
        );
        if (sumOfAngles === 180) {
            output.innerText = "Yay, The angles form a triangle 🔺";
        } else {
            if (sumOfAngles === 0)
                output.innerText = "Please enter all fields ☹️";
            else
                output.innerText =
                    "Oh! , The angles does not form a triangle 🤪";
        }
    }
}

isTriangleBtn.addEventListener("click", isTriangle);
