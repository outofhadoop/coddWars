/**
 * You probably know the "like" system from Facebook and other pages.
 * People can "like" blog posts, pictures or other items.
 *  We want to create the text that should be displayed next to such an item.
 * Implement a function likes :: [String] -> String,
 *  which must take in input array,
 *  containing the names of people who like an item.
 * It must return the display text as shown in the examples:
 * likes [] // must be "no one likes this"
 * likes ["Peter"] // must be "Peter likes this"
 * likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
 * likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
 * likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
 * For 4 or more names, the number in and 2 others simply increases.
 */

function likes(names) {
  let l = names.length,words = "no one likes this";
  if ( l == 1 ) {
    words = names[0] + " likes this";
  } else if ( l == 2 ) {
    words = "";
    words = names[0] + " and " + names[1] + " like this";
  } else if ( l == 3 ) {
    words = names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else if ( l >= 4 ) {
    words = "";
    words = names[0] + ", " + names[1] + " and " + (l - 2) + " others like this";
  }
  return words;
}
console.log(likes(['1', '2', '3', '4', '5', '6']));

// so terriable

// good answer

function likes(names) {
    return {
      0: 'no one likes this',
      1: `${names[0]} likes this`, 
      2: `${names[0]} and ${names[1]} like this`, 
      3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
      4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
    }[Math.min(4, names.length)]
  }