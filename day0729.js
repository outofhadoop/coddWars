
// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

var moveZeros = function (arr) {
    let ar = arr, l = 0;
    for ( let i = 0; i < ar.length; ++i ) {
        if ( typeof ar[i] == "number" && ar[i] === 0 ) {
            let a = arr.splice( i, 1 );
            ar.push( a[0] );
            console.log( i );
            i =  i - 1;
            l ++ ;
            if ( l >= ar.length ) {
                break;
            }
        }
    }
    return ar;
  }

console.log( JSON.stringify(moveZeros([9,0,9,9,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0])) );

// best answer
var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
  }