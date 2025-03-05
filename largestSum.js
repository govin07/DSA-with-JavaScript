function findlargest(array,num){
 if(num>array){
    console.log("num is not greater than array")
 }else{
    let max = 0;
    for(let i = 0; i<array.length - num + 1; i++){
        let temp = 0;
        for(let j=0;j<num; j++){
            temp+=array[j];

        }
        if(temp>max){
            max=tamp;
        }
    }
    return max;
 }
}

const result = findlargest([1,2,3,4,3,5,4,6,7,8],4);

console.log("result", result)