function isAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;

    }
    let couter = {}
    for (let letter of str1){
        couter[letter]=(couter[letter] || 0) + 1;
        console.log(couter[letter])

    }
    for (let items of str2){
       if(!couter[items]){
        return false;
       }
      
       couter[items] -= 1;
    }
    
    return true;

}

 const check = isAnagram('govind','indvog');
 console.log(check)