// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
describe("removeFirstShuffle", () => {
  const expected = ["yellow", "blue", "pink", "green"]
  const expected2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
  it("removes the first item from the array and shuffles the remaining content", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = [
      "chartreuse",
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron"
    ]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    expect(removeFirstShuffle(colors1).toEqual(expect.arrayContaining(expected)))
    expect(removeFirstShuffle(colors2).toEqual(expect.arrayContaining(expected2)))
  })
})
// // b) Create the function that makes the test pass.

// // Pseudo code:
// // create a function that takes in an array 
const removeFirstShuffle = (array) => {          //create a function that takes in an array 
  array.shift()                                  // removes the first element 
  return array.sort(() => Math.random() - 0.5);  // shuffle the array
}





// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe("tallyCount", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31
    expect(tallyCount(votes1)).toEqual((11))  
    expect(tallyCount(votes2)).toEqual((-31))
  })
}) 
// // b) Create the function that makes the test pass.

// // Pseudo code:
//create a fucntion named tallyCount that takes in count
const tallyCount = (count) => {
//return .upVotes - .downVotes to get the total votes 
  return count.upVotes - count.downVotes
}

// // --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// // a) Create a test with an expect statement using the variables provided.

describe("noDuplicateValue", () => {
  it("returns one array with no duplicate values.", () => {

    const dataTypey1sArra = ["array", "object", "number", "string", "Boolean"]
    const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

expect(noDuplicateValue(dataTypey1sArra, dataTypesArray2)).toEqual((["array", "object", "number", "string", "Boolean", "null", "undefined"]))

  })
}) 
// // // b) Create the function that makes the test pass.

// // // Pseudo code:

const noDuplicateValue = (array1, array2) => { // create a funtion that takes 2 arrays
  let newArray = []                            // create an empty array
  for(let i = 0; i < array1.length; i++) {     //iterate first array
    if(newArray.indexOf(array1[i]) === -1) {   // check if the element is present in newArray
      newArray.push(array1[i])                  // push to newArray 
    }
  }
  for(let i = 0; i < array2.length; i++) {      //iterate second array 
    if(newArray.indexOf(array2[i]) === -1) {    // check if element is present in newArray 
      newArray.push(array2[i])                  // push to newArray
    }
  }
  return newArray
}
