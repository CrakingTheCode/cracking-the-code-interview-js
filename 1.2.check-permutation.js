/**
 * 1.2 Check Permutation
 * 
 * Given two strings, write a method to decide if one is a permutation of the other
 */

function checkPermutationWithSorting(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const str1Sorted = str1.split('').sort().join();
  const str2Sorted = str2.split('').sort().join();
  return str1Sorted === str2Sorted;
}


function checkPermutationWithHashMap(str1, str2) {
 
  if (str1.length !== str2.length) {
    return false;
  }

  const hashmap = {};

  for(let i = 0; i < str1.length; i++) {
    const character = str1[i];
    if (hashmap[character]) {
      hashmap[character]++;
    } else {
      hashmap[character] = 1;
    }
  }

  for(let i = 0; i < str2.length; i++) {
    const character = str2[i];

    if(!hashmap[character]) {
      return false;
    } else {
      hashmap[character]--;
    }
  }

  return true;
}

console.log(checkPermutationWithHashMap('carro', 'rac'))
console.log(checkPermutationWithSorting('car', 'racc'));