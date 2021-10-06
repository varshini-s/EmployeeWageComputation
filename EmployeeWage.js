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

function calculateDailyWages(employeeHours)
{
    return employeeHours*WAGE_PER_HOUR;
}

let totalEmployeeHours=0;
let totalWorkingDays=0;
let employeeWageArray = new Array();
let employeeDailyWageMap = new Map();
while(totalEmployeeHours<=MAX_HOURS_IN_MONTH && totalWorkingDays<NUMBER_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let employeeCheck=Math.floor(Math.random()*10)%3;
    let employeeHours=getWorkingHours(employeeCheck);
    totalEmployeeHours+=employeeHours;
    employeeWageArray.push(calculateDailyWages(employeeHours));
    employeeDailyWageMap.set(totalWorkingDays,calculateDailyWages(employeeHours))
}

console.log(employeeDailyWageMap)
function totalWages(totalWage,dailyWage)
{
    return totalWage+dailyWage
}
console.log("Employee wage map totalHours: "+Array.from(employeeDailyWageMap.values()).reduce(totalWages,0))

let employeeWage=calculateDailyWages(totalEmployeeHours)
console.log("total days: "+totalWorkingDays+" Employee hours: "+totalEmployeeHours+" Employee wage: "+employeeWage);

let totalEmployeeWage=0;
//Calculating daily wage using for each
function totalWagesUsingForEach(dailyWage)
{
    totalEmployeeWage+=dailyWage
}
employeeWageArray.forEach(totalWagesUsingForEach);
console.log("total days: "+totalWorkingDays+" Employee hours: "+totalEmployeeHours+" Employee wage: "+totalEmployeeWage);

//Calculating daily wages using reduce
function totalWagesUsingReduce(totalWage,dailyWage)
{
    return totalWage+dailyWage;
}
console.log("Employee wage with reduce:"+employeeWageArray.reduce(totalWagesUsingReduce,0));

let dailyCounter=0;
//mapping day with wage earned that day
function mapDayWithWage(dailyWage)
{
    dailyCounter++;
    return dailyCounter+" = "+dailyWage;
}

let mapDayWithWageArray=employeeWageArray.map(mapDayWithWage);
console.log("Mapping day with Wage earned on that day");
console.log(mapDayWithWageArray)

//Using filter to show when full time wage of 160 was earned
function fulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArray=mapDayWithWageArray.filter(fulltimeWage);
console.log("Daily wage filter when full time wage earned ")
console.log(fullDayWageArray)

//Find first occurence when full time wage was earned using find
function findFulltimeWage(dailyWage)
{
    return dailyWage.includes("160")
}
console.log("First full time wage was earned on Day: "+mapDayWithWageArray.find(findFulltimeWage))

//check if every element of full time wage is truely holding full time wage
function isAllFullTimeWage(dailyWage)
{
    return dailyWage.includes("160")
}
console.log("Check if all element have Full time Wage: "+fullDayWageArray.every(isAllFullTimeWage))

//check if there is any part time wage
function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80")
}
console.log("Check if any part time Wage :"+mapDayWithWageArray.some(isAnyPartTimeWage))

//find number of days the employee worked
function totalDaysWorked(numberOfDays,dailyWage)
{
    if(dailyWage>0)
    {
        return numberOfDays+1;
    }

    return numberOfDays;
}
console.log("Number of days employee worked: "+employeeWageArray.reduce(totalDaysWorked,0));