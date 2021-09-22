function getDayInMonth(month){
    switch(month){
        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "October":
        case "December":
            return 31
        case "February":
            return 28
        case "April":
        case "June":
        case "September":
        case "November":
            return 30
        default:
            break;
        
    }
}
console.log( getDayInMonth("January") )
// Ska returnera 31
console.log( getDayInMonth("February") )
//ska returnera 29
console.log( getDayInMonth("March") )
// Ska returnera 31
console.log( getDayInMonth("April") )
// Ska returnera 30