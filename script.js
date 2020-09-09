console.log("Hello World!")

let reverseString = (string) => {
    let a = string.toLowerCase().replace(/[^\w]/gi, "").split("").reverse().join("")
    return a
    
}

let reverseString2 = (str) => {
    reversed = ""
    for(let char of str){
        reversed = char + reversed;
    }
    console.log(reversed)
}
reverseString2("racecar")

//First time

let isAPalindrome = (word) => {
    a = word.toLowerCase().replace(/[^\w]/gi, "").split("").join("")
    if(a == reverseString(word)){
        return true 
    }else{
        return false
    }
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

let dotz = document.createElement("span")
let dot2z = document.createElement("span")
let dot3z = document.createElement("span")
let dot4z = document.createElement("span")
let dot5z = document.createElement("span")
let dot6z = document.createElement("span")
let column1z = document.createElement("div")
let column2z = document.createElement("div")
let column3z = document.createElement("div")

let dot1 = (x) => {
    let dot = document.createElement("span")
    dot.setAttribute("class","dot")
    x.setAttribute("class","dice first-face")
    x.append(dot)
}

let dotTwo = (x) => {
    let dot = document.createElement("span")
    let dot2 = document.createElement("span")
    dot.setAttribute("class","dot")
    dot2.setAttribute("class","dot")
    x.setAttribute("class","dice second-face")
    x.append(dot,dot2)
}

let dotTree = (x) => {
    let dot = document.createElement("span")
    let dot2 = document.createElement("span")
    let dot3 = document.createElement("span")
    dot.setAttribute("class","dot")
    dot2.setAttribute("class","dot")
    dot3.setAttribute("class","dot")
    x.setAttribute("class","dice third-face")
    x.append(dot,dot2,dot3)
}

let dotFour = (x) => {
    let dot = document.createElement("span")
    let dot2 = document.createElement("span")
    let dot3 = document.createElement("span")
    let dot4 = document.createElement("span")
    let column1 = document.createElement("div")
    let column2 = document.createElement("div")
    column1.setAttribute("class","column")
    column2.setAttribute("class","column")
    dot.setAttribute("class","dot")
    dot2.setAttribute("class","dot")
    dot3.setAttribute("class","dot")
    dot4.setAttribute("class","dot")
    x.setAttribute("class","dice fourth-face")
    column1.append(dot,dot2)
    column2.append(dot3,dot4)
    x.append(column1,column2)
}

let dotFive = (x) => {
    let dot = document.createElement("span")
    let dot2 = document.createElement("span")
    let dot3 = document.createElement("span")
    let dot4 = document.createElement("span")
    let dot5 = document.createElement("span")
    let column1 = document.createElement("div")
    let column2 = document.createElement("div")
    let column3 = document.createElement("div")
    column1.setAttribute("class","column")
    column2.setAttribute("class","column")
    column3.setAttribute("class","column")
    dot.setAttribute("class","dot")
    dot2.setAttribute("class","dot")
    dot3.setAttribute("class","dot")
    dot4.setAttribute("class","dot")
    dot5.setAttribute("class","dot")
    x.setAttribute("class","dice fifth-face")
    column1.append(dot,dot2)
    column2.append(dot3)
    column3.append(dot4,dot5)
    x.append(column1,column2,column3)
}

let dotSix = (x) => {
    let dot = document.createElement("span")
    let dot2 = document.createElement("span")
    let dot3 = document.createElement("span")
    let dot4 = document.createElement("span")
    let dot5 = document.createElement("span")
    let dot6 = document.createElement("span")
    let column1 = document.createElement("div")
    let column2 = document.createElement("div")
    column1.setAttribute("class","column")
    column2.setAttribute("class","column")
    dot.setAttribute("class","dot")
    dot2.setAttribute("class","dot")
    dot3.setAttribute("class","dot")
    dot4.setAttribute("class","dot")
    dot5.setAttribute("class","dot")
    dot6.setAttribute("class","dot")
    x.setAttribute("class","dice sixth-face")
    column1.append(dot,dot2,dot3)
    column2.append(dot4,dot5,dot6)
    x.append(column1,column2)
}
document.querySelector("#random").addEventListener("click",() => {
    p1.innerHTML= ""
    p2.innerHTML= ""
let a = Math.floor(Math.random() * 7); 
let b =  Math.floor(Math.random() * 7); 

if(a === 1 || a === 0){
    dot1(p1)  
} else if(a === 2){
    dotTwo(p1)
} else if(a === 3){
    dotTree(p1)
}else if(a === 4){
    dotFour(p1)
}else if(a === 5){
    dotFive(p1)
}else if(a === 6){
    dotSix(p1)
}
if(b === 1 || b === 0){
    dot1(p2)
} else if(b === 2){
    dotTwo(p2)
} else if(b === 3){
    dotTree(p2)
}else if(b === 4){
    dotFour(p2)
}else if(b === 5){
    dotFive(p2)
}else if(b === 6){
    dotSix(p2)
}
if(b === 0 && a === 1 || a === 0 && b === 1){
    W.innerText = "Tie"
    
} else if(b > a){
    W.innerText = "  =>"
    P2W.innerText++
} else if(a>b){
    W.innerText = "<="
    P1W.innerText++
} 
else{ W.innerText = "Tie"}
})

let paliForm = document.querySelector("#palindrome")
let paliAnswer = document.querySelector("#paliAnswer")
paliForm.addEventListener("submit",(e) => {
 e.preventDefault()
 paliAnswer.innerText = ""
 console.log(isAPalindrome(paliForm[0].value))
 if(isAPalindrome(paliForm[0].value) === true){
    paliAnswer.innerText = "This is a palindrome"
 }else{
     paliAnswer.innerText = "This is not a palindrome"
 }

})

let cc = 4556364607935616
let mask = (x) => {


let z = x.toString().split("")
let t = x.toString().split("").length - 4;
let q
for(q = 0; q < t; ){
    z[q] = "#";
    q++;
}
console.log(z.join(""))
}
mask(cc)

let isIsogram = (str) => {
str.toLowerCase().some(x => str.indexOf(x) !== str.lastIndexOf(x))
}

