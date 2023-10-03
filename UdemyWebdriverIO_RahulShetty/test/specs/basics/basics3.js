var marks = Array(6)
var marks = new Array(20, 40, 35, 12, 37, 100)

var marks = [20, 40, 35, 12, 37, 100]
let subMarks = marks.slice(2, 5)
console.log(subMarks)

console.log(marks[2]) //35
marks[3] = 14
console.log(marks) //[20,40,35,14,37,100]
console.log(marks.length) //6
marks.push(65)   //appends element at the end and returns the new length
console.log(marks) //[20,40,35,14,37,100,65]
marks.pop()  //Removes the last element from an array and returns it
marks.unshift(12)   //appends the element at the begining of array
console.log(marks)
console.log(marks.indexOf(100)) //returns the index of element
//120 in the array
console.log(marks.includes(120)) //checks if array contains/has 120 element
var sum = 0
for (let i = 0; i < marks.length; i++) {
    //console.log(marks[i])
    sum = sum + marks[i] //32+40
}
console.log(sum)
//reduce filter map (reduce() to be used when we are accumulating some values)
let total = marks.reduce((sum, mark) => sum + mark, 0)
console.log(total)


var scores = [12, 13, 14, 16]
//create new array with even numbers of scores and multiply each value
// with 3 and sum themarray [12,14,16]
var evenScores = []
for (let i = 0; i < scores.length; i++) {

    if (scores[i] % 2 == 0) {
        evenScores.push(scores[i])
    }
}
console.log(evenScores)

//if we are filtering array based on certain conditions then we can use filter()
let newFilterEvenScores = scores.filter(score => score % 2 == 0)
console.log(newFilterEvenScores) //[ 12, 14, 16 ]=>[36,42,48]

//map function= is used to map new value in real time
let mappedArray = newFilterEvenScores.map(score => score * 3)
console.log(mappedArray)
let totalVal = mappedArray.reduce((sum, val) => sum + val, 0)
console.log(totalVal)


var scores1 = [12, 13, 14, 16]

let sumValue = scores1.filter(score => score % 2 == 0).map(score => score * 3).reduce((sum, val) => sum + val, 0)
console.log(sumValue)
let fruits = ["banana", "mango", "pomegrante", "apple"]

console.log(fruits.sort())  //sorting an string array
console.log(fruits.reverse())  //reversing an string array


var scores1 = [12, 3, 19, 16, 14] //9
// console.log(scores1.sort())
// scores1.sort(function(a,b){
//     return a-b
// })

console.log(scores1.sort((a, b) => b - a))






























