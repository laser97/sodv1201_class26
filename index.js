
function message(event){
    event.preventDefault()
    let fullname = document.getElementById("fullname").value
    let result = document.getElementById("result")
    console.log("Hello class again from console" + fullname);
    result.textContent = `Hello ${fullname}`
}
//message();
function checkAge(){
    let age = parseInt(document.getElementById("age").value)
    let result = document.getElementById("result")
    if(age>=18) {
        console.log("You can vote")
        result.textContent = "You can vote"
        if(age<21) {
            console.log("But you can't drink")
            result.textContent += " but you can't drink"
        }else {
            console.log("You can drink")    
        }
    }else {
        console.log("You can't vote")
    }
}

function checkDate(){
    //let day = 7;
    let day = parseInt(document.getElementById("number").value)
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        default:
            console.log("Invalid day");
    }
}


for (let x = 0; x < 10; x++){
    console.log(x)
}

let y = 0;

while(y <= 10){
    console.log(y)
    y++
}

do {
    console.log(y)
    y++
}while(y<=10)