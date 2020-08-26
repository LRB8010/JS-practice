console.log("Hello World!")

let reverseString = (string) => {
    let a = string.split("").reverse().join("")
    return a
    
}
reverseString("racecar")

//First time

let isAPalindrome = (word) => {
    {word === reverseString(word) ? console.log("This is a palindrome") : console.log("This is not a palindrome")}
}
isAPalindrome("dad")

let johnAge = 10

let ageCategory = (age) => {
    if(age <= 12){
        console.log("This is a child")
    } else if(age > 13 && age <= 19){
        console.log("This is a teenager")
    } else if(age >= 20 && age <= 25){
        console.log("This is a young adult")
    } else{
        console.log("This is an Adult")
    }
}
ageCategory(johnAge)

let ageCategorySwitch = (age) => {
    switch (true){
        case age <= 12:
            console.log("Child");
            break;
        case age > 13 && age <= 19:
            console.log("Teen");
            break;
        case age > 20 && age <= 25:
            console.log("Young Adult");
            break;
        default:
            console.log("Adult")
    }
}
ageCategorySwitch(johnAge)

let ageCategoryTernary = (age) => {
    {age <= 12 ? console.log("C")
    : age >= 13 && age <=19 ? console.log("T")
    : age >=20 && age <= 25 ? console.log("YA") 
    : console.log("A")}
}

ageCategoryTernary(johnAge)

let number = []
let i = 1
while(i <= 1000){
number.push(i)
i++
}

let p1 = document.querySelector("#P1")
let p2 = document.querySelector("#P2")
let W = document.querySelector("#Winner")
let P1W = document.querySelector("#P1w")
let P2W = document.querySelector("#P2w")



document.querySelector("#random").addEventListener("click",() => {
let a = Math.floor(Math.random() * 1000); 
let b =  Math.floor(Math.random() * 1000); 
p1.innerText = a
p2.innerText = b
if(a > b){
    W.innerText = "<="
    P1W.innerText++
} else{
    W.innerText = "=>"
    P2W.innerText++
}
})


console.log(number, i)
