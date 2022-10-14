const Mark = {
    fullName : 'Mark Miller',
    mass : 78,
    height: 1.69,
    calcBMI : function(){
        this.BMI = this.mass / (this.height**2);
        return this.BMI;
    }
}
const John = {
    fullName : 'John Smith',
    mass : 92,
    height: 1.95,
    calcBMI : function(){
        this.BMI = this.mass / (this.height**2);
        return this.BMI;
    }
}

if(John.calcBMI>Mark.calcBMI){
    console.log(`${John.fullName} BMI (${John.calcBMI()}) is higher than ${Mark.fullName} BMI (${Mark.calcBMI()})`)
}

else{
    console.log(`${Mark.fullName} BMI (${Mark.calcBMI()}) is higher than ${John.fullName} BMI (${John.calcBMI()})`);
}