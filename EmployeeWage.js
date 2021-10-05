const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const NUMBER_OF_WORKING_DAYS=10;
const MAX_HOURS_IN_MONTH=100;
function getWorkingHours(employeeCheck)
{

    switch (employeeCheck)
     {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

let totalEmployeeHours=0;
let totalWorkingDays=0;
while(totalEmployeeHours<=MAX_HOURS_IN_MONTH && totalWorkingDays<NUMBER_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let employeeCheck=Math.floor(Math.random()*10)%3;
    totalEmployeeHours+=getWorkingHours(employeeCheck);
}

let employeeWage=totalEmployeeHours*WAGE_PER_HOUR;
console.log("Employee hours "+totalEmployeeHours+" Employee wage: "+employeeWage);