function nameP(i,n){
    if(i < n){
        return;
    }else{
        console.log(i)
        nameP(i-1,n)
        console.log(i)
    }

}


function main(){
    let n = 5;
    nameP(n,n)
}

main()