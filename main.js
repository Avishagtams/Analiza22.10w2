//PART1

function extractNumbers(arr) {
    try{
    if(!Array.isArray(arr)){
        throw new Error("the value must be array");
    }
    return arr.filter(i=> typeof i == "number" && !Number.isNaN(i))
    }
    catch(error){
        console.error(error.message);
        return 0;
    }
}

console.log("--------PART1--------");
console.log(extractNumbers([1, "hi", 5])); 
console.log(extractNumbers("bad"))

//PART2

function sumNumbersSafe(arr) {
    try {
        const validNumbers = extractNumbers(arr);
        
        return validNumbers.reduce((sum, num) => sum + num, 0);

    } catch (error) {
        return 0;
    }
}
console.log("--------PART2--------")
console.log(sumNumbersSafe([2, 4, "bad"])); 
console.log(sumNumbersSafe("fail"));        
//PART3


function filterLargeSums(arrList, minTotal) {
    if (!Array.isArray(arrList)) {
        return [];
    }

    return arrList.filter(i => {
        const sum = sumNumbersSafe(i); 
        return sum >= minTotal;
    });
}
console.log("--------PART3--------");

const input = [[1, 2, 3], [10, "bad", 5], "fail"];

console.log(filterLargeSums(input, 7)); 

//PART4

function summaryStats(arrList) {
    const filteredArrays = filterLargeSums(arrList, 10);
    return filteredArrays.map(subArr => {
        const sum = sumNumbersSafe(subArr);
        const validNumbers = extractNumbers(subArr); 
        let average=0;
        if(validNumbers.length > 0){
            average = sum / validNumbers.length;
        }
        return { sum, average };
    });
}

console.log("--------PART4--------")

const inputData = [[1, 2, 3], [5, 5, 5], [100], "bad"];//sum 10
console.log(summaryStats(inputData));

//PART5

function safeCalculator(a, b, operation) {
    try {
        if (typeof a !== typeof b) {
            throw new Error(`${a} is ${typeof a} but ${b} is ${typeof b}`);
        }

        switch (operation) {
            case "add":
                return a + b;
            case "sub":
                return a - b;
            case "multi":
                return a * b;
            case "div":
                if (b === 0) {
                    throw new Error("Division by zero is not allowed");
                }
                return a / b;
            default:
                throw new Error(`Invalid operation: ${operation}`);
        }

    } catch (error) {
        console.warn(error.message);
        return 0; 
    }
}

console.log("--------PART5--------")
console.log(safeCalculator(10, 5, "add"));      
console.log(safeCalculator(10, 2, "div")); 
console.log(safeCalculator(10, 3, "sub"));      
console.log(safeCalculator(10, 5, "multi"));      
console.log(safeCalculator(10, "5", "add"));     
console.log(safeCalculator(10, 0, "div"));    

