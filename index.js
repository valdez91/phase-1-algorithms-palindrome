 change=(word) =>{
  return word.split('').reverse().join('')
}
function isPalindrome(word) {
  const changeWord = change(word);

  return word === changeWord;
}



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


