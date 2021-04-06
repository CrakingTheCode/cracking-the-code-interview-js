/**
 * 1.1 Is Unique
 * 
 * Implement an algorithm to determine if a string has all unique characters. 
 * What if you cannot use additional data structures?
 
--> my Input is a string
--> my Ouput is a boolean
 */

function isUnique(string){
    // setup a empty obj and check each character and store 
    let obj = {};
    // compute the string
    for(let i = 0; i < string.length; i++){
        let char = string[i];
        // if the obj has the character, return false
        if(obj[char]){
            return false;
        }else{
            obj[char] = true;
        }
    }
    // return true
    return true;
}

console.log(isUnique('Rainbow'));
