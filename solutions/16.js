// Rahul Kalra
// should return true if the input has duplicates values and false if it doesn't

const solution2 = (array) => {
  let dataWithDuplicates = {};
  for(let i = 0; i < array.length; i++){
    if(!(dataWithDuplicates[array[i]])){
      dataWithDuplicates[array[i]] = 1;
    }
    else{
      return true;
    }
  }
  return false;
};

 //Manik Sachdeva: msach22
// should return true if the input array has duplicate values and false if it doesn't

const solution = (array) => {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]]) {
      return true;
    }
    map[array[i]] = true;
  };
  return false;
}

module.exports = {
  solution,
  solution2
};

