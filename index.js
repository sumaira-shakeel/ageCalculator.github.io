// const  btnEl = document.getElementById("btn");
// const birtdayEl = document.getElementById("birthday");
// const resultEl = document.getElementById("result");
// function calculateAge(){
//     const birthdayValue = birtdayEl.value;

//     if(birthdayValue === ""){
//         alert("Please enter your bithday date")
//     }else{
//         const age = getAge(birthdayValue);
//         resultEl.innerText = `you  age is ${age}  ${age > 1 ? "years" : "year"} old `
//     }
// }
// function getAge(birthdayValue){
//     const currentDate = new Date();
//     const birthdayDate = new Date(birthdayValue)


//     let age = currentDate.getFullYear() - birthdayDate.getFullYear();
//     const month = currentDate.getMonth() - birthdayDate.getMonth();
//     if(month < 0 || (month === 0  && currentDate.getDate() < birthdayDate.getDate())){
//         age--

//     }
//     return age;



// }
const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge(){
    const birthdayValue = birthdayEl.value;

    if(birthdayValue === ""){
        alert("Please enter your birthday date")
    }else{
        const age = getAge(birthdayValue);
        resultEl.innerText = `You are ${age} ${age > 1 ? "years" : "year"} old.`
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    if(month < 0 || (month === 0  && currentDate.getDate() < birthdayDate.getDate())){
        age--;
    }
    return age;
}

btnEl.addEventListener("click", calculateAge);





btnEl.addEventListener("click",calculateAge);
