/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    var maxi = -1000000;
    for(var i=0; i<numbers.length; i++)
    {
        if(maxi < numbers[i])
        maxi = numbers[i];
    }
    if(numbers.length == 0)
    return undefined;
    return maxi;
    
}

module.exports = findLargestElement;