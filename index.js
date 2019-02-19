// Code your solution in this file!
 const returnFirstTwoDrivers = function (arry) {
  return  arry.slice(0,2)
}

const returnLastTwoDrivers = function (arry) {
  return arry.slice(Math.max(arry.length - 2, 1))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(amount) {
  return fare => fare * amount;
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(drivers, callback) {
  return callback(drivers);
} 
