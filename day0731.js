/**
 * Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
 * #Example 1: a1 = ["arp", "live", "strong"]
 * a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
 * returns ["arp", "live", "strong"]
 * #Example 2: a1 = ["tarp", "mice", "bull"]
 * a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
 * returns []
 * Notes:
 * Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
 * In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
 * Beware: r must be without duplicates.
 * Don't mutate the inputs.
 */

function inArray(array1,array2){
    let a = new Set();
    array1.forEach(el => {
        array2.forEach(item => {
            if ( item.indexOf(el) !== -1 ) {
                a.add(el);
            } else if ( el.indexOf(item) !== -1 ) {
                item.add(el);
            } 
        });
    });
    return [...a];   
  }

 let a1 = ["arp", "live", "strong"], a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
 console.log( inArray(a1, a2) );