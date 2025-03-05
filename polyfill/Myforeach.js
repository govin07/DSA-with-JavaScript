if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(cb){
        for(let i = 0; i < this.length; i++){
            cb(this[i],i);
        }
    }
};

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(cb){
        const result = [];
        for(let i = 0; i < this.length; i++){
            const value = cb(this[i],i);
            result.push(value)
        }
        return result
    }
}



let arr = [1,2,3,4,5];

// arr.myForEach((item,index)=> console.log(`index is ${index},and value is ${item}`));

const final = arr.myMap((item,index)=> item*2);

console.log(final)