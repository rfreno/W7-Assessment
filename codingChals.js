// BigO(n^2) - the dreaded double-for-loop. whoops.
// 1 - Sum Zero
const addToZero = array => {
    let zero = false

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === 0) {
            zero = true
        }
        }
    }

    return zero
}

// console.log(addToZero([1]))
// console.log(addToZero([1, 2, 3]))
// console.log(addToZero([1, 2, 3, -2]))

// BigO(n^2) - the dreaded double-for-loop. whoops.
// 2 - Unique Characters
function hasUnique(str) {
    for (let i = 0; i < str.length; i++){
      for (let j = i + 1; j < str.length; j++ ){
        if (str[i] == str[j]){
          return false
        }
      }
    }
    return true;
  }
  
// console.log(hasUnique('Monday'))
// console.log(hasUnique('Moonday'))

// BigO(n) - reduced to n even though several loops are run - they aren't nested!
// 3 - Pangram Sentence
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const isPangram = word => {
    let pangram = false

    // if string is shorter than the alphabet length, it won't meet the criteria
    if (word.length < 26) {
        return pangram
    }

    // remove duplicates in string for easier checking
    let unique = ''
  
    for (let i = 0; i < word.length; i++) {
      if (!unique.includes(word[i])) {
        unique = unique + word[i]
      }
    }
    word = unique.toLowerCase()

    // check string against alphabet array
    for (let i = 0; i < word.length; i++) {
        if (alphabet.includes(word[i])) {
            alphabet.splice(alphabet.indexOf(word[i]), 1)
        }
    }
    if (alphabet.length === 0) {
        pangram = true
    }
    return pangram
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// console.log(isPangram("I like cats, but not mice"))

// BigO(n) - depends on length of the given array
// 4 - LongestWord
const findLongestWord = array => {
    let longestLength = 0

    array.forEach(word => {
        if (word.length > longestLength) {
            longestLength = word.length
        }
    })

    return longestLength
}

// console.log(findLongestWord(['hi','hello','nothankyou']))