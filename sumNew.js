let array = [-5,-4,-3,-2,0,2,4,6,8];

function findSumPair(array){
    let left = 0;
    let right = array.length - 1;

    while(left < right){
        let sum = array[left] + array[right];
        if(sum == 0){
            return [array[left], array[right]];
        }
        else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
    return null; // Return null if no pair is found
}

const result = findSumPair(array);

console.log(result);