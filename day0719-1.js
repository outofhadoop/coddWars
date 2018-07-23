/**
 * You are given an array (which will have a length of at least 3, but could be very large) containing integers.
 * The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
 * Write a method that takes the array as an argument and returns this "outlier" N.
 */
// unfinished!!!
 function findOutLier ( integers ) {
 	var odd = 0, even = 0;
 	integers.forEach(i => {
 		if ( i % 2 == 0 ) {
 			odd ++;
 		} else {
 			even ++;
 		}
 		if ( odd == 1 || even == 1 ) {
 			
 		}
 	});
 }