const day = "saturday"
const startTime = 9;
const endTime = 17;
const hourlySalary = 100;

const maxHours = 12;
const extraHoursCountsFrom = 8;

const totalHours = endTime - startTime;

let extraHours = 0;
let isWeekend = false;

if(totalHours > extraHoursCountsFrom) {
    extraHours = totalHours - extraHoursCountsFrom
}

if(day == "saturday" || day == "sunday") {
    isWeekend = true;
}

if(totalHours < maxHours){
    let normalSalary;
    let extraSalary;
    let weekendSalary;
    if(isWeekend) {
        normalSalary = totalHours * hourlySalary;
        extraSalary = 0;
        weekendSalary = normalSalary;
    } else {
        normalSalary = totalHours * hourlySalary;
        extraSalary = extraHours * hourlySalary * 0.5;
        weekendSalary = 0;
    }

    const totalSalary = normalSalary + extraSalary + weekendSalary;
    console.log(`Your total salary is ${totalSalary} moneys`);

} else {
    console.log("Stop working!!!")
}