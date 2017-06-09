// Rahul Kalra
// should retirn true if the input has duplicates values and false if it doesn't

const solution = (array) => {
  let data = {};
  for(let i = 0; i < array.length; i++){
    if(!(data[array[i]])){
      data[array[i]] = 1;
    }
    else{
      data[array[i]]++;
    }
  }
  for(let key in data){
    if((data[key]) > 1){
      return true;
    }
  }
  return false;
};

module.exports = {solution};

/*
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
  solution
};
*/
