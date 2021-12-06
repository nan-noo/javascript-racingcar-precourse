// functions
function isCorrectCarName(carNameInputValue) {
    const wrongNames = carNameInputValue
        .split(',')
        .filter(name => name.length > 5 || name.length < 1);
    if(!wrongNames.length) return true;
    else return false;
}

function isCorrectCount(countInputValue) {
    return Number.isInteger(Number(countInputValue)) && countInputValue >= 1;
}

function gameStart(carNameArray, racingCount) {
    console.log(carNameArray, racingCount);
}

// DOM
const app = document.querySelector("#app");
const carNameInput = document.querySelector("#car-names-input");
const countInput = document.querySelector("#racing-count-input");

app.addEventListener("click", function(e) {
    e.preventDefault();
    
    if(e.target.id === "car-names-submit") {
        if(!isCorrectCarName(carNameInput.value)) {
            alert("잘못된 입력 형식입니다. 쉼표로 구분하여 각각 5자 이하로 입력해주세요.");
            carNameInput.value = '';
            carNameInput.focus();
        }
    }
    else if(e.target.id === "racing-count-submit") {
        if(isCorrectCount(countInput.value)) {
            if(!isCorrectCarName(carNameInput.value)) {
                alert("자동차 이름을 형식에 맞춰 입력해 주세요.");
                carNameInput.value = '';
                carNameInput.focus();
            }
            else {
                gameStart(carNameInput.value.split(','), Number(countInput.value));
            }
        }
        else {
            alert("잘못된 입력 형식입니다. 1 이상의 정수를 입력해주세요.");
            countInput.value = '';
            countInput.focus();
        }
    }
});
