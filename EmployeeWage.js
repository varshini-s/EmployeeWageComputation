{
    const IS_ABSENT = 0

    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_ABSENT)
    {
        console.log("Employee is Absent");
        return
    }
    else
    {
        console.log("Employee is Present");
    }
}

const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

let employeeHours=0;
let employeeCheck=Math.floor(Math.random()*10)%3;
switch(employeeCheck)
{
    case IS_PART_TIME:
        employeeHours=PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        employeeHours=FULL_TIME_HOURS;
        break;
    default:
        employeeHours=0;
}

let employeeWage=employeeHours*WAGE_PER_HOUR;
console.log("Employee wage: "+employeeWage);