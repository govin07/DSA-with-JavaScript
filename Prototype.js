class Robot{
    constructor(name, betteryLevel){
        this.name = name;
        this.betteryLevel = betteryLevel;

    }

    charge(){
        if(this.betteryLevel === 100){
            return this.betteryLevel
        }else if(this.betteryLevel === 90){
            return this.betteryLevel += 10;
        }else{
           return this.betteryLevel += 20;
        }
    }
}

const rob1 = new Robot("rob1", 50)
const rob2 = new Robot("rob2", 90);
const rob3 = new Robot("rob3", 100)

console.log(rob1.charge())
console.log(rob2.charge())
console.log(rob3.charge())
