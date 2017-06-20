// Rahul Kalra
// Return the  missing number in an input array of consecutively increasing number

const solution3 = (array) =>{
  let missNum = 0;
  for( let i = 0; i < array.length; i++){
    if( array[i+1]){
      if( (array[i+1] - array[i]) > 1){
        missNum = array[i] + 1;
        return missNum;
      } 
    }
  }
  return null;
};

// Zach Nagatani
// * Finds and returns the missing number from an array of consecutively increasing numbers
// * @param {Number[]} arr - An array of consecutively increasing numbers
// * @returns {Number|null} missingNum - the number missing from the input array or null if none is found


const solution1 = arr => {
    let missingNum = null,
        i = 0;

    while (!missingNum && i < arr.length - 1) {
        const current = arr[i];
              next = arr[i + 1];

        missingNum = next === current + 1 ? missingNum : next - 1;
        i++;
    }

    return missingNum;
};
// Zach Nagatani
/*
 * Finds and returns the missing number from an array of consecutively
 * increasing numbers
 * @param {Number[]} arr - An array of consecutively increasing numbers
 * @returns {Number|null} missingNum - the number missing from
 * the input array or
 * null if none is found
 */


 const solution2 = arr => {
  let i = 1;

  while (i < arr.length && arr[i - 1] + 1 === arr[i]) {
      i++;
  }
  return i === arr.length ? null : arr[i - 1] + 1;
}


module.exports = {
  solution1,
  solution2,
  solution3
};

