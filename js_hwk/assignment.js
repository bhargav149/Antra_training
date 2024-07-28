// Q1 ----------------------------------------------------------------------
console.log("\nQ1 ----------------------------------------------------------------------");
function reverseNumber(num) {
    const reversedString = num.toString().split('').reverse().join('');
    return parseInt(reversedString, 10);
}

const q1 = 32243;
console.log(reverseNumber(q1));

// Q2 ----------------------------------------------------------------------
console.log("\nQ2 ----------------------------------------------------------------------");
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(isPalindrome("madam"));


// Q3 ----------------------------------------------------------------------
console.log("\nQ3 ----------------------------------------------------------------------");
function stringCombinations(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
}

console.log(stringCombinations("dog"));

// Q4 ----------------------------------------------------------------------
console.log("\nQ4 ----------------------------------------------------------------------");
function sortString(str) {
    return str.split('').sort().join('');
}

console.log(sortString("webmaster"));

// Q5 ----------------------------------------------------------------------
console.log("\nQ5 ----------------------------------------------------------------------");
function capitalizeWords(str) {
    return str.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

console.log(capitalizeWords("the quick brown fox"));

// Q6 ----------------------------------------------------------------------
console.log("\nQ6 ----------------------------------------------------------------------");
function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord("Web Development Tutorial")); 

// Q7 ----------------------------------------------------------------------
console.log("\nQ7 ----------------------------------------------------------------------");
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}

console.log(countVowels("The quick brown fox"));

// Q8 ----------------------------------------------------------------------
console.log("\nQ8 ----------------------------------------------------------------------");
function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(11)); 
console.log(isPrime(4));

// Q9 ----------------------------------------------------------------------
console.log("\nQ9 ----------------------------------------------------------------------");
function getType(value) {
    return typeof value;
}

console.log(getType({}));
console.log(getType(true));
console.log(getType(function(){}));
console.log(getType(1));
console.log(getType("q9"));     
console.log(getType(undefined));

// Q10 ---------------------------------------------------------------------
console.log("\nQ10 ----------------------------------------------------------------------");
function identityMatrix(n) {
    let matrix = [];

    for (let i = 0; i < n; i++) {
        matrix[i] = []; 
        for (let j = 0; j < n; j++) {
            matrix[i][j] = (i === j) ? 1 : 0; 
        }
    }
    return matrix;
}

console.log(identityMatrix(3));

// Q11 ---------------------------------------------------------------------
console.log("\nQ11 ----------------------------------------------------------------------");
function findSecondLowestAndGreatest(numbers) {
    numbers.sort((a, b) => a - b);
    return [numbers[1], numbers[numbers.length - 2]];
}

const q11 = [1, 2, 3, 4, 5];
console.log(findSecondLowestAndGreatest(q11));

// Q12 ---------------------------------------------------------------------
console.log("\nQ12 ----------------------------------------------------------------------");
function isPerfectNumber(num) {
    let sum = 0;
    
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num;
}

console.log(isPerfectNumber(6)); 
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(496)); 
console.log(isPerfectNumber(8128));
console.log(isPerfectNumber(100)); 

// Q13 ---------------------------------------------------------------------
console.log("\nQ13 ----------------------------------------------------------------------");
function factorsOf(number) {
    let factors = [];

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

console.log(factorsOf(12)); 

// Q14 ---------------------------------------------------------------------
console.log("\nQ14 ----------------------------------------------------------------------");
function amountToCoins(amount, denominations) {
    let result = [];
    let remaining = amount;

    for (let coin of denominations) {
        while (remaining >= coin) {
            result.push(coin);
            remaining -= coin;
        }
        if (remaining === 0) break;
    }

    return result;
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));

// Q15 ---------------------------------------------------------------------
console.log("\nQ15 ----------------------------------------------------------------------");
function calculateExponent(b,n) {

    return b ** n;
}

console.log(calculateExponent(2, 3));

// Q16 ---------------------------------------------------------------------
console.log("\nQ16 ----------------------------------------------------------------------");
function extractUniqueCharacters(str) {
    let seen = new Set();
    let result = [];

    for (let char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result.push(char);
        }
    }
    
    return result.join('');
}

console.log(extractUniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));

// Q17 ---------------------------------------------------------------------
console.log("\nQ17 ----------------------------------------------------------------------");
function countLetterOccurrences(str) {
    let letterCounts = {};

    for (let char of str) {
        if (char.match(/[a-zA-Z]/)) {
            char = char.toLowerCase();

            if (letterCounts[char]) {
                letterCounts[char]++;
            } else {
                letterCounts[char] = 1;
            }
        }
    }

    return letterCounts;
}

console.log(countLetterOccurrences("Hello World"));

// Q18 ---------------------------------------------------------------------
console.log("\nQ18 ----------------------------------------------------------------------");
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;  
        } else {
            right = mid - 1;  
        }
    }

    return -1;  
}

const q18 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(q18, 4));  

// Q19 ---------------------------------------------------------------------
console.log("\nQ19 ----------------------------------------------------------------------");
function elementsLargerThan(array, number) {
    return array.filter(element => element > number);
}

// Example usage:
const q19 = [1, 23, 45, 34, 7, 12, 8, 4];
console.log(elementsLargerThan(q19, 10));

// Q20 ---------------------------------------------------------------------
console.log("\nQ20 ----------------------------------------------------------------------");
function generateRandomId(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    return result;
}

console.log(generateRandomId(10)); 

// Q21 ---------------------------------------------------------------------
console.log("\nQ21 ----------------------------------------------------------------------");
function getCombinations(array, subsetLength) {
    let results = [];

    function backtrack(start, path) {
        // When the path length equals the subsetLength, record a copy of the path
        if (path.length === subsetLength) {
            results.push(Array.from(path));
            return;
        }
        
        for (let i = start; i < array.length; i++) {
            path.push(array[i]);
            backtrack(i + 1, path); // Move on to the next element
            path.pop(); // Backtrack to explore next potential element
        }
    }

    backtrack(0, []);
    return results;
}

const q21 = [1, 2, 3];
const q21Length = 2;
console.log(getCombinations(q21, q21Length));

// Q22 ---------------------------------------------------------------------
console.log("\nQ22 ----------------------------------------------------------------------");
function countLetter(str, letter) {
    let count = 0;

    for (let char of str) {
        if (char === letter) {
            count++;
        }
    }

    return count;
}

const q22String = 'microsoft.com';
const q22Letter = 'o';
console.log(countLetter(q22String, q22Letter));

// Q23 ---------------------------------------------------------------------
console.log("\nQ23 ----------------------------------------------------------------------");
function firstNonRepeatedCharacter(str) {
    let charCount = {};

    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // Return null if no unique character is found
}

const q23 = 'abacddbec';
console.log(firstNonRepeatedCharacter(q23)); 

// Q24 ---------------------------------------------------------------------
console.log("\nQ24 ----------------------------------------------------------------------");
function bubbleSort(array) {
    let n = array.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
        n--;
    } while (swapped);

    return array;
}

// Q25 ---------------------------------------------------------------------
console.log("\nQ25 ----------------------------------------------------------------------");
function longestCountryName(countryNames) {
    let longestName = '';

    for (let name of countryNames) {
        if (name.length > longestName.length) {
            longestName = name;
        }
    }

    return longestName;
}

const q25 = ["Australia", "Germany", "United States of America"];
console.log(longestCountryName(q25));

// Q26 ---------------------------------------------------------------------
console.log("\nQ26 ----------------------------------------------------------------------");
function longestSubstringWithoutRepeating(s) {
    let seenChars = new Map();
    let start = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (seenChars.has(char) && seenChars.get(char) >= start) {
            start = seenChars.get(char) + 1;
        }

        seenChars.set(char, i);
        maxLength = Math.max(maxLength, i - start + 1); 
    }

    return maxLength;
}

console.log(longestSubstringWithoutRepeating("abcabcbb")); 

// Q27 ---------------------------------------------------------------------
console.log("\nQ27 ----------------------------------------------------------------------");
function longestPalindrome(s) {
    if (s.length < 1 || s == null) return "";

    let start = 0;
    let end = 0;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1; // length of the palindrome
    }

    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(i, i);       // Odd length palindromes
        let len2 = expandAroundCenter(i, i + 1);   // Even length palindromes
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - ((len - 1) >> 1);
            end = i + (len >> 1);
        }
    }

    return s.substring(start, end + 1);
}

console.log(longestPalindrome("bananas")); 

// Q28 ---------------------------------------------------------------------
console.log("\nQ28 ----------------------------------------------------------------------");
function processNumber(number, operation) {
    return operation(number);
}

function square(number) {
    return number * number;
}

const number = 2;

console.log(processNumber(number, square));

// Q29 ---------------------------------------------------------------------
console.log("\nQ29 ----------------------------------------------------------------------");
function getFunctionName(func) {
    return func.name;
}

function helloFunction() {}

console.log(getFunctionName(helloFunction));