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