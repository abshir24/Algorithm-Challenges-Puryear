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

// Countdown 

function countdown(number) {
    let array = []

    for (let i = number; i >= 0; i--) {
        array.push(i)
    }

    return array
}

// console.log(countdown(5))

// Print and Return

function printAndReturn(arr) {
    console.log(arr[0])
    return arr[1]
}

// First Plus Length

function firstPlusLength(arr) {
    return typeof (arr[0]) == "string" ? "Not a number" : arr[0] + arr.length
}

// console.log(firstPlusLength(["Yo", 2]))

// Values Greater than Second

function valuesGreaterThanSecond(arr) {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] > arr[1]) console.log(arr[i])
}

// valuesGreaterThanSecond([1, 3, 5, 7, 9, 13])

// Values Greater than Second Generalized

function valuesGreaterThanSecondGeneralized(arr) {
    let array = []

    for (let i = 0; i < arr.length; i++)
        if (arr[i] > arr[1]) array.push(arr[i])

    return array
}

// This Length, That Value

function thisLengthThatValue(num1, num2) {
    if (num1 === num2) console.log("Jinx!")

    let array = []

    for (let i = 1; i <= num1; i++) {
        array.push(num2)
    }

    return array
}

// console.log(thisLengthThatValue(4, 2))

// Fit the First Value

function fitTheFirstValue(arr) {
    switch (true) {
        case (arr[0] > arr.length):
            console.log("Too big!")
            break;
        case (arr[0] < arr.length):
            console.log("Too small!")
            break;
        default:
            console.log("Just right!")
    }
}

// fitTheFirstValue([4, 2, 3, 4])

// Farenhiet to Celcius
function farenhietToCelcius(degree) {
    return ((degree - 32) * 5 / 9)
}

// console.log(farenhietToCelcius(32))

// Celcius to Farenhiet
function celciusToFarenhiet(degree) {
    return ((9 / 5 * degree) + 32)
}

// console.log(celciusToFarenhiet(0))

// Biggie Size

function biggieSize(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) arr[i] = "big"
    }

    return arr
}

// console.log(biggieSize([-1, 3, 5, -5]))

// Previous Lengths

function previousLengths(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] = arr[i - 1].length
    }

    return arr
}

// console.log(previousLengths(["yo", "yo", "yo", "yo"]))

// Print Low, Return High
function printLowReturnHigh(arr) {
    let max = arr[0], min = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]
        if (arr[i] < min) min = arr[i]
    }

    console.log(min)

    return max
}

// console.log(printLowReturnHigh([-1, 3, 5, -5]))

// Add Seven to Most

function addSevenToMost(arr) {
    let newArr = []

    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i] + 7)
    }

    return newArr
}

// console.log(addSevenToMost([1, 2, 3, 4, 5]))

// Print One, Return Another

function printOneReturnAnother(arr) {
    console.log(arr[arr.length - 2])
    for (let i = 0; i < arr.length; i++)
        if (arr[i] % 2 == 1) return arr[i]

    return "No odd values"
}

// console.log(printOneReturnAnother([1, 2, 3, 4, 5]))

// Reverse Array

function reverseArray(arr) {
    let start = 0, end = arr.length - 1

    while (start < end) {
        temp = arr[start]
        arr[start++] = arr[end]
        arr[end--] = temp
    }

    return arr
}

// console.log(reverseArray([1, 2, 3, 4, 5]))

// Double Vision

function doubleVision(arr) {
    let newArray = []

    for (let i = 0; i < arr.length; i++) newArray.push(arr[i] * 2)

    return newArray
}

// console.log(doubleVision([1, 2, 3]))

// Outlook: Negative

function outlookNegative(arr) {
    let newArr = [], num;

    for (let i = 0; i < arr.length; i++) {
        num = arr[i] < 0 ? arr[i] : arr[i] - (arr[i] * 2)
        newArr.push(num)
    }

    return newArr
}

// console.log(outlookNegative([1, -3, 5]))

// Count Positives 
function countPositives(arr) {
    let positives = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) positives++
    }

    arr[arr.length - 1] = positives

    console.log(arr)
}

// countPositives([-1, 1, 1, 1])

// Always Hungry

function alwaysHungry(arr) {
    let hungry = true

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            console.log("yummy")
            hungry = false
        }
    }

    return hungry ? "I'm hungry" : ""
}

// console.log(alwaysHungry(["", ""]))

// Evens and Odds

function evensAndOdds(arr) {
    let evens = 0, odds = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evens++
            if (evens === 3) {
                console.log("Even more so!")
                evens = 0
            }
        }

        if (arr[i] % 2 == 1) {
            odds++
            if (odds === 3) {
                console.log("That's odd!")
                odds = 0
            }
        }
    }
}

// evensAndOdds([1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2])

// Swap helper function
function swap(arr, start, end) {
    temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
}

// Swap Toward the Center
function swapTowardCenter(arr) {
    if (arr.length > 1) {
        swap(arr, 0, arr.length - 1)
        if (arr.length > 5)
            swap(arr, 2, arr.length - 3)
    }

    return arr
}

// console.log(swapTowardCenter([1, 2, 3, 4, 5, 6]))

// Scale the Array
function scaleTheArray(arr, num) {
    for (let i = 0; i < arr.length; i++)
        arr[i] = arr[i] * num

    return arr
}

// console.log(scaleTheArray([2, 2, 2, 2, 2], 2))

// Only Keep the Last Few
function onlyKeepTheLastFew(arr, start) {
    let newArr = []

    for (let i = arr.length - start; i < arr.length; i++)
        newArr.push(arr[i])

    return newArr
}

// console.log(onlyKeepTheLastFew([2, 4, 6, 8, 10], 3))

// Math Help
function mathHelp(m, b) {
    return (-b / m)
}

// console.log(mathHelp(3, 12))

// Poor Kenny

function whatHappensToday() {
    let event = Math.random() * 100

    switch (true) {
        case (event < 10):
            console.log("Volcano Eruption")
            break;
        case (event < 15):
            console.log("Tsunami!")
            break;
        case (event < 20):
            console.log("Earthquake!")
            break;
        case (event < 25):
            console.log("Blizzard! brrr")
            break;
        case (event < 30):
            console.log("Meteor! The sky is falling!")
            break;
        default:
            break;
    }
}

// whatHappensToday()

// Soaring IQ
function soaringIQ(baseIq) {
    for (let i = 1; i <= 98; i++)
        baseIq += (i * .01)

    return baseIq
}

// console.log(soaringIQ(101))

// Letter Grade

function letterGrade(grade) {
    switch (true) {
        case (grade >= 90):
            console.log('A')
            break;
        case (grade >= 80 && grade <= 89):
            console.log('B')
            break;
        case (grade >= 70 && grade <= 79):
            console.log('C')
            break;
        case (grade >= 60 && grade <= 69):
            console.log('D')
            break;
        default:
            console.log('F')
            break;
    }
}

// letterGrade(99)

// More Accurate Grades
function moreAccurateGrades(grade) {
    switch (true) {
        case (grade >= 98):
            console.log('A+')
            break;
        case (grade >= 93 && grade <= 97):
            console.log('A')
            break;
        case (grade >= 90 && grade <= 92):
            console.log('A-')
            break;
        case (grade >= 88):
            console.log('B+')
            break;
        case (grade >= 83 && grade <= 87):
            console.log('B')
            break;
        case (grade >= 80 && grade <= 82):
            console.log('B-')
            break;
        case (grade >= 78):
            console.log('C+')
            break;
        case (grade >= 73 && grade <= 77):
            console.log('C')
            break;
        case (grade >= 70 && grade <= 72):
            console.log('C-')
            break;
        case (grade >= 68):
            console.log('D+')
            break;
        case (grade >= 63 && grade <= 67):
            console.log('D')
            break;
        case (grade >= 60 && grade <= 62):
            console.log('D-')
            break;
        default:
            console.log('F')
            break;
    }
}

// moreAccurateGrades(92)

// Print 1-255

// for (let i = 1; i < 256; i++) {
//     console.log(i)
// }

// Print Odds 1-255
// for (let i = 1; i < 256; i++) {
//     if (i % 2 == 1)
//         console.log(i)
// }

// Print Ints and Sum 0-255
function printIntsAndSum() {
    let sum = 0;

    for (let i = 0; i < 255; i++) {
        sum += i
        console.log("Sum so far ", sum)
    }
}

// printIntsAndSum()

// Iterate and Print Array

function iterateAndPrintArr(arr) {
    for (let i = 0; i < arr.length; i++)
        console.log(arr[i])
}

// iterateAndPrintArr([1, 2, 3, 4, 5])

// Find and Print Max

function findAndPrintMax(arr) {
    let max = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]
    }

    console.log("Max Value is ", max)
}

// findAndPrintMax([1, 2, 3, 4, 5,])

// Get and Print Average
function getAndPrintAverage(arr) {
    let sum = 0

    for (let i = 0; i < arr.length; i++)sum += arr[i]

    console.log("The average is ", sum / arr.length)
}

// getAndPrintAverage([1, 2, 3, 4, 5])

// Array with Odds
function arrayWithOdds() {
    let arr = []

    for (let i = 1; i < 256; i++) {
        if (i % 2 == 1)
            arr.push(i)
    }

    console.log(arr)
}

// arrayWithOdds()

// Square the Values

function squareTheValues(arr) {
    for (let i = 0; i < arr.length; i++)
        arr[i] = arr[i] * arr[i]


}

// let test = [1, 2, 3, 4, 5]

// squareTheValues(test) Arrays in JS are pass by reference. 

// console.log(test)

// Greater than Y
function greaterThanY(arr, y) {
    let count = 0
    for (let i = 0; i < arr.length; i++)
        if (arr[i] > y) count++

    console.log(count)
}

// greaterThanY([1, 2, 3, 4, 5], 2)

// Zero Out Negative Numbers
function zeroOutNegativeNumbers(arr) {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] < 0) arr[i] = 0

    return arr
}

// console.log(zeroOutNegativeNumbers([-1, -2, -3, -4, -5]))

// Max, Min, Average

function maxMinAverage(arr) {
    let max = arr[0], min = arr[0], sum = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]
        if (arr[i] < min) min = arr[i]
        sum += arr[i]
    }
    console.log("MAX,MIN,AVG", max, min, (sum / arr.length))
}

// maxMinAverage([2, 3, 1, 4, 5])

// Shift Array Values

function shiftArrayValues(arr) {
    for (let i = 0; i < arr.length - 1; i++)arr[i] = arr[i + 1]

    arr[arr.length - 1] = 0

    console.log(arr)
}

// shiftArrayValues([1, 2, 3, 4, 5])

// Swap String For Array Negative Values
function swapStringForArrayNegativeValues(arr) {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] < 0) arr[i] = 'Dojo'

    return arr
}

// console.log(swapStringForArrayNegativeValues([-1, -2, -3, -4, -5]))

// Sigma 

function sigma(num) {
    let sum = 0

    for (let i = 1; i <= num; i++)sum += i

    return sum
}

// console.log(sigma(5))

// Factorial 
function factorial(num) {
    let factor = 1

    for (let i = 1; i <= num; i++)factor *= i

    return factor
}

// console.log(factorial(5))

// Star Art

function drawLeftStars(num) {
    let stars = ''

    for (let i = 1; i <= 75; i++) {
        if (i <= num) stars += '*'
        else stars += '-'
    }

    console.log(stars)
}

function drawRightStars(num) {
    let stars = ''

    for (let i = 1; i <= 75; i++) {
        if (i <= 75 - num) stars += '-'
        else stars += '*'
    }

    console.log(stars)
}

function drawCenterStars(num) {
    let stars = '', emptySpace = (75 - num) / 2
    for (let i = 1; i <= emptySpace; i++) stars += '-'
    for (let i = 1; i <= num; i++) stars += '*'
    for (let i = 1; i <= emptySpace; i++) stars += '-'
    console.log(stars)
}

// drawLeftStars(50)
// drawCenterStars(50)
// drawRightStars(50)


// Character Art

function drawLeftChars(num,char) {
    let chars = ''

    for (let i = 1; i <= 75; i++) {
        if (i <= num) chars += char
        else chars += '-'
    }

    console.log(chars)
}

function drawRightChars(num,char) {
    let chars = ''

    for (let i = 1; i <= 75; i++) {
        if (i <= 75 - num) chars += '-'
        else chars += char
    }

    console.log(chars)
}

function drawCenterChars(num,char) {
    let chars = '', emptySpace = (75 - num) / 2
    for (let i = 1; i <= emptySpace; i++) chars += '-'
    for (let i = 1; i <= num; i++) chars += char
    for (let i = 1; i <= emptySpace; i++) chars += '-'
    console.log(chars)
}

drawLeftChars(50,"-")
drawCenterChars(50,"*")
drawRightChars(50,"&")