// Rahul Kalra
// Return an array of the diagnal values starting from 0,0 from a 2D array input(gauranteed to be square).

const solution = (array) =>{
  let newArray = [];

  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
     if(i === j){
      newArray.push(array[i][j]);
    }
    }
  }
  return newArray;
};

module.exports = {solution};
