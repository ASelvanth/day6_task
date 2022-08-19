class Bank{
    constructor(name,accno,bal){
        this.name= name;
        this.accno= accno;
        this.bal= bal;
    }
   
}
const selva = new Bank("selva",1234,40000);
console.log(selva);
const john = new Bank("john",4567,50000);
console.log(john);
const arul = new Bank("Arul",8791,60000);
console.log(arul);