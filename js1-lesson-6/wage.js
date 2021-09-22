/*
day
startTime
endTime
hourlySalary
*/

class Wage {
    constructor(day, startTime, endTime, hourlySalary) {
        this.day = day
        this.startTime = startTime
        this.endTime = endTime
        this.hourlySalary = hourlySalary

        this.maxHours = 12
        this.extraHoursCountsFrom = 8

        this.normalSalary = 0
        this.extraSalary = 0
        this.weekendSalary = 0
    }
    getTotalHours() {
        return this.endTime - this.startTime
    }
    getExtraTimeHours() {
        if (this.getTotalHours() > this.extraHoursCountsFrom) {
            return this.getTotalHours() - this.extraHoursCountsFrom
        } else {
            return 0
        }
    }
    isWeekend() {
        return this.day === "Saturday" || this.day === "Sunday"
        /*
        if(this.day === "Saturday" || this.day === "Sunday") {
            return true
        } else {
            return false
        }
        */
    }
    calculateWeekDayWage() {
        this.normalSalary = this.getTotalHours() * this.hourlySalary
        this.extraSalary = this.getExtraTimeHours() * this.hourlySalary * 0.5
    }
    calculateWeekEndWage() {
        this.normalSalary = this.getTotalHours() * this.hourlySalary
        this.weekendSalary = this.normalSalary
    }
    calculateWage() {
        if( this.isWeekend() ) {
            this.calculateWeekEndWage()
        } else {
            this.calculateWeekDayWage()
        }
        return this.normalSalary + this.extraSalary + this.weekendSalary
    }
    getMessage() {
        if(this.getTotalHours() > this.maxHours) {
            return `you may not work for more than ${this.maxHours} hours. You have worked for ${this.getTotalHours()} hours`
        } else{
            return `Your total salary is ${this.calculateWage()}`
        }
    }

}

const wage1 = new Wage("Monday", 8, 17, 200)
console.log( wage1.getMessage() )

const wage2 = new Wage("Sunday", 10, 13, 200)
console.log( wage2.getMessage() )

const wage3 = new Wage("Tuesday", 8, 21, 200)
console.log( wage3.getMessage() )

//console.log( wage1.getTotalHours() )
//console.log( wage1.getExtraTimeHours() )
//console.log( wage1.isWeekend() )
