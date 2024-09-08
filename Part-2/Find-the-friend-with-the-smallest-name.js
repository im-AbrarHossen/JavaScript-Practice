/*
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function smallestName(arr) {
    let smallest = arr[0];
    for(let i=1; i<arr.length; i++) {
        if(arr[i].length < smallest.length) {
            smallest = arr[i];
        }
    }
    return smallest;
}
result = smallestName(heights2);
console.log("The smallest name of the friend is: "+result);