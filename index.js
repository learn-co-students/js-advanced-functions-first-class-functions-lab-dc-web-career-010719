// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(Math.max(drivers.length - 2, 1))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
  return function(num){
    console.log(num, int)
    return num * int
  }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)


function fetchSpecifiedDrivers(array, func){

  return func(array)


}
