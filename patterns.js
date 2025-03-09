let stars1 = "";


function pattern1(n){
    for(let i = 0; i <n; i++){
        for(let j = 0; j<n; j++){
            stars1 += "* "
        }
        stars1 += "\n"
    
    }
}
pattern1(2)
pattern1(3)
pattern1(5)

// pattern2


let start2 = "";

function pattern2 (n){
    for(let i = 0; i <n; i++){
        for(let j = 0; j<=i; j++){
            start2  += "* ";
        }
        start2 += "\n";
    }
}

pattern2(5);
pattern2(3);

// console.log(start2)

let result = "";
function pattern3(n){
   
    for(let i=1; i<n;i++){
        for(let j=1; j<=i; j++ ){
            result += j + " ";
        }
        result += "\n"
    }
}

pattern3(6)

// console.log(result)
let result2 = "";

function pattern4(n){
   
    for(let i=1; i<=n;i++){
        for(let j=1; j<=i; j++ ){
            result2 += i + " ";
        }
        result2 += "\n"
    }
}

pattern4(5);

// console.log(result2);

let result3 = "";

function pattern5 (n){
    for(let i=n; i>=1; i--){
        for(let j =0; j<i; j++)
        {
            result3 += "* ";
        }
        result3 += "\n";
    }
};

pattern5(5);

// console.log(result3)

let result4 = "";

function pattern6 (n){
    for(let i=n; i>=1; i--){
        for(let j =1; j<=i; j++)
        {
            result4 += j + " ";
        }
        result4 += "\n";
    }
};

pattern6(5);

// console.log(result4)

let result5 = "";

function pattern7 (n){
    for(let i=0; i<5; i++){
        for (let j = 1; j <= n - i; j++) {
            result5 += " ";  
        }

        // Add stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            result5 += "*";
        }

        result5 += "\n";  // Move to the next line
    }

    
    
};

pattern7(5);


console.log(result5)
