const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#cash-given")
const checkBtn = document.querySelector("#check-btn")
const outputChange = document.querySelectorAll(".return-change")
const message = document.querySelector(".error-msg")
const retuenAmountValue = document.querySelector(".total-return-amount-value")
const containerTwo = document.querySelector(".container-2")
const confirmBtn = document.querySelector(".confirm-btn")
const containerOneB = document.querySelector(".cash-section")

const notesAmount = [2000, 500, 100, 20, 10, 5, 1]


function calcAmount(showBalance) {

    for (let i = 0; i < notesAmount.length; i++) {
        let viewBalance = Math.trunc(showBalance / notesAmount[i])
        showBalance %= notesAmount[i]
        outputChange[i].innerText = viewBalance
    }
}


checkBtn.addEventListener("click", function () {
    hideMsg()
    if (Number(billAmount.value) > 0) {

        let cashAmount = Number(cashGiven.value)
        let billValue = Number(billAmount.value)

        if (cashAmount >= billValue) {
            containerTwo.style.display = "block"
            let showBalance = cashGiven.value - billAmount.value
            retuenAmountValue.innerText = `₹  ${showBalance}`
            calcAmount(showBalance)

        } else{

            showMsg("Do you wanna plate wash")
        }
    }
})


function hideMsg() {
    message.style.display = "none"
}

function showMsg(msg) {
    message.style.display = "block";
    message.innerText = msg

}

confirmBtn.addEventListener("click", function () {
    console.log(Number(billAmount.value))
    if((!Number(billAmount.value)) || (Number(billAmount.value) < 0)){
        showMsg("Incorrect amount ")
    }else{
        hideMsg()
        containerOneB.style.display = "block"
    }
})

















