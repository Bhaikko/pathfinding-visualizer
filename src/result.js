const resultText = document.getElementById("result");

let prevClassAdded = null;

const setResult = (text, classToadd) => {
    resultText.innerText = text;

    prevClassAdded = classToadd;
    resultText.classList.add(classToadd);
}

const resetResult = () => {
    resultText.innerText = "";
    resultText.classList.remove(prevClassAdded);
}

