// Manik Sachdeva: msach22
// create a function that returns in reverse

const solution = (string) => {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  };
  return newString;
};

module.exports = {
  solution
};
