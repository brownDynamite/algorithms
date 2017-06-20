//Rahul Kalra
//Return repeating elements of an array

const solution2 = (inputArr) => {
  let newArray = [];
  let counter = [];
  for(let i = 0; i < inputArr.length; i++){
    if(!(counter[inputArr[i]])){
      counter[inputArr[i]] = 1;
    }else{
      counter[inputArr[i]]++; 
    }
  }
  for(let key in counter){
    if(counter[key] > 1){
      newArray.push(Number(key));
    }
  }
  return newArray;
};
// vdewinter
// Create a function that returns only the values of an array that are repeated
// Input: [1,8,8,8,7,7,1,3]
// Output: [8,7,1]

const solution = (input) => {
	if (!input) {
		return [];
	}
	const seen = {};
	const result = new Set();
	input.forEach((k) => {
		if (seen[k]) {
			result.add(k);
		}
		seen[k] = true;
	})
	return [...result];
};

module.exports = {
  solution,
  solution2 
};


