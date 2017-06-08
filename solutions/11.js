//Rahul Kalra
//Return repeating elements of an array

const solution = (array) => {
  let newArray = [];
  let data = [];
  for(let i = 0; i < array.length; i++){
    if(!(data[array[i]])){
      data[array[i]] = 1;
    }else{
      data[array[i]]++; 
    }
  }
  for(let key in data){
    if(data[key] > 1){
      newArray.push(Number(key));
    }
  }
  return newArray;
};

module.exports = {solution};

/*// vdewinter
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
  solution
};

*/
