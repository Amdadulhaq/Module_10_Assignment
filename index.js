
//Calulates two aruguments and return difference
function calculateDifference(a, b) {

    return a - b;
}


console.log(calculateDifference(25, 2));
console.log(calculateDifference(23, 25));

//Return true if number is Odd else False
function isOdd(a){
    if (a % 2 !==0) {
        return true;
    }
    else{
        return false;
    }
}

console.log(isOdd(3));

//Returning smallest number from array
function findMin(arr){
    let smallest= arr[0];
    for (let i=1; i<arr.length; i++)
        
        if(arr[i] < smallest){
            smallest = arr[i];
        }
        return smallest;
}


const numbers = [6,5,3,8,9,4];
console.log(`The smallest number in the array is: ${findMin(numbers)}`);


// Finds even number from an array

function filterEvenNumbers(array2) {
    return array2.filter(num => num % 2 === 0);
}

const num = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`Even numbers from the array are: ${filterEvenNumbers(num)}`);


// Descending sorted array
function sortArrayDescending(z) {
    const sortedArray = z.slice().sort((a, b) => b - a);
    return sortedArray; 
}

const result = [5, 3, 8, 1, 2];
console.log(sortArrayDescending(result)); 
console.log(result);                      


// Lower case first letter string
function lowercaseFirstLetter(str) {
    if (!str) return str; 
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("HELLO"));

// Leap Year 
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2020));










