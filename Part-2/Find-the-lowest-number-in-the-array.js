/*
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
*/

const heights2 = [167, 190, 120, 165, 137];
function lowest_number(arr) {
    let min = arr[0];
    for(let i=1; i<arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
const result = lowest_number(heights2);
console.log("The lowest number is: "+result);