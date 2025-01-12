// ========= ARRAYS IN JAVASCRIPT =============
const myArray = [0,2,5,6, true, "xyz"];// Array declaration ... (array literals)
//const myArray2 = new Array(1,2,3,4,); // Another method to declare array ... (array constructor)
// [,, ] // it means that array possess : <2 empty items>
// ... Accessing array and it's elements ....
console.log (myArray); // Out Put will be the complete array
//console.log (myArray[5]); // OutPut : true

// .... Array Methods ......
// ... 1. PUSH .... Add element at the end
// myArray.push(200);
// console.log (myArray); // [    0,   2,    5,    6,   true, 'xyz',    200  ]
// ... 2. POP ... To remove the last item/value
// myArray.pop(); // To remove the last item ; (Note : no value in the parenthesis)
// console.log (myArray);// [ 0, 2, 5, 6, true, 'xyz' ]
//.... 3. UNSHIFT ... Used to add element at the beginning, it shift all the values by an index number "1", so it will be slow.
// myArray.unshift(111);
// console.log (myArray); [ 111, 0, 2,  5, 6, true, 'xyz']
// ... 4. SHIFT ....  Remove the very first element
// myArray.shift(111);
// console.log (myArray); // [2, 5, 6, true, 'xyz' ]

