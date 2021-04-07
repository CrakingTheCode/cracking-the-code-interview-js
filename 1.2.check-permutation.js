/**
 * 1.2 Check Permutation
 * 
 * Given two strings, write a method to decide if one is a permutation of the other
 */
function checkPermutation(str1, str2){
    // Check if the strings are the same length
      // If this is not true we can return false

  if(str1.length !== str2.length) {
    return false;
  }

  let candidateArr = [];

  for(let i = 0; i < str1.length; i++){
    let word = str1[i];
    console.log(word)

    if(candidateArr[word]){
      candidateArr[str1.charAt(i)]++;
    } else {
      candidateArr[str1.charAt(i)] = 1;
    }
  }
  
  for(let j = 0; j < str2.length; j++){
    candidateArr[str2.charAt(j)]--;
  }
  return true;
}

console.log(checkPermutation('car', 'car'));