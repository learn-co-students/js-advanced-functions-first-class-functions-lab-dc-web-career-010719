// Code your solution in this file!
const returnFirstTwoDrivers = function (array) { 
  newArr = array.slice(0,2)
  return newArr
}

const returnLastTwoDrivers = function (array) { 
  newArr = array.slice(-2)
  return newArr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
  return function (value) {
    return multiplier * value
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = function (drivers, specificDrivers) {
  return specificDrivers(drivers)
}