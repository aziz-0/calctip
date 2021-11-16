const billInput = document.getElementById("bill-input")
const peopleInput = document.getElementById("people-input")
const tip5 = document.getElementById("tip-5")
const tip10 = document.getElementById("tip-10")
const tip15 = document.getElementById("tip-15")
const tip25 = document.getElementById("tip-25")
const tip50 = document.getElementById("tip-50")
const customTip = document.getElementById("custom-tip")
const tipRes = document.getElementById("person-tip")
const totalRes = document.getElementById("person-total")
const reset = document.getElementById("reset-values")
const error = document.createElement('span')
const label = document.getElementById('_label')
let tipPercent = 0, bill = 0, people = 0

const inputAcceptNumOnly = (e) =>{
    const value = /[0.0-9.0]/i.test(e.key)
    if (value === false){
        e.preventDefault();
    }
}
const NumberOfPeople = (e)=>{
    if (e.target.value[0] ==="0"){
        peopleInput.style.outlineColor = "red"
        error.style.fontWeight = "bold"
        error.style.color = "red"
        error.style.float = "right"
        error.innerHTML = "Can't be zero";
        label.appendChild(error)
    }else{
        peopleInput.style.outlineColor = "hsl(172, 67%, 45%)"
        error.remove();
        people = Number(e.target.value)
        finalRes()
    }
    
}
const billPrice = (e)=>{
    bill = Number(e.target.value)
    finalRes()
}

const tip = (e) =>{
    tipPercent = Number(e.target.name);
    console.log(tipPercent)
        finalRes()
}

const custom = (e) => {
    tipPercent = Number(e.target.value);    
        finalRes()
    
}


const finalRes = () => {
    if(people && tipPercent && bill){
        const finalTip = bill * tipPercent / 100 / people
        const finalBill = (bill * tipPercent / 100) + bill / people
        tipRes.innerHTML = "$" + finalTip.toFixed(2)
        totalRes.innerHTML = "$" + finalBill.toFixed(2)
    }
}

billInput.addEventListener('keypress', inputAcceptNumOnly)
peopleInput.addEventListener("keypress", inputAcceptNumOnly)
peopleInput.addEventListener("input", NumberOfPeople)
billInput.addEventListener("input", billPrice)
customTip.addEventListener("keypress", inputAcceptNumOnly)
customTip.addEventListener('input', custom)
tip5.addEventListener('click', tip)
tip10.addEventListener('click', tip)
tip15.addEventListener('click', tip)
tip25.addEventListener('click', tip)
tip50.addEventListener('click', tip)
reset.addEventListener('click', ()=>location.reload())