console.log("Hello World")

let reverseString = (string) => {
    let a = string.split("").reverse().join("")
    return a
    
}
reverseString("racecar")

//First time

let isAPalindrome = (word) => {
    {word === reverseString(word) ? console.log("This is a palindrome") : console.log("This is not a palindrome")}
}
isAPalindrome("racecar")

