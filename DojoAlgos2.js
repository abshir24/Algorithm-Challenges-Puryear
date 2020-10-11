// Setting and Swapping
var myNumber = 42; var myName = "Abshir"; myName = myNumber

// Print -52 to 1066

// for (let i = -52; i <= 1066; i++) {
//     console.log(i)
// }

// Don't Worry,Be Happy
function beCheerful() {
    let count = 1
    for (let i = 1; i < 98; i++) {
        console.log("good morning!")
        count++
    }

    console.log(count)
}

// beCheerful()

// Multipules of Three - but Not All
// for (let i = -300; i < 0; i++) {
//     if (i % 3 == 0 && (i != -3 && i != -6)) {
//         console.log(i)
//     }
// }

// Printing Integerws with While
// let count = 2000

// while (count <= 5280) {
//     console.log(count)
//     count++
// }

// You Say it's your Birthday

// function itsYourBirthday(month, day) {
//     if (month == 9 && day == 5) {
//         console.log("How did you know?")
//     } else {
//         console.log("Just another Day")
//     }
// }

// itsYourBirthday(9, 3)

// Leap Year

function leapYearCheck(year) {
    if (year % 4 === 0) {
        if (year % 100 !== 0) {
            return "Leap Year"
        } else {

            if (year % 400 === 0) {
                return "Leap Year"
            }
            return "Not a leap year"
        }

    }

    return "Not a leap year"
}

// console.log(leapYearCheck(800))

// Print and Count
function printAndCount() {
    let count = 0
    for (let i = 512; i <= 4096; i++) {
        if (i % 5 == 0) {
            count++
            console.log(i)
        }
    }

    console.log(`There were ${count} multiples of 5`)
}

// printAndCount()

// Multiples of Six
function multiplesOfSix() {
    let count = 6
    while (count <= 60000) {
        if (count % 6 == 0) {
            console.log(count)
        }
        count++
    }
}

// multiplesOfSix()

// Counting, the Dojo Way
function dojoWay() {
    for (let i = 1; i <= 100; i++) {
        if (i % 5 == 0) {
            console.log("Coding")
        }
        if (i % 10 == 0) {
            console.log("Dojo")
        }
    }
}
// dojoWay()

// What Do You Know?
function know(incoming) {
    console.log(incoming)
}

// Whoa, That Sucker's Huge...
function addOddsRange() {
    let sum = 0
    for (let i = -300000; i <= 300000; i++) {
        if (i % 2 != 0) {
            console.log(i)
            sum += i
        }
    }

    console.log(sum)
}

// addOddsRange()

// Countdown By Fours
function countDownByFours() {
    let count = 2016
    while (count > 0) {
        console.log(count)
        count -= 4
    }
}

// countDownByFours()

// Flexible Countdown
function flexCount(lowNum, highNum, mult) {
    for (let i = highNum; i >= lowNum; i--) {
        if (i % mult == 0) {
            console.log(i)
        }
    }
}

// flexCount(2, 9, 3)

// The Final Countdown
function finalCountdown(param1, param2, param3, param4) {
    for (let i = param2; i <= param3; i++) {
        if (i % param1 == 0 && i != param4) {
            console.log(i)
        }
    }
}


// finalCountdown(3, 5, 17, 9)