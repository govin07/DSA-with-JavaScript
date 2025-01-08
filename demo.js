let array = [-5,-4, -3, -2, 0 , 2 , 4, 6, 8 ];

function getSumOFNum(array){
    for(let number of array){
        
        for(let j = 1; j<array.length; j++ ){
            if(number + array[j] ==0 ){
                return [number , array[j]]
            }
        }
    }
}

 const result = getSumOFNum(array)

 console.log(result)