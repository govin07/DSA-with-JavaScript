let count = 0;

function increament(){
    if( count === 4){
        return;
    }else{
        count++;
        console.log(`count is ${count}`);
        increament();
    }
};


function calling(){
    console.log(count)
    increament();
}

const getMaxCallStackSize = (i) => {
    try {
      return getMaxCallStackSize(++i);
    } catch {
      return i;
    }
  };
  
  console.log(getMaxCallStackSize(0));
  





// calling()